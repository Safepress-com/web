import { motion } from 'framer-motion';
import { Mail, MessageSquare, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ContactForm } from '../ui/ContactForm';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { useLocation } from 'react-router-dom';
import { useCalendlyModal } from '../../hooks/useCalendlyModal';

export function ContactPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);
  const { openModal: openCalendly } = useCalendlyModal();

  // Reset animations when navigating to this page
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              
              {/* Left Side - Text Content */}
              <motion.div
                key={`left-${animationKey}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-24"
              >
                <div className="mb-8">
                  <motion.div
                    key={`badge-${animationKey}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-safepress-primary/10 to-safepress-secondary/10 text-safepress-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  >
                    <div className="w-2 h-2 bg-safepress-primary rounded-full animate-pulse"></div>
                    Ready to Build?
                  </motion.div>
                  <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight font-display">
                    Contact 
                      Our Team
                  </h1>
                </div>
                
                <div className="space-y-8 mb-16">
                  <motion.div
                    key={`point1-${animationKey}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-safepress-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                      Find out how to take your project from concept to secure, scalable launch.
                    </p>
                  </motion.div>
                  <motion.div
                    key={`point2-${animationKey}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-safepress-secondary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                    Our <span className="font-mono text-safepress-primary">engineers</span>, <span className="font-mono text-safepress-primary">architects</span>, and <span className="font-mono text-safepress-primary">auditors</span> have delivered mission-critical systems in <span className="font-mono text-safepress-secondary">Web3</span>, <span className="font-mono text-safepress-secondary">FinTech</span>, and large-scale digital platforms.
                    </p>
                  </motion.div>
                  <motion.div
                    key={`point3-${animationKey}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-safepress-primary to-safepress-secondary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                      Get clear, no-nonsense guidance designed for peace of mind.
                    </p>
                  </motion.div>
                </div>

                {/* Contact Information */}
                <motion.div
                  key={`contact-info-${animationKey}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-6">Get in Touch</h3>
                  
                  <motion.a 
                    href="https://t.me/rubyedelstein" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-safepress-primary hover:shadow-xl hover:shadow-safepress-primary/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-safepress-primary to-safepress-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MessageSquare className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-safepress-primary transition-colors">Telegram</h3>
                      <span className="text-safepress-primary group-hover:text-safepress-secondary transition-colors font-medium text-lg">
                        @rubyedelstein
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-safepress-primary/10 flex items-center justify-center group-hover:bg-safepress-primary group-hover:rotate-45 transition-all duration-300">
                      <div className="w-4 h-4 bg-safepress-primary rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="mailto:dev@safepress.com"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-safepress-primary hover:shadow-xl hover:shadow-safepress-primary/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-safepress-primary to-safepress-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-safepress-primary transition-colors">E-mail</h3>
                      <span className="text-safepress-primary group-hover:text-safepress-secondary transition-colors font-medium text-lg">
                        dev@safepress.com
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-safepress-primary/10 flex items-center justify-center group-hover:bg-safepress-primary group-hover:rotate-45 transition-all duration-300">
                      <div className="w-4 h-4 bg-safepress-primary rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                  </motion.a>

                  <motion.button
                    onClick={openCalendly}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-safepress-primary hover:shadow-xl hover:shadow-safepress-primary/10 transition-all duration-300 cursor-pointer w-full text-left"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-safepress-primary to-safepress-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-safepress-primary transition-colors">Schedule a Call</h3>
                      <span className="text-safepress-primary group-hover:text-safepress-secondary transition-colors font-medium text-lg">
                        30-minute consultation
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-safepress-primary/10 flex items-center justify-center group-hover:bg-safepress-primary group-hover:rotate-45 transition-all duration-300">
                      <div className="w-4 h-4 bg-safepress-primary rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                key={`form-${animationKey}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Background decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-safepress-primary/20 to-safepress-secondary/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-safepress-secondary/20 to-safepress-primary/20 rounded-full blur-3xl"></div>
                
                <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-2xl shadow-slate-200/50 backdrop-blur-sm">
                  <div className="mb-10">
                    <motion.div
                      key={`form-badge-${animationKey}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-6"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Free Consultation
                    </motion.div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight font-display">
                      Schedule a 30 min call with us and share the challenge you have
                    </h2>
                  </div>

                  {/* Contact Form Content */}
                  <ContactFormStandalone />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal form as backup */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      
      {/* Calendly Modal */}
      {/* CalendlyModal is now handled globally in App.tsx */}
    </div>
  );
}

// Standalone version of the contact form (not in modal)
function ContactFormStandalone() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    telegram: '',
    helpType: '',
    otherHelp: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

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

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.helpType) {
      newErrors.helpType = 'Please select how we can help you';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
        }, 3000);
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Full Name & Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all bg-white hover:border-slate-300 shadow-sm hover:shadow-md ${
              errors.name ? 'border-red-500' : 'border-slate-200'
            }`}
            placeholder="Full Name"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all bg-white hover:border-slate-300 shadow-sm hover:shadow-md ${
              errors.company ? 'border-red-500' : 'border-slate-200'
            }`}
            placeholder="Company"
          />
          {errors.company && (
            <p className="text-red-600 text-sm mt-1">{errors.company}</p>
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
            className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all bg-white hover:border-slate-300 shadow-sm hover:shadow-md ${
              errors.email ? 'border-red-500' : 'border-slate-200'
            }`}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            id="telegram"
            name="telegram"
            value={formData.telegram}
            onChange={handleInputChange}
            className="w-full px-4 py-4 border border-slate-200 bg-white rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all hover:border-slate-300 shadow-sm hover:shadow-md"
            placeholder="Telegram"
          />
        </div>
      </div>

      {/* How can we help you */}
      <div>
        <select
          name="helpType"
          value={formData.helpType}
          onChange={handleInputChange}
          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all bg-white hover:border-slate-300 shadow-sm hover:shadow-md ${
            errors.helpType ? 'border-red-500' : 'border-slate-200'
          }`}
        >
          <option value="">How can we help you?</option>
          {helpOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.helpType && (
          <p className="text-red-600 text-sm mt-1">{errors.helpType}</p>
        )}
      </div>

      {/* Other field (conditional) */}
      {formData.helpType === 'other' && (
        <div>
          <input
            type="text"
            id="otherHelp"
            name="otherHelp"
            value={formData.otherHelp}
            onChange={handleInputChange}
            className="w-full px-4 py-4 border border-slate-200 bg-white rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all hover:border-slate-300 shadow-sm hover:shadow-md"
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
          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all resize-none bg-white hover:border-slate-300 shadow-sm hover:shadow-md ${
            errors.message ? 'border-red-500' : 'border-slate-200'
          }`}
          placeholder="Tell us about your project, timeline, and any specific requirements..."
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message}</p>
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
          <span className="font-medium">{status.message}</span>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-6">
        <motion.button
          type="submit"
          disabled={status.type === 'loading' || status.type === 'success'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold text-lg px-6 py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-safepress-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {status.type === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Let's Talk
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.div>
            </>
          )}
        </motion.button>
        
        <p className="text-center text-sm text-slate-500 mt-4">
          🔒 Your information is secure and will never be shared
        </p>
      </div>
    </form>
  );
}