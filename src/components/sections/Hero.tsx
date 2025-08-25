import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import { ContactForm } from '../ui/ContactForm';
import { useContactForm } from '../../hooks/useContactForm';

export function Hero() {
  const { isOpen, openForm, closeForm } = useContactForm();



  return (
    <>
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-safepress-primary/20 via-transparent to-safepress-secondary/20"></div>
      </div>

            <div className="container mx-auto px-6 relative z-10 pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 min-h-screen flex flex-col justify-center">
          
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img 
              src={logo} 
              alt="SafePress" 
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl font-bold leading-tight font-display max-w-5xl mx-auto">
              <span className="block">
              Software House For 
              </span>
              <span className="block bg-gradient-to-r from-safepress-secondary to-blue-400 bg-clip-text text-transparent mt-2">
              Web3, FinTech & Games
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
We develop mission-critical systems for Web3, FinTech, and Games. Our platforms withstand peak loads, meet enterprise security standards, and scale globally. We deliver the reliability your users can trust.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={openForm}
              className="group relative bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-safepress-primary/30 flex items-center justify-center gap-3 border border-white/10 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Let's Talk</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/case-studies"
                className="group relative font-semibold text-lg px-8 py-4 rounded-2xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-3 overflow-hidden block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-safepress-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View Our Work</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-safepress-primary/20 to-safepress-secondary/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 25, 0],
          rotate: [0, -5, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
      />
      
      {/* Additional decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-lg"
      />
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          x: [0, -15, 0]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute top-1/3 left-10 w-20 h-20 bg-gradient-to-r from-indigo-500/15 to-purple-600/15 rounded-full blur-xl"
      />
    </section>

    <ContactForm isOpen={isOpen} onClose={closeForm} />
    </>
  );
}