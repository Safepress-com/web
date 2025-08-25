import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContactForm } from '../../hooks/useContactForm';
import { ContactForm } from '../ui/ContactForm';
import { caseStudies } from '../../data/caseStudies';

export function Features() {
  const { isOpen, closeForm } = useContactForm();

  return (
    <>
    <section className="min-h-screen py-24 bg-gradient-to-b from-slate-50 to-white flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
Case Studies
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how we've helped businesses build secure, scalable applications that drive growth and protect what matters most.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.slice(0,4).map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-150"
            >
              {/* Background Image */}
              <div className="absolute inset-0 will-change-transform">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-150 will-change-transform"
                />
              </div>

              {/* Floating badges */}
            
           

              {/* Basic Info - Always visible */}
              <div className="absolute bottom-0 left-0 right-0 transition-opacity duration-150 group-hover:opacity-0">
                <div className="bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-16">
                  <div className="inline-block mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-safepress-primary to-safepress-secondary text-white text-xs font-semibold rounded-full uppercase tracking-wider shadow-lg">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-2xl">
                    {study.title}
                  </h3>
                  <p className="text-white/95 text-sm drop-shadow-xl font-medium">
                    {study.client}
                  </p>
                </div>
              </div>

              {/* Detailed Info Card - Shows on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-black/95 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-150 will-change-auto"
              >
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-gradient-to-r from-safepress-primary to-safepress-secondary text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                      {study.category}
                    </span>
                    <span className="text-white/60 text-sm font-medium">
                      {study.timeline}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-white/80 text-lg font-medium">
                      {study.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6 flex-1 flex flex-col justify-center">
               
                  
                  {/* Results/Key Points */}
                  <div className="space-y-2">
                    <h4 className="text-safepress-primary font-semibold text-sm uppercase tracking-wide">
                      Key Results
                    </h4>
                    <div className="space-y-2">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-safepress-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/80 text-sm leading-relaxed">
                            {result}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-white/10">
                  <Link
                    to={study.link}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-100 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-transform duration-75 w-full justify-center"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-100 shadow-lg hover:shadow-xl text-lg hover:scale-[1.01] active:scale-[0.99] transition-transform duration-75"
          >
            <span>Explore All Case Studies</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>

    <ContactForm isOpen={isOpen} onClose={closeForm} />
    </>
  );
}