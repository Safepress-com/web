import { useState } from 'react';
import { CustomSelect } from '../ui/CustomSelect';
import { submitContactForm, ApiError } from '../../services/api';
import { mapFormDataToApi, validateFieldLengths } from '../../utils/formMapper';
import type { LocalFormData } from '../../utils/formMapper';

// Using LocalFormData from utils/formMapper

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  telegram?: string;
  helpType?: string;
  message?: string;
}

interface ContactProps {
  variant?: 'white' | 'light-slate';
}

export function Contact({ variant = 'white' }: ContactProps) {
  const [formData, setFormData] = useState<LocalFormData>({
    name: '',
    company: '',
    email: '',
    telegram: '',
    helpType: '',
    otherHelp: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    // Real-time email validation for better UX
    if (name === 'email' && value.trim()) {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!emailRegex.test(value.trim()) && value.includes('@')) {
        setErrors(prev => ({
          ...prev,
          email: 'Please enter a valid email address'
        }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Help type validation
    if (!formData.helpType) {
      newErrors.helpType = 'Please select how we can help you';
    }

    // Message validation (optional, but if provided must be at least 10 characters)
    if (formData.message.trim() && formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    // Additional API length validations
    const apiData = mapFormDataToApi(formData);
    const lengthErrors = validateFieldLengths(apiData);
    if (lengthErrors.length > 0) {
      // Map length errors back to form fields
      lengthErrors.forEach(error => {
        if (error.includes('Full name')) newErrors.name = error;
        else if (error.includes('Company')) newErrors.company = error;
        else if (error.includes('Telegram')) newErrors.telegram = error;
        else if (error.includes('Service description')) newErrors.helpType = error;
        else if (error.includes('Message')) newErrors.message = error;
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submitting
    if (!validateForm()) {
      return;
    }
    
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // Map form data to API format
      const apiData = mapFormDataToApi(formData);
      
      // Submit to API
      await submitContactForm(apiData);
      
      setStatus({
        type: 'success',
        message: 'Thank you! We\'ll get back to you within 24 hours.'
      });
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          company: '',
          email: '',
          telegram: '',
          helpType: '',
          otherHelp: '',
          message: ''
        });
        setStatus({ type: 'idle', message: '' });
        setErrors({});
      }, 2000);
      
    } catch (error) {
      console.error('Contact form submission error:', error);
      
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
          message: 'Sorry, there was an error sending your message. Please try again.'
        });
      }
    }
  };

  const helpOptions = [
    { value: 'mvp-product', label: 'Build a new product (MVP / full system)' },
    { value: 'scale-existing', label: 'Scale or improve an existing product' },
    { value: 'ai-development', label: 'AI development or integration' },
    { value: 'blockchain-web3', label: 'Blockchain / Web3 development' },
    { value: 'game-development', label: 'Game development' },
    { value: 'security-audit', label: 'Smart contract audit / security review' },
    { value: 'architecture-consulting', label: 'Architecture & infrastructure consulting' },
    { value: 'other', label: 'Other' }
  ];

  const showOtherField = formData.helpType === 'other';

  return (
    <section className={`py-24 ${variant === 'white' ? 'bg-white' : 'bg-slate-50'} text-slate-900 relative`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Trust-Oriented Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Contact Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Book a call with the software house that handled over $350M TVL, helpd raise $15M for nonprofits and more.
            </p>
          </div>


          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 md:p-10">
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Full Name & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 placeholder-slate-500 ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    }`}
                    placeholder="Enter your full name"
                    maxLength={100}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 placeholder-slate-500 ${
                      errors.company ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    }`}
                    placeholder="Enter company name"
                    maxLength={100}
                  />
                  {errors.company && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Telegram */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 placeholder-slate-500 ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="telegram" className="block text-sm font-medium text-slate-700 mb-2">
                    Telegram
                  </label>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 placeholder-slate-500 ${
                      errors.telegram ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    }`}
                    placeholder="Optional - for quick communication"
                    maxLength={50}
                  />
                  {errors.telegram && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.telegram}
                    </p>
                  )}
                </div>
              </div>

              {/* How can we help you */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  How can we help you? *
                </label>
                <CustomSelect
                  options={helpOptions}
                  value={formData.helpType}
                  onChange={(value) => {
                    setFormData(prev => ({ ...prev, helpType: value }));
                    // Clear error when selection is made
                    if (errors.helpType) {
                      setErrors(prev => ({ ...prev, helpType: undefined }));
                    }
                  }}
                  placeholder="Select how we can help you"
                  className={errors.helpType ? 'error' : ''}
                />
                {errors.helpType && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.helpType}
                  </p>
                )}
              </div>

              {/* Other field (conditional) */}
              {showOtherField && (
                <div>
                  <label htmlFor="otherHelp" className="block text-sm font-medium text-slate-700 mb-2">
                    Please specify
                  </label>
                  <input
                    type="text"
                    id="otherHelp"
                    name="otherHelp"
                    value={formData.otherHelp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 bg-white text-slate-900 placeholder-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tell us how we can help you"
                    maxLength={200}
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white text-slate-900 placeholder-slate-500 ${
                    errors.message ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                  placeholder="Tell us about your project, timeline, budget, and any specific requirements (optional)..."
                  maxLength={1000}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <div className={`flex items-center gap-3 p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : status.type === 'error'
                    ? 'bg-red-50 border border-red-200 text-red-800'
                    : 'bg-blue-50 border border-blue-200 text-blue-800'
                }`}>
                  <span className="font-medium">{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status.type === 'loading' || status.type === 'success'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Let's Talk
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Additional Trust Elements */}
          <div className="mt-12 text-center space-y-4">
          
            <div className="text-slate-500 text-xs">
              By submitting this form, you agree to our{' '}
              <a 
                href="/privacy-policy" 
                className="text-safepress-primary hover:text-safepress-secondary transition-colors underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}