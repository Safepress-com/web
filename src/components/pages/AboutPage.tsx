import { motion } from 'framer-motion';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import teamImage from '../../assets/about/1.png';
import { Contact } from '../sections/Contact';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-slate-200/50 bg-[size:20px_20px] md:bg-[size:20px_20px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-10 md:top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-safepress-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight font-display mb-6 md:mb-8"
              >
                From day one, our mission is to help you earn <span className="text-safepress-primary">user trust</span>, accelerate <span className="text-safepress-primary">business growth</span>, and safeguard your operations with 
                <span className="text-safepress-primary"> enterprise-grade security</span> at every stage of development.
              </motion.h1>
              
             
            </div>
          </div>
        </section>


        {/* At a Glance */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-20"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">At a Glance</h2>
           
              </motion.div>
              
              {/* Mobile Layout */}
              <div className="block md:hidden space-y-12">
                {[
                  { 
                    number: '5+', 
                    label: 'Years in the market', 
                    description: 'Building secure, scalable solutions since our founding, with deep expertise in blockchain and enterprise development'
                  },
                  { 
                    number: '$350M+', 
                    label: 'TVL secured through platforms we\'ve built', 
                    description: 'Total Value Locked across DeFi protocols, exchanges, and financial platforms we\'ve architected and secured'
                  },
                  { 
                    number: '$15M+', 
                    label: 'Raised for leading fundraising organizations', 
                    description: 'Capital mobilized through crowdfunding platforms, ICO launches, and tokenization projects we\'ve delivered'
                  },
                  { 
                    number: '100+', 
                    label: 'Clients served', 
                    description: 'From innovative startups to established enterprises, we\'ve partnered with organizations across industries'
                  },
                  { 
                    number: '30+', 
                    label: 'Developers, auditors, designers and QA engineers', 
                    description: 'A diverse team of specialists bringing together technical excellence, security expertise, and creative vision'
                  },
                  { 
                    number: '0', 
                    label: 'Incidents reported in audited smart contracts', 
                    description: 'Our rigorous security review process and multi-layer auditing approach maintains a perfect track record'
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-6xl sm:text-7xl font-black text-safepress-primary leading-none mb-4">
                      {stat.number}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-tight">
                      {stat.label}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block space-y-16">
                {[
                  { 
                    number: '5+', 
                    label: 'Years in the market', 
                    description: 'Building secure, scalable solutions since our founding, with deep expertise in blockchain and enterprise development'
                  },
                  { 
                    number: '$350M+', 
                    label: 'TVL secured through platforms we\'ve built', 
                    description: 'Total Value Locked across DeFi protocols, exchanges, and financial platforms we\'ve architected and secured'
                  },
                  { 
                    number: '$15M+', 
                    label: 'Raised for leading fundraising organizations', 
                    description: 'Capital mobilized through crowdfunding platforms, ICO launches, and tokenization projects we\'ve delivered'
                  },
                  { 
                    number: '100+', 
                    label: 'Clients served', 
                    description: 'From innovative startups to established enterprises, we\'ve partnered with organizations across industries'
                  },
                  { 
                    number: '30+', 
                    label: 'Developers, auditors, designers and QA engineers', 
                    description: 'A diverse team of specialists bringing together technical excellence, security expertise, and creative vision'
                  },
                  { 
                    number: '0', 
                    label: 'Incidents reported in audited smart contracts', 
                    description: 'Our rigorous security review process and multi-layer auditing approach maintains a perfect track record'
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} max-w-6xl mx-auto`}
                  >
                    <div className="flex-shrink-0">
                      <div className="text-8xl lg:text-9xl font-black text-safepress-primary leading-none">
                        {stat.number}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                        {stat.label}
                      </h3>
                      <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Our Team</h2>
              </motion.div>
              
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                {/* Content Section - Left */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-4 md:space-y-6 text-center lg:text-left"
                >
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                    Behind SafePress is a collective of 30+ developers, auditors, designers and qa engineers. Each project is approached 
                    with architecture-first discipline, rigorous review processes, and long-term accountability.
                  </p>
                  
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    We believe in the power of clear communication and collaborative problem-solving. Our team brings together 
                    diverse expertise to deliver solutions that exceed technical requirements and business expectations.
                  </p>
                </motion.div>

                {/* Image Section - Right */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative order-first lg:order-last"
                >
                  <div className="relative">
                    <img 
                      src={teamImage} 
                      alt="SafePress team member presenting and communicating" 
                      className="w-full h-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                    />
                    
                    {/* Floating elements for visual interest */}
                    <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-safepress-primary/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-10 h-10 md:w-16 md:h-16 bg-safepress-secondary/20 rounded-full blur-lg"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Contact variant="white"/>
      <Footer />
    </div>
  );
} 