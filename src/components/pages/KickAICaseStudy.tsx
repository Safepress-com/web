import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import KickAIImage1 from '../../assets/use-cases/kickai/2.png';
import KickAIImage2 from '../../assets/use-cases/kickai/1.png';
import KickAIImage3 from '../../assets/use-cases/kickai/3.png';
import KickAIImage4 from '../../assets/use-cases/kickai/4.png';
import KickAIImage5 from '../../assets/use-cases/kickai/5.png';
import KickAIBackoffice1 from '../../assets/use-cases/kickai/backoffice-1.png';
import KickAIBackoffice2 from '../../assets/use-cases/kickai/backoffice-2.png';
import KickAIBackoffice3 from '../../assets/use-cases/kickai/backoffice-3.png';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';

export function KickAICaseStudy() {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);

  // Reset animations when navigating to this page
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6 font-display">
              KickAI
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              AI-Powered Live Sports Gambling
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">At a Glance</h2>
                
                <div className="mb-12">
                  <p className="text-lg text-slate-600 mb-6"><strong>Industry:</strong> <span className="font-mono text-safepress-primary">Sports Betting</span> / iGaming</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Location:</strong> Global</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Challenge:</strong> Build a new type of football gambling experience where fans bet in real time on the live position of the ball, powered by <span className="font-mono text-safepress-secondary">AI predictions and settlement logic</span>.</p>
                  <p className="text-lg text-slate-600"><strong>Solution:</strong> SafePress delivered the full technology stack—from player-facing UI to <span className="font-mono text-safepress-primary">casino-grade wallets</span> and robust backoffice operations—enabling KickAI to launch as a compliant, scalable sports betting platform.</p>
                </div>
              </div>
            </div>

            <motion.div
              key={`hero-image-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={KickAIImage1}
                alt="KickAI real-time sports betting interface showing live ball position tracking"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">The Challenge</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                KickAI wanted to transform sports gambling into an interactive, second-screen experience. Traditional sportsbooks rely on odds and pre-match bets; KickAI envisioned something more dynamic:
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Real-Time Interaction</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Allow fans to predict and gamble on where the ball is during the match.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">AI-Driven Accuracy</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Use <span className="font-mono text-safepress-secondary">machine learning models</span> to track and validate ball positions instantly.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Casino-Grade Compliance</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Integrate secure wallets, <span className="font-mono text-safepress-primary">KYC flows</span>, and settlement logic for a regulated market.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  The problem: no off-the-shelf solution could handle the UI responsiveness, backoffice complexity, and regulatory demands all at once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Our Approach</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                SafePress took an <span className="font-mono text-safepress-secondary">architecture-first delivery approach</span>, ensuring every layer was robust, compliant, and scalable.
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Front-End UI</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Designed a fast, intuitive interface where users can place bets in real time without losing the live match immersion. Optimized for mobile since most users interact during games on their phones.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Backoffice System</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Built an operator dashboard to manage games, monitor risk, and resolve disputes. Integrated <span className="font-mono text-safepress-primary">real-time analytics</span> to spot suspicious activity and ensure fair play.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Casino Wallet Integrations</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Connected with multiple casino wallet providers for deposits, withdrawals, and instant bet settlements. Implemented <span className="font-mono text-safepress-secondary">fallback pathways</span> to handle provider outages without impacting users.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Settlement & Dispute Resolution</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Automated settlement flow powered by the AI's ball-tracking data. Added manual override tools for admins to resolve rare edge-cases or disputed plays.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Security & Compliance</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Enforced rigorous <span className="font-mono text-safepress-primary">KYC/AML checks</span>. Architected the system to meet iGaming compliance across multiple jurisdictions.</p>
                </div>
              </div>
            </div>

            <motion.div
              key={`approach-image-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                src={KickAIImage2}
                alt="KickAI betting interface showing real-time ball position predictions"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Technical Implementation</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                Every component was engineered for scale, security, and real-time performance:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">AI Ball Tracking</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Machine learning models process live video feeds to predict ball position with sub-second accuracy, feeding data to settlement systems.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Real-Time Betting Engine</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">WebSocket connections enable instant bet placement and settlement, with sub-100ms latency for competitive advantage.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Multi-Wallet Infrastructure</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Redundant payment processing with automatic failover across multiple casino wallet providers.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Compliance Framework</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Built-in KYC verification, transaction monitoring, and regulatory reporting for multiple jurisdictions.</p>
                </div>
              </div>
            </div>

            <motion.div
              key={`technical-image-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img 
                src={KickAIImage3}
                alt="KickAI technical architecture showing AI processing and real-time data flow"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Backoffice System */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Operator Dashboard</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                Comprehensive backoffice tools for managing operations, monitoring risk, and ensuring compliance:
              </p>
            </div>

            <div className="grid gap-8 mb-8">
              <motion.div
                key={`backoffice-1-${animationKey}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src={KickAIBackoffice1}
                  alt="KickAI operator dashboard showing real-time betting analytics and risk monitoring"
                  className="w-full"
                />
              </motion.div>

              <motion.div
                key={`backoffice-2-${animationKey}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img 
                  src={KickAIBackoffice2}
                  alt="KickAI game management interface for setting up matches and managing AI predictions"
                  className="w-full"
                />
              </motion.div>

              <motion.div
                key={`backoffice-3-${animationKey}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src={KickAIBackoffice3}
                  alt="KickAI settlement and dispute resolution system for fair play enforcement"
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">The Result</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                KickAI launched a first-of-its-kind AI sports gambling product, allowing users to gamble on the live position of the football during matches:
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Seamless User Experience</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Even under high-traffic match days, the platform maintained responsive performance and instant bet settlement.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Backoffice Control</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Transparent settlement tools and real-time monitoring gave operators full visibility and control over the platform.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">AI-Driven Fairness</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Machine learning accuracy and transparent settlement logic built trust in a heavily regulated industry.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Regulatory Compliance</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">End-to-end compliance framework enabled launch across multiple jurisdictions without sacrificing speed or scalability.</p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  SafePress's end-to-end build allowed KickAI to go from concept to launch without sacrificing speed, compliance, or scalability.
                </p>
              </div>
            </div>

            <motion.div
              key={`results-image-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <img 
                src={KickAIImage4}
                alt="KickAI live betting interface during an active football match"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              key={`final-showcase-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={KickAIImage5}
                alt="KickAI mobile betting experience showing real-time ball tracking and bet placement"
                className="w-full"
              />
            </motion.div>

            <motion.div
              key={`cta-section-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-safepress-primary/5 to-safepress-secondary/5 rounded-2xl p-8 border border-safepress-primary/20 mt-12"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation in Sports Betting</h3>
              <p className="text-lg text-slate-700 mb-8 max-w-4xl mx-auto">
                By combining AI prediction accuracy with casino-grade infrastructure and real-time user experience, SafePress helped KickAI create an entirely new category of sports entertainment. The platform demonstrates how emerging technologies can transform traditional industries when built with the right technical foundation.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Innovate?</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                We help ambitious organizations turn bold ideas into scalable platforms. Let's discuss how we can build your next breakthrough solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-safepress-primary hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Let's Talk</span>
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-3 border-2 border-safepress-primary text-safepress-primary hover:bg-safepress-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>View All Case Studies</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Contact variant="light-slate" />

      <Footer />
    </div>
  );
}