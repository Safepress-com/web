import { motion } from 'framer-motion';
import artImage from '../../assets/main/art.png';

export function About() {
  return (
    <section className="min-h-screen py-24 bg-white flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Section - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              
              {/* Main Content */}
              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display"
                >
                  Partnering With You to Design, Build, and Deliver What Matters.
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-6 text-lg text-slate-700 leading-relaxed"
                >
                  <p>
                    Our engineers, designers, and architects put your business goals first, every sprint and every line of code is tied to delivering measurable value.
                  </p>
                  
                  <p>
                    We design solutions that last: scalable, secure, and ready for what's next. More than code, we provide the technical guidance needed to make the right decisions at every step.
                  </p>
                  
                  <p>
                    Beyond high-quality engineering, we balance innovation with reliability to deliver long-term impact.
                  </p>
                  
                  <p>
                    As a modern software house, our reputation is built on trust and delivery. From strategy through launch and beyond, we bring technical depth and peace of mind at every stage of the development lifecycle.
                  </p>
                </motion.div>
              </div>

              {/* Key Points */}
           
            </motion.div>

            {/* Image Section - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src={artImage} 
                  alt="Software development and technology illustration" 
                  className="w-full h-full  aspect-[4/3]"
                />
                
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-safepress-secondary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-full blur-lg"></div>
              </div>
              
              {/* Small decorative cards */}
            
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}