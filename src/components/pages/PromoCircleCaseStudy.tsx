import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import promoCircleImage1 from '../../assets/use-cases/promocircle/1.png';
import promoCircleImage2 from '../../assets/use-cases/promocircle/2.png';
import promoCircleImage3 from '../../assets/use-cases/promocircle/3.png';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';

export function PromoCircleCaseStudy() {
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
              Promo Circle
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Bootstrapping an Ambassador Management System in 1 Week
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
                  <p className="text-lg text-slate-600 mb-6"><strong>Industry:</strong> <span className="font-mono text-safepress-primary">Gaming</span> / Community Management</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Location:</strong> Global</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Challenge:</strong> A fast-growing game had just crossed <strong>100,000+ players</strong>. The community was buzzing, but scaling user acquisition required structure. The team needed a way to:</p>
                  <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li className="text-slate-600">Manage <strong>hundreds of player-ambassadors</strong> across multiple channels</li>
                    <li className="text-slate-600">Distribute <strong>promo codes and referral rewards</strong> at scale</li>
                    <li className="text-slate-600">Track <strong>campaign performance</strong> in real time</li>
                    <li className="text-slate-600">Ensure <strong>data security</strong> and <strong>zero downtime</strong> despite rapid adoption</li>
                  </ul>
                  <p className="text-lg text-slate-600 mb-6">They had one constraint: <strong>deliver within a week</strong>.</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Solution:</strong> SafePress was brought in to <strong>design, build, and deploy</strong> a mission-critical Ambassador Management System under extreme time pressure. We followed our <strong>architecture-first methodology</strong> to deliver a scalable, secure platform that could handle rapid community growth.</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Players will benefit from:</strong></p>
                  <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li className="text-slate-600"><strong>Seamless ambassador onboarding</strong> across Discord and Telegram</li>
                    <li className="text-slate-600"><strong>Automated promo code distribution</strong> with fraud detection</li>
                    <li className="text-slate-600"><strong>Real-time performance tracking</strong> for referral campaigns</li>
                    <li className="text-slate-600"><strong>Secure reward distribution</strong> with tamper-proof tracking</li>
                    <li className="text-slate-600"><strong>Scalable infrastructure</strong> that grows with the community</li>
                  </ul>
                  <p className="text-lg text-slate-600"><strong>The result:</strong> Promo Circle launched in just 7 days, onboarding <strong>1,200+ ambassadors</strong> in the first week and supporting <strong>100k+ players</strong> with zero downtime.</p>
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
                src={promoCircleImage1}
                alt="Promo Circle ambassador management system showing dashboard and referral tracking"
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
                Scaling user acquisition for a <strong>100,000+ player community</strong> required more than just basic tools. The team needed enterprise-grade infrastructure that could be delivered in <em>one week</em>.
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Time Pressure</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Deliver a mission-critical system in <span className="font-mono text-safepress-primary">7 days</span> while maintaining enterprise-grade quality.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Scale Requirements</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Support <span className="font-mono text-safepress-secondary">hundreds of ambassadors</span> and tens of thousands of referral events.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Security & Trust</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Ensure <span className="font-mono text-safepress-primary">tamper-proof tracking</span> and fraud detection for reward distribution.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Multi-Channel Integration</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Seamlessly integrate with <span className="font-mono text-safepress-secondary">Discord and Telegram</span> for instant ambassador activation.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  For SafePress, this meant delivering enterprise-grade infrastructure at startup speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Our Approach</h2>
              <p className="text-xl text-slate-600 mb-12 text-center leading-relaxed">
                We followed our architecture-first methodology to deliver a scalable, secure platform in just one week.
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Requirements in 24h</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Interviewed community and ops leads, defined KPIs, and prioritized critical flows for <span className="font-mono text-safepress-primary">week-one delivery</span>.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">System Architecture</h3>
                  <p className="text-lg text-slate-600 leading-relaxed"><span className="font-mono text-safepress-secondary">Serverless backend</span> (AWS Lambda) for fast iteration and auto-scaling, with multi-payment fallback for high traffic.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Secure Referral Engine</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Built tamper-proof tracking with <span className="font-mono text-safepress-primary">fraud detection</span> to flag suspicious referral patterns.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">MVP in 5 Days</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Delivered code distribution, ambassador portal, analytics, and <span className="font-mono text-safepress-secondary">Discord + Telegram bot integration</span>.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Real-Time Dashboards</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Live performance tracking for <span className="font-mono text-safepress-primary">ambassador performance</span> and campaign analytics.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Launch & Scale</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Shipped on day 7 with infrastructure ready to handle <span className="font-mono text-safepress-secondary">exponential growth</span>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Results</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                SafePress delivered enterprise-grade infrastructure at startup speed:
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Time to Market</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">1 week from zero to live, meeting the aggressive deadline.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Rapid Adoption</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">1,200+ ambassadors activated in the first week.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Scale Performance</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Seamlessly supported 100k+ players and referral campaigns.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Zero Downtime</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Tracked tens of thousands of referral events without a single outage.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Efficiency Gains</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Boosted player acquisition while reducing manual overhead by 90%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              key={`showcase-image-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img 
                src={promoCircleImage3}
                alt="Promo Circle system overview and technical architecture"
                className="w-full max-w-4xl mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why It Matters</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              By combining <strong>startup agility</strong> with <strong>enterprise-grade reliability</strong>, SafePress proved that mission-critical infrastructure can be delivered in days, not months. Our architecture-first approach guarantees speed, security, and scalability even under extreme time pressure.
            </p>

            <motion.div
              key={`trust-image-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <img 
                src={promoCircleImage2}
                alt="Promo Circle showing ambassador dashboard and referral analytics"
                className="w-full"
              />
            </motion.div>

            <motion.div
              key={`cta-section-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-safepress-primary/5 to-safepress-secondary/5 rounded-2xl p-8 border border-safepress-primary/20 mt-12"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Build?</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                We help ambitious teams turn bold ideas into scalable platforms. Let's discuss how we can build your next mission-critical system.
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