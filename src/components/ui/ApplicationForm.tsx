import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle, ArrowRight, ArrowLeft, User, Building, Lightbulb, Code, TrendingUp, DollarSign, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
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

const formSteps = [
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

export function ApplicationForm({ isOpen, onClose }: ApplicationFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
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
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setErrors({});
      setStatus({ type: 'idle', message: '' });
    }
  }, [isOpen]);

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
    if (currentStep > 1) {
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
      // Simulate API call - replace with actual submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus({
        type: 'success',
        message: 'Thank you! We\'ll review your application and get back to you.'
      });
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
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
        });
        setStatus({ type: 'idle', message: '' });
        setErrors({});
        setCurrentStep(1);
        onClose();
      }, 3000);
      
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error submitting your application. Please try again.'
      });
    }
  };

  const currentStepData = formSteps.find(step => step.id === currentStep);
  const IconComponent = currentStepData?.icon || User;
  const progress = (currentStep / formSteps.length) * 100;

  const renderStepContent = () => {
    switch (currentStep) {
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
                <select
                  name="companyStage"
                  value={formData.companyStage}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                    errors.companyStage ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                  }`}
                >
                  <option value="">Select Stage</option>
                  {stageOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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
              <select
                name="readyPrototype"
                value={formData.readyPrototype}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                  errors.readyPrototype ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                }`}
              >
                <option value="">Are you ready to launch a prototype in 1 week?</option>
                {readyOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden border border-slate-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-safepress-primary to-safepress-secondary p-8 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold leading-tight font-display">
                          {currentStepData?.title}
                        </h2>
                        <p className="text-blue-100 text-sm">
                          {currentStepData?.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="bg-white h-2 rounded-full"
                      />
                    </div>
                    <p className="text-blue-100 text-sm">
                      Step {currentStep} of {formSteps.length}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-xl transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="overflow-y-auto flex-1" style={{ maxHeight: 'calc(95vh - 200px)' }}>
              <form onSubmit={handleSubmit} className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8"
                  >
                    {renderStepContent()}
                  </motion.div>
                </AnimatePresence>

                {/* Status Message */}
                {status.type !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-lg mb-6 ${
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

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2 px-6 py-3 text-slate-600 hover:text-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </button>

                  {currentStep === formSteps.length ? (
                    <button
                      type="submit"
                      disabled={status.type === 'loading' || status.type === 'success'}
                      className="bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-safepress-primary/30 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      className="bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-safepress-primary/30 flex items-center gap-3"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}