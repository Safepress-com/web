import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, ArrowRight, ArrowLeft, User, Building, Lightbulb, Code, TrendingUp, DollarSign, Target, X, Home } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { CustomSelect } from '../ui/CustomSelect';
import { submitFounderApplication, ApiError } from '../../services/api';
import type { FounderApplicationData } from '../../services/api';

interface FormData {
  // Pre-screening
  isFounder: string;

  // Founder Info
  founderName: string;
  founderEmail: string;
  linkedInProfile: string;
  previousExperience: string;

  // Company Basics
  companyName: string;
  companyStage: string;
  oneLineDescription: string;
  targetMarket: string;

  // The Problem
  problemSolving: string;
  problemTimeline: string;

  // Technical Needs
  mvpScope: string;
  currentResources: string;
  technicalChallenges: string;

  // Traction & Validation
  customerFeedback: string;
  metrics: string;
  successMeasure: string;

  // Funding
  raisingAmount: string;
  fundraisingStatus: string;
  fundingUse: string;

  // Fit Questions
  whySafePress: string;
  readyPrototype: string;
  timeline: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  isFounder: '',
  founderName: '',
  founderEmail: '',
  linkedInProfile: '',
  previousExperience: '',
  companyName: '',
  companyStage: '',
  oneLineDescription: '',
  targetMarket: '',
  problemSolving: '',
  problemTimeline: '',
  mvpScope: '',
  currentResources: '',
  technicalChallenges: '',
  customerFeedback: '',
  metrics: '',
  successMeasure: '',
  raisingAmount: '',
  fundraisingStatus: '',
  fundingUse: '',
  whySafePress: '',
  readyPrototype: '',
  timeline: ''
};

const formSteps = [
  {
    id: 0,
    title: 'Are you a founder?',
    icon: User,
    description: 'Quick question to get started',
    fields: ['isFounder']
  },
  {
    id: 1,
    title: 'Founder Info',
    icon: User,
    description: 'Tell us about yourself',
    fields: ['founderName', 'founderEmail', 'linkedInProfile', 'previousExperience']
  },
  {
    id: 2,
    title: 'Company Basics',
    icon: Building,
    description: 'Your company overview',
    fields: ['companyName', 'companyStage', 'oneLineDescription', 'targetMarket']
  },
  {
    id: 3,
    title: 'The Problem',
    icon: Lightbulb,
    description: 'What you\'re solving',
    fields: ['problemSolving', 'problemTimeline']
  },
  {
    id: 4,
    title: 'Technical Needs',
    icon: Code,
    description: 'Your tech requirements',
    fields: ['mvpScope', 'currentResources', 'technicalChallenges']
  },
  {
    id: 5,
    title: 'Traction & Validation',
    icon: TrendingUp,
    description: 'Your progress so far',
    fields: ['customerFeedback', 'metrics', 'successMeasure']
  },
  {
    id: 6,
    title: 'Funding',
    icon: DollarSign,
    description: 'Financial details',
    fields: ['raisingAmount', 'fundraisingStatus', 'fundingUse']
  },
  {
    id: 7,
    title: 'Fit Questions',
    icon: Target,
    description: 'Final questions',
    fields: ['whySafePress', 'readyPrototype', 'timeline']
  }
];

const stageOptions = [
  { value: 'pre-seed', label: 'Pre-seed' },
  { value: 'seed', label: 'Seed' }
];

const readyOptions = [
  { value: 'yes', label: 'Yes, absolutely' },
  { value: 'maybe', label: 'Maybe, tell me more' },
  { value: 'no', label: 'No, I need more time' }
];

const STORAGE_KEY = 'safepress_application_form';
const CURRENT_STEP_KEY = 'safepress_application_step';

