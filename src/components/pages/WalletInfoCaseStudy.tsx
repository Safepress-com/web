import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import WalletInfoDashboard from '../../assets/use-cases/mywalletinfo/1.png';
import WalletInfoDashboard2 from '../../assets/use-cases/mywalletinfo/2.png';
import WalletInfoDashboard3 from '../../assets/use-cases/mywalletinfo/3.png';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';

export function WalletInfoCaseStudy() {
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
              MyWalletInfo
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Private Crypto Investment Management
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
                  <p className="text-lg text-slate-600 mb-6"><strong>Industry:</strong> <span className="font-mono text-safepress-primary">Web3</span> / Professional Investment Infrastructure</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Location:</strong> Global, multi-chain support</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Challenge:</strong> Large private and professional investors struggle with fragmented, insecure, and compliance-light wallet tools. Current solutions rarely integrate the full workflow investors require — from SAFT agreements and token release schedules to cross-chain distributions and trusted communication. This lack of security, compliance, and workflow integration erodes investor confidence and slows down capital deployment.</p>
                  <p className="text-lg text-slate-600"><strong>Solution:</strong> SafePress partnered with MyWalletInfo to engineer a <strong>trust-first investment management system</strong> tailored for professional investors. The platform unifies wallet management, SAFT agreements, token release tracking, and secure feeless distributions across 50+ chains.</p>
                  
                  <p className="text-lg text-slate-600 mt-4">Investors now benefit from:</p>
                  
                  <ul className="list-disc list-inside space-y-2 mt-4 mb-4 text-lg text-slate-600">
                    <li>Advanced notifications & compliance alerts for critical events</li>
                    <li>Built-in OTC market for private deal flow</li>
                    <li>Integrated contact & calendar systems linked to token release schedules and Google Calendar</li>
                    <li>Enterprise-grade security and compliance across all workflows</li>
                  </ul>
                  
                  <p className="text-lg text-slate-600">The result: a single, reliable platform that professional investors can trust to manage complex digital asset investments end-to-end.</p>
                </div>
                
          </div>
        </div>

            <motion.div
              key={`dashboard1-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={WalletInfoDashboard}
                alt="MyWalletInfo main dashboard showing comprehensive multi-chain wallet management"
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
                Professional investors need more than just a wallet:
              </p>
              
              <div className="space-y-8 mb-12">
                      <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Fragmented Tools</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Token release schedules, <span className="font-mono text-safepress-primary">OTC</span> markets, and <span className="font-mono text-safepress-primary">SAFT</span> investments were scattered across multiple platforms.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Trust & Compliance</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Managing high-value assets required stronger safeguards and compliance visibility.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Multi-Chain Complexity</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Token distributions across dozens of chains introduced fee overhead and operational risk.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Investor Confidence</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Without clear, reliable systems for vesting, <span className="font-mono text-safepress-primary">OTC</span> deals, and compliance, investors hesitated to deploy capital at scale.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  These gaps prevented MyWalletInfo's target audience from confidently managing their portfolios across chains.
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
                SafePress designed and developed MyWalletInfo from the ground up to combine wallet security with professional-grade investment tools:
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Feeless Multi-Chain Distribution</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Built an optimized relay system enabling secure token distribution across 50+ chains with zero gas overhead.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Integrated Calendar</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Every <span className="font-mono text-safepress-primary">SAFT</span> milestone and token release automatically syncs with a built-in calendar and integrates with Google Calendar.</p>
                    </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Advanced Notification Layer</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Event-driven engine pushes real-time updates on token releases, <span className="font-mono text-safepress-primary">OTC</span> opportunities, and wallet movements.</p>
                  </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Built-In OTC Market</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Private <span className="font-mono text-safepress-primary">OTC</span> trading built directly into the wallet environment to streamline liquidity management.</p>
                </div>
              </div>
        </div>

            <motion.div
              key={`dashboard2-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={WalletInfoDashboard2}
                alt="MyWalletInfo detailed view showing OTC market and calendar integration"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
                        <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">The Development Approach</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                From SafePress's builder perspective, we emphasized <strong>security, scalability, and compliance</strong>:
              </p>
              
              <div className="space-y-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Architecture-First Design</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Modular microservices for wallet management, notifications, and distribution, powered by an event-driven backend.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Cross-Chain Distribution Engine</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Deterministic UTXO-style distribution with batching and relay network to reduce failure rates and gas costs.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Security by Design</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Multi-Party Computation (MPC) for key handling and end-to-end encryption for <span className="font-mono text-safepress-primary">OTC</span> communications.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Investor-Friendly UI/UX</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Professional dashboards with audit logs, compliance proofs, and clear distribution histories.</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 mb-8">
                <p className="text-lg text-slate-600 leading-relaxed">
                  This approach ensures MyWalletInfo serves as professional investment infrastructure rather than just another consumer wallet.
                </p>
              </div>
            </div>

            <motion.div
              key={`dashboard3-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={WalletInfoDashboard3}
                alt="MyWalletInfo analytics dashboard showing performance and security features"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Potential */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Results & Strategic Potential</h2>
                          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              SafePress's delivery of MyWalletInfo resulted in measurable outcomes:
              </p>

            <div className="max-w-6xl mx-auto mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Trusted by Professionals</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Delivered the infrastructure investors needed to manage assets securely at scale.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Error Reduction</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Automated token release tracking eliminated missed deadlines and manual mistakes.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Liquidity Without Friction</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Built-in <span className="font-mono text-safepress-primary">OTC</span> trading reduced reliance on risky external channels.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Future-Proofed</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Architecture supports rapid onboarding of new chains and investment instruments.</p>
                </div>
              </div>
            </div>

            <motion.div
              key={`cta-section-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-safepress-primary/5 to-safepress-secondary/5 rounded-2xl p-8 border border-safepress-primary/20"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why It Works</h3>
              <p className="text-lg text-slate-700 mb-8 max-w-4xl mx-auto">
                SafePress succeeded by treating MyWalletInfo not as a consumer wallet, but as <strong>professional-grade investment infrastructure</strong>. By focusing on trust, security, and seamless investor workflows, we delivered a platform that bridges the gap between fragmented tools and institutional needs.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Build?</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                We help ambitious organizations turn bold ideas into scalable platforms. Let's discuss how we can build your next solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-safepress-primary hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Let's Talk</span>
                </Link>
                <a
                  href="https://mywalletinfo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-2 border-safepress-primary text-safepress-primary hover:bg-safepress-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
                  <span>View MyWalletInfo</span>
                </a>
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