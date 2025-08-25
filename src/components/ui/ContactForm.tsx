import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CustomSelect } from './CustomSelect';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  company: string;
  email: string;
  telegram: string;
  helpType: string;
  otherHelp: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  helpType?: string;
  message?: string;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
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

  // Reset errors when popup opens
  useEffect(() => {
    if (isOpen) {
      setErrors({});
    }
  }, [isOpen]);

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

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
          onClose();
        }, 2000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
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
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[100vh] overflow-hidden border border-slate-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-safepress-primary to-safepress-secondary p-8 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
              }}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h2 className="text-2xl font-bold mb-2 leading-tight font-display">
                      Schedule a 30 min call with us and share the challenge you have
                    </h2>
                   
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

            {/* Form */}
            <div className="overflow-y-auto">
              <form onSubmit={handleSubmit} className="p-8 space-y-6" noValidate>
              {/* Full Name & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                    }`}
                    placeholder="Full Name"
                  />
                  {errors.name && (
                    <p
                      className="text-red-600 text-sm mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                      errors.company ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                    }`}
                    placeholder="Company"
                  />
                  {errors.company && (
                    <p
                      className="text-red-600 text-sm mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Telegram */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                    }`}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p
                      className="text-red-600 text-sm mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-slate-200 bg-slate-50/50 rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md"
                    placeholder="Telegram"
                  />
                </div>
              </div>

              {/* How can we help you */}
              <div>
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
                  placeholder="How can we help you?"
                  className={errors.helpType ? 'error' : ''}
                />
                {errors.helpType && (
                  <p
                    className="text-red-600 text-sm mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.helpType}
                  </p>
                )}
              </div>

              {/* Other field (conditional) */}
              {showOtherField && (
                <div
                >
                  <input
                    type="text"
                    id="otherHelp"
                    name="otherHelp"
                    value={formData.otherHelp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-slate-200 bg-slate-50/50 rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all shadow-sm hover:shadow-md"
                    placeholder="Please specify how we can help you"
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md ${
                    errors.message ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
                  }`}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                />
                {errors.message && (
                  <p
                    className="text-red-600 text-sm mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-lg ${
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
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status.type === 'loading' || status.type === 'success'}
                  className="w-full bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold text-lg px-6 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-safepress-primary/30 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Let's Talk
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}