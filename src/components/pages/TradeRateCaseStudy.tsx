import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TradeRateDashboard from '../../assets/use-cases/traderate/1.png';
import TradeRateValidation from '../../assets/use-cases/traderate/2.png';
import TradeRateAnalytics from '../../assets/use-cases/traderate/3.png';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';

export function TradeRateCaseStudy() {
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
              TradeRate
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Decentralized, Community-Verified Crypto Trade Signals
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
                  <p className="text-lg text-slate-600 mb-6"><strong>Industry:</strong> <span className="font-mono text-safepress-primary">Decentralized Finance</span> / Social Trading</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Location:</strong> Global</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Challenge:</strong> Crypto traders lacked a collaborative, trustworthy environment to create, validate, and act upon trading signals—relying on opaque methods, inconsistent reliability, and little protection against failed signals.</p>
                  <p className="text-lg text-slate-600"><strong>Solution:</strong> SafePress engineered TradeRate—a <span className="font-mono text-safepress-secondary">blockchain-verified platform</span> enabling signal creation, validator voting, community verification, automated execution, and loss compensation in a unified, transparent ecosystem.</p>
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
                src={TradeRateDashboard}
                alt="TradeRate platform showing decentralized trading signals dashboard"
                className="max-w-sm mx-auto w-full"
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
                Traders needed a way to:
              </p>
              
              <div className="space-y-8 mb-12">
                      <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Share high-quality signals reliably</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">without relying on opaque methods or inconsistent reliability.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Validate signals transparently before executing</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">with community-driven verification mechanisms.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Participate and be rewarded for collective insight</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">through fair profit-sharing and contribution rewards.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Reduce risk via compensation for failed signals</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">that failed despite precision execution.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  The market lacked a unified, trustworthy system combining these capabilities in one seamless platform.
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
                SafePress developed TradeRate as a <span className="font-mono text-safepress-secondary">smart contract–driven</span>, community-first trading signals platform.
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Tiered Signal Validation</h3>
                  <p className="text-lg text-slate-600 leading-relaxed"><strong>Stage 1 – Validator Voting:</strong> Trusted analysts propose signals, vetted by validators whose influence depends on their historical accuracy. <strong>Stage 2 – Community Swiping:</strong> The wider user base reviews signals using a swipe-based interface, with votes weighted by each user's proven accuracy.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Blockchain-Verified Signals</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Every proposal, vote, and consensus result is recorded <span className="font-mono text-safepress-primary">on-chain</span>—ensuring transparency, auditability, and tamper resistance.</p>
                    </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Automated Trading & Profit Sharing</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Users can link trading preferences to automatically act on signals that meet a consensus threshold. A profit-sharing framework distributes earnings among signal creators, validators, and active followers, aligning incentives across participants.</p>
                  </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Loss Compensation Pool</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Funded by a portion of the profits, this pool protects users who executed signals accurately but still incurred losses, enhancing trust and reducing downside risk.</p>
                  </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Intuitive Interfaces</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">A swipe-based UI for community validation, alongside dashboards for signal stats, voting influence, and earnings—all built atop robust smart contracts and the <span className="font-mono text-safepress-primary">TradeRate SDK</span>.</p>
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
                src={TradeRateValidation}
                alt="TradeRate validation interface showing community voting and signal verification"
                className="max-w-sm mx-auto w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Validation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
                        <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">The Outcome</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                TradeRate delivers unprecedented transparency and reliability:
              </p>
              
              <div className="space-y-8 mb-8">
        
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Transparent Reliability</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Validators with proven track records vet signals first, then the broader vetted community confirms them—minimizing noise and abuse.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Engaged Community</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Both analysts and followers are active participants, earning through signal creation, validation, or execution success.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Risk Mitigation</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">The loss compensation mechanism provides a safety net for followers who execute even well-validated signals that underperform.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">On-Chain Trust</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Immutable record-keeping ensures full transparency into signal origin, approval flow, and performance metrics.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Scalable & Fair</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Weightings based on historical accuracy ensure leaders rise organically, and new users can earn credibility over time.</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 mb-8">
                <p className="text-lg text-slate-600 leading-relaxed">
                  TradeRate creates a self-reinforcing ecosystem where quality signals rise to the top through community consensus.
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
                src={TradeRateAnalytics}
                alt="TradeRate analytics dashboard showing performance metrics and profit sharing"
                className="max-w-sm mx-auto w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Potential */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">

      
            <motion.div
              key={`cta-section-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-safepress-primary/5 to-safepress-secondary/5 rounded-2xl p-8 border border-safepress-primary/20"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why TradeRate Succeeds—Thanks to SafePress</h3>
              <div className="text-left max-w-4xl mx-auto mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Innovative Mechanics</h4>
                    <p className="text-slate-600">SafePress designed TradeRate's dual-layer validation ("Validators → Community swipe") to deliver balanced, trustworthy signal curation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Fair Economics</h4>
                    <p className="text-slate-600">Profit-sharing and compensation pools ensure every contributor stands to gain, fostering widespread participation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Tech-First Integrity</h4>
                    <p className="text-slate-600">On-chain verification and smart contract logic guarantee transparency and reduce counterparty risk.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">User-Friendly Experience</h4>
                    <p className="text-slate-600">Swipe-based validation and automation empower users—no macros or external dashboards required.</p>
                  </div>
                </div>
              </div>
              
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
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-2 border-safepress-primary text-safepress-primary hover:bg-safepress-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
                  <span>View TradeRate</span>
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