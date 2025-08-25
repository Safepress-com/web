import { motion } from 'framer-motion';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import teamImage from '../../assets/about/1.png';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight font-display mb-6"
              >
                The Powerhouse Behind Mission Critical Systems
              </motion.h1>
       
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <p className="text-xl text-slate-700 leading-relaxed">
                For over five years, SafePress has been the force behind mission-critical platforms that cannot go down. Our software has processed millions in value, scaled across continents, and carried organizations through their highest-stakes moments without compromise.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* At a Glance */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-slate-900 mb-4">At a Glance</h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { number: '5+', label: 'years in the market' },
                  { number: '$350M+', label: 'TVL secured through platforms we\'ve built' },
                  { number: '100+', label: 'clients served across fintech, Web3, and nonprofits' },
                  { number: '$15M+', label: 'raised for leading fundraising organizations' },
                  { number: '30+', label: 'developers in architecture, engineering, and security' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-4xl font-bold text-safepress-primary mb-3">{stat.number}</div>
                    <div className="text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center space-y-8"
              >
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
                <p className="text-xl text-slate-700 leading-relaxed">
                SafePress empowers organizations to grow with confidence. We engineer platforms that scale reliably, protect against failure, and maintain business continuity when it matters most.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Team</h2>
              </motion.div>
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content Section - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p className="text-xl text-slate-700 leading-relaxed">
                    Behind SafePress is a collective of 30+ developers, architects, and auditors. Each project is approached 
                    with architecture-first discipline, rigorous review processes, and long-term accountability.
                  </p>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We believe in the power of clear communication and collaborative problem-solving. Our team brings together 
                    diverse expertise to deliver solutions that not only meet technical requirements but exceed business expectations.
                  </p>
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
                      src={teamImage} 
                      alt="SafePress team member presenting and communicating" 
                      className="w-full h-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                    />
                    
                    {/* Floating elements for visual interest */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-safepress-primary/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-safepress-secondary/20 rounded-full blur-lg"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
} 