export function ApplicationPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [originalFormData, setOriginalFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const savedStep = localStorage.getItem(CURRENT_STEP_KEY);
    
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
        setOriginalFormData(parsedData);
      } catch (error) {
        console.error('Error parsing saved form data:', error);
      }
    }
    
    if (savedStep) {
      try {
        const step = parseInt(savedStep);
        if (step >= 0 && step < formSteps.length) {
          setCurrentStep(step);
        }
      } catch (error) {
        console.error('Error parsing saved step:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever form data changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  // Save current step to localStorage
  useEffect(() => {
    localStorage.setItem(CURRENT_STEP_KEY, currentStep.toString());
  }, [currentStep]);

  // Check for unsaved changes
  useEffect(() => {
    const hasChanges = JSON.stringify(formData) !== JSON.stringify(originalFormData);
    setHasUnsavedChanges(hasChanges);
  }, [formData, originalFormData]);

  // Handle browser back/refresh with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges && status.type !== 'success') {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges, status.type]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateCurrentStep = (): boolean => {
    const newErrors: FormErrors = {};
    const currentStepData = formSteps.find(step => step.id === currentStep);
    
    if (!currentStepData) return true;

    currentStepData.fields.forEach(field => {
      const value = formData[field as keyof FormData];
      if (!value || !value.trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    if (currentStep === 1 && formData.founderEmail) {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!emailRegex.test(formData.founderEmail.trim())) {
        newErrors.founderEmail = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep() && currentStep < formSteps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCurrentStep()) {
      return;
    }
    
    setStatus({ type: 'loading', message: 'Submitting your application...' });

    try {
      // Map form data to API format
      const apiData: FounderApplicationData = {
        isFounder: formData.isFounder,
        founderName: formData.founderName,
        founderEmail: formData.founderEmail,
        linkedInProfile: formData.linkedInProfile,
        previousExperience: formData.previousExperience,
        companyName: formData.companyName,
        companyStage: formData.companyStage,
        oneLineDescription: formData.oneLineDescription,
        targetMarket: formData.targetMarket,
        problemSolving: formData.problemSolving,
        problemTimeline: formData.problemTimeline,
        mvpScope: formData.mvpScope,
        currentResources: formData.currentResources,
        technicalChallenges: formData.technicalChallenges,
        customerFeedback: formData.customerFeedback,
        metrics: formData.metrics,
        successMeasure: formData.successMeasure,
        raisingAmount: formData.raisingAmount,
        fundraisingStatus: formData.fundraisingStatus,
        fundingUse: formData.fundingUse,
        whySafePress: formData.whySafePress,
        readyPrototype: formData.readyPrototype,
        timeline: formData.timeline
      };
      
      // Submit to API
      await submitFounderApplication(apiData);
      
      setStatus({
        type: 'success',
        message: 'Thank you! We\'ll review your application and get back to you.'
      });
      
      // Clear saved data after successful submission
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(CURRENT_STEP_KEY);
      setHasUnsavedChanges(false);
      
    } catch (error) {
      console.error('Application submission error:', error);
      
      if (error instanceof ApiError) {
        if (error.status === 429) {
          const retryMessage = error.retryAfter 
            ? ` Please try again in ${Math.ceil(error.retryAfter / 60)} minutes.`
            : ' Please try again later.';
          setStatus({
            type: 'error',
            message: `Rate limit exceeded.${retryMessage}`
          });
        } else if (error.details?.length) {
          setStatus({
            type: 'error',
            message: `Validation errors: ${error.details.join(', ')}`
          });
        } else {
          setStatus({
            type: 'error',
            message: error.message
          });
        }
      } else {
        setStatus({
          type: 'error',
          message: 'Sorry, there was an error submitting your application. Please try again.'
        });
      }
    }
  };

  const handleExitAttempt = useCallback(() => {
    if (hasUnsavedChanges && status.type !== 'success') {
      setShowExitConfirm(true);
    } else {
      navigate('/vc');
    }
  }, [hasUnsavedChanges, status.type, navigate]);

  const confirmExit = () => {
    navigate('/vc');
  };

  const cancelExit = () => {
    setShowExitConfirm(false);
  };

  const clearSavedData = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(CURRENT_STEP_KEY);
    setFormData(initialFormData);
    setCurrentStep(0);
    setHasUnsavedChanges(false);
    setShowExitConfirm(false);
  };

  const currentStepData = formSteps.find(step => step.id === currentStep);
  const IconComponent = currentStepData?.icon || User;
  const progress = ((currentStep + 1) / formSteps.length) * 100;

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 px-4">
              Are you a founder?
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-md mx-auto px-4">
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, isFounder: 'yes' }));
                  // Use setTimeout to ensure state update happens first
                  setTimeout(() => {
                    handleNext();
                  }, 100);
                }}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 bg-white border-2 border-slate-200 text-slate-700 hover:border-safepress-primary hover:text-safepress-primary hover:bg-safepress-primary/5"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, isFounder: 'no' }));
                  // Use setTimeout to ensure state update happens first
                  setTimeout(() => {
                    handleNext();
                  }, 100);
                }}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-600 hover:text-slate-600 hover:bg-slate-50"
              >
                No
              </button>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="founderName"
                  value={formData.founderName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                    errors.founderName ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                  }`}
                  placeholder="Full Name"
                />
                {errors.founderName && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.founderName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="founderEmail"
                  value={formData.founderEmail}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                    errors.founderEmail ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                  }`}
                  placeholder="Email"
                />
                {errors.founderEmail && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.founderEmail}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                type="url"
                name="linkedInProfile"
                value={formData.linkedInProfile}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                  errors.linkedInProfile ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="LinkedIn Profile URL"
              />
              {errors.linkedInProfile && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.linkedInProfile}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="previousExperience"
                value={formData.previousExperience}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.previousExperience ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="Previous startup/technical experience"
              />
              {errors.previousExperience && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.previousExperience}
                </p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                    errors.companyName ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                  }`}
                  placeholder="Company Name"
                />
                {errors.companyName && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.companyName}
                  </p>
                )}
              </div>
              <div>
                <CustomSelect
                  options={stageOptions}
                  value={formData.companyStage}
                  onChange={(value) => {
                    setFormData(prev => ({ ...prev, companyStage: value }));
                    // Clear error when selection is made
                    if (errors.companyStage) {
                      setErrors(prev => ({ ...prev, companyStage: '' }));
                    }
                  }}
                  placeholder="Select Stage"
                  className={errors.companyStage ? 'error' : ''}
                />
                {errors.companyStage && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.companyStage}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                name="oneLineDescription"
                value={formData.oneLineDescription}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                  errors.oneLineDescription ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="One-sentence description of what you're building"
              />
              {errors.oneLineDescription && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.oneLineDescription}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="targetMarket"
                value={formData.targetMarket}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.targetMarket ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="Target market/customer"
              />
              {errors.targetMarket && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.targetMarket}
                </p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <textarea
                name="problemSolving"
                value={formData.problemSolving}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.problemSolving ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="What specific problem are you solving?"
              />
              {errors.problemSolving && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.problemSolving}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="problemTimeline"
                value={formData.problemTimeline}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.problemTimeline ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="Why does this problem matter now?"
              />
              {errors.problemTimeline && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.problemTimeline}
                </p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <textarea
                name="mvpScope"
                value={formData.mvpScope}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.mvpScope ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="What do you need built first? (MVP scope)"
              />
              {errors.mvpScope && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.mvpScope}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="currentResources"
                value={formData.currentResources}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.currentResources ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="Current technical resources (if any)"
              />
              {errors.currentResources && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.currentResources}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="technicalChallenges"
                value={formData.technicalChallenges}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.technicalChallenges ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="Biggest technical challenges you foresee"
              />
              {errors.technicalChallenges && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.technicalChallenges}
                </p>
              )}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <textarea
                name="customerFeedback"
                value={formData.customerFeedback}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.customerFeedback ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="Early customers, LOIs, or user feedback"
              />
              {errors.customerFeedback && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.customerFeedback}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="metrics"
                value={formData.metrics}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.metrics ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="Revenue/usage metrics (if any)"
              />
              {errors.metrics && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.metrics}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="successMeasure"
                value={formData.successMeasure}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.successMeasure ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="How will you measure success in the first 90 days?"
              />
              {errors.successMeasure && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.successMeasure}
                </p>
              )}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="raisingAmount"
                value={formData.raisingAmount}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                  errors.raisingAmount ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="How much are you raising?"
              />
              {errors.raisingAmount && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.raisingAmount}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="fundraisingStatus"
                value={formData.fundraisingStatus}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.fundraisingStatus ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="Current fundraising status"
              />
              {errors.fundraisingStatus && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.fundraisingStatus}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="fundingUse"
                value={formData.fundingUse}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.fundingUse ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="Use of funds breakdown"
              />
              {errors.fundingUse && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.fundingUse}
                </p>
              )}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div>
              <textarea
                name="whySafePress"
                value={formData.whySafePress}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.whySafePress ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="Why SafePress vs traditional VC?"
              />
              {errors.whySafePress && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.whySafePress}
                </p>
              )}
            </div>
            <div>
              <CustomSelect
                options={readyOptions}
                value={formData.readyPrototype}
                onChange={(value) => {
                  setFormData(prev => ({ ...prev, readyPrototype: value }));
                  // Clear error when selection is made
                  if (errors.readyPrototype) {
                    setErrors(prev => ({ ...prev, readyPrototype: '' }));
                  }
                }}
                placeholder="Are you ready to launch a prototype in 1 week?"
                className={errors.readyPrototype ? 'error' : ''}
              />
              {errors.readyPrototype && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.readyPrototype}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                  errors.timeline ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
                placeholder="Timeline expectations for MVP launch"
              />
              {errors.timeline && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.timeline}
                </p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ${currentStep > 0 ? 'pb-20' : 'pb-8'}`}>
      <Navbar />
      
      {/* Header */}
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
           
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4 text-slate-900">
              Apply to SafePress VC
            </h1>
            {/* Progress Bar */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-safepress-primary/10 rounded-lg">
                    <IconComponent className="w-5 h-5 text-safepress-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900">{currentStepData?.title}</h3>
                    <p className="text-slate-600 text-sm">{currentStepData?.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-safepress-primary to-safepress-secondary h-2 rounded-full"
                />
              </div>
              <div className="flex justify-between text-slate-500 text-sm">
                <span>Step {currentStep + 1} of {formSteps.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className={`container mx-auto px-4 sm:px-6 ${currentStep > 0 ? 'pb-24 sm:pb-32' : 'pb-12 sm:pb-16'}`}>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Form Content */}
            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStepContent()}
                </motion.div>
              </AnimatePresence>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 rounded-xl mt-8 ${
                    status.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : status.type === 'error'
                      ? 'bg-red-50 border border-red-200 text-red-800'
                      : 'bg-blue-50 border border-blue-200 text-blue-800'
                  }`}
                >
                  {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
                  {status.type === 'loading' && (
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  )}
                  <span className="font-medium">{status.message}</span>
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Fixed Bottom Navigation - Only show after founder question */}
      {currentStep > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="max-w-2xl mx-auto">
            
            {/* Mobile Layout - Simplified */}
            <div className="flex sm:hidden items-center justify-between">
              <div className="text-sm text-slate-500">
                {currentStep + 1} of {formSteps.length}
              </div>
              
              <div className="flex items-center gap-2">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="inline-flex items-center gap-1 px-3 py-2 text-slate-600 hover:text-slate-900 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                )}

                {currentStep === formSteps.length - 1 ? (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={status.type === 'loading' || status.type === 'success'}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.type === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-lg"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Desktop Layout - Full Step Indicators */}
            <div className="hidden sm:flex items-center justify-between">
              {/* Step Indicators */}
              <div className="flex items-center gap-2">
                {formSteps.map((step) => (
                  <div
                    key={step.id}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                      step.id === currentStep
                        ? 'bg-safepress-primary text-white'
                        : step.id < currentStep
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {step.id < currentStep ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      step.id + 1
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="inline-flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>

                {currentStep === formSteps.length - 1 ? (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={status.type === 'loading' || status.type === 'success'}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-safepress-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.type === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-safepress-primary/30"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Exit Confirmation Modal */}
      <AnimatePresence>
        {showExitConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 border border-slate-200/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Unsaved Changes
                  </h3>
                  <p className="text-slate-600">
                    You have unsaved changes
                  </p>
                </div>
              </div>
              <p className="text-slate-700 mb-8">
                Are you sure you want to leave? Your progress has been saved and you can continue later.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={cancelExit}
                  className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Stay and Continue
                </button>
                <button
                  onClick={confirmExit}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-safepress-primary to-safepress-secondary text-white rounded-xl hover:from-blue-700 hover:to-blue-500 transition-all"
                >
                  Leave Page
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}