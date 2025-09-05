import { motion } from 'framer-motion';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

export function VCPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative pt-16">
        {/* Hero Section */}
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
                 
                  Venture Capital
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              >
                From Day 0, we invest with high conviction in founders building transformative technical products. We’re turning code into companies and shaping the future of software from first principles.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <Link to="/apply">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-safepress-primary/30 flex items-center justify-center gap-3 border border-white/10 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Apply Now</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
       
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
        </section>

        {/* Your Vision, Our Execution Section */}
        <section className="relative py-32 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-20">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-5xl xl:text-6xl font-bold text-slate-900 mb-8 font-display tracking-tight"
                >
                  Your Vision, Our Execution
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
                >
                  We bring the engineering firepower to validate your idea, build your product, and launch with confidence — faster and with fewer blind spots than going it alone.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How We Partner With Founders Section */}
        <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
          {/* Dynamic Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-safepress-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-safepress-secondary/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >

              <div className="max-w-6xl mx-auto space-y-24">
                {[
                  {
                    title: "Validate Fast",
                    description: "We pressure-test your idea with rapid prototypes and architecture sprints, ensuring your core assumptions are proven before major capital is deployed.",
                    align: "left"
                  },
                  {
                    title: "Build With Firepower", 
                    description: "Our engineers, architects, and DevOps specialists work alongside you — not as an outsourced team, but as embedded partners building your MVP with scale in mind.",
                    align: "right"
                  },
                  {
                    title: "De-Risk Your Launch",
                    description: "With 50+ shipped products across Web3, FinTech, Games, and AI, we anticipate compliance, security, and scalability issues before they become expensive mistakes.",
                    align: "left"
                  },
                  {
                    title: "Scale Confidently",
                    description: "Every line of code and system design is prepared for handoff to your growing engineering team, with documentation, mentorship, and hiring guidance built in.",
                    align: "right"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`${item.align === 'left' ? 'text-left' : 'text-right'} ${item.align === 'right' ? 'ml-auto' : ''} max-w-4xl`}
                  >
                    <h3 className={`text-5xl xl:text-6xl font-bold mb-8 text-white leading-tight font-display tracking-tight ${item.align === 'right' ? 'ml-auto' : ''}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xl xl:text-2xl text-slate-300 leading-relaxed font-light max-w-2xl ${item.align === 'right' ? 'ml-auto' : ''}`}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Founders Choose SafePress Section */}
        <section className="relative py-32 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-20">
                <h2 className="text-5xl xl:text-6xl font-bold text-slate-900 mb-8 font-display tracking-tight">
                  Why Founders Choose SafePress
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "Validate in Days, Not Months",
                    description: "Test core assumptions immediately with working prototypes."
                  },
                  {
                    title: "Architecture-First Approach", 
                    description: "We design for your future 10-person team, not just today's MVP."
                  },
                  {
                    title: "Founder Control",
                    description: "You own every product decision; we execute with the clarity of experienced builders."
                  },
                  {
                    title: "Beyond Capital",
                    description: "Funding plus hands-on execution, strategic guidance, and technical mentorship."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-8 p-8 rounded-3xl hover:bg-white/60 transition-all duration-500 border border-transparent hover:border-slate-200/50 hover:shadow-lg"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-safepress-primary rounded-full mt-4 group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-safepress-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xl text-slate-600 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>


        {/* Ready to Build Section */}
        <section className="relative py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-20">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-5xl xl:text-6xl font-bold mb-8 font-display tracking-tight text-white"
                >
                  Ready to Build?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-2xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto"
                >
                  <strong className="text-white">Pre-Seed or Seed stage founders:</strong> If you have product-market fit conviction but need technical execution power, we should talk.
                </motion.p>
              </div>

              <div className="space-y-20 mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="max-w-4xl"
                >
                  <h3 className="text-4xl font-bold mb-12 text-white font-display tracking-tight">
                    What we need from you
                  </h3>
                  <div className="space-y-8">
                    {[
                      "Clear vision of the problem you're solving",
                      "Early market validation or design partner interest", 
                      "Commitment to aggressive but sustainable development timelines"
                    ].map((item, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-slate-300 font-light leading-relaxed"
                      >
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="max-w-4xl ml-auto text-right"
                >
                  <h3 className="text-4xl font-bold mb-12 text-white font-display tracking-tight">
                    What you get from us
                  </h3>
                  <div className="space-y-8">
                    {[
                      "Immediate engineering team deployment",
                      "Funding without the usual 3-6 month fundraising process",
                      "Technical leadership that's been through multiple 0-to-1 builds"
                    ].map((item, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-slate-300 font-light leading-relaxed"
                      >
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link to="/apply">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 text-xl shadow-2xl hover:shadow-safepress-primary/30 border border-white/10"
                  >
                    <span className="relative z-10">Apply Now</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}