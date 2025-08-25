import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function CustomSelect({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select an option", 
  className = ""
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      {/* Hidden select for form validation */}
      <select
        value={value}
        onChange={() => {}} // Controlled by our custom component
        className="absolute opacity-0 pointer-events-none"
        tabIndex={-1}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Custom dropdown trigger */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-safepress-primary focus:border-transparent transition-all flex items-center justify-between bg-white hover:bg-slate-50 shadow-sm hover:shadow-md ${
          isOpen ? 'ring-2 ring-safepress-primary border-transparent' : 
          className.includes('error') ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50/50'
        }`}
        whileTap={{ scale: 0.995 }}
      >
        <span className={`text-left ${selectedOption ? 'text-slate-900' : 'text-slate-500'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </motion.button>

      {/* Dropdown options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden backdrop-blur-sm"
          >
            <div className="max-h-60 overflow-y-auto">
              {options.map((option, index) => (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full px-4 py-3 text-left hover:bg-safepress-primary/5 transition-colors flex items-center justify-between group ${
                    value === option.value ? 'bg-safepress-primary/10 text-safepress-primary' : 'text-slate-700'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.02 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="font-medium">{option.label}</span>
                  {value === option.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Check className="w-4 h-4 text-safepress-primary" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}