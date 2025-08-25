import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import YieldscanDashboard from '../../assets/use-cases/Yieldscan/3.png';
import YieldscanDashboard2 from '../../assets/use-cases/Yieldscan/1.png';
import YieldscanDashboard3 from '../../assets/use-cases/Yieldscan/2.png';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

export function YieldscanCaseStudy() {
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
              Yieldscan
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
            AI-Powered DeFi Intelligence
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
                  <p className="text-lg text-slate-600 mb-6"><strong>Industry:</strong> <span className="font-mono text-safepress-primary">DeFi</span> / Crypto Asset Management</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Location:</strong> Global</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Challenge:</strong> <span className="font-mono text-safepress-primary">DeFi</span> investors lacked transparency into actual net yields and faced fragmented tracking across chains and protocols. Hidden risks and sudden market shifts reduced trust.</p>
                  <p className="text-lg text-slate-600"><strong>Solution:</strong> Yieldscan was designed as an intelligence layer that combines real yield calculation, <span className="font-mono text-safepress-secondary">AI</span>-based trust scoring, and automated alerts to give investors a single, reliable view of their portfolios.</p>
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
                src={YieldscanDashboard2}
                alt="Yieldscan main dashboard showing comprehensive DeFi yield analytics"
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
                DeFi yield products offered attractive returns on paper, but three issues consistently limited adoption:
              </p>
              
              <div className="space-y-8 mb-12">
                      <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Fragmented data</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Investors needed to manually track earnings across multiple wallets, <span className="font-mono text-safepress-primary">chains</span>, and <span className="font-mono text-safepress-primary">protocols</span>.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Inflated APRs</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Headline yields often excluded fees, slippage, and token mechanics, leaving users uncertain of real performance.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Hidden risks</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Hacks and abrupt yield swings left portfolios exposed without warning.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  These gaps prevented everyday investors from confidently participating in decentralized yield markets.
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
                Yieldscan's design focused on solving these systemic barriers:
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Real Yield Tracking</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Moving beyond advertised <span className="font-mono text-safepress-primary">APRs</span> to calculate verifiable, net returns.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">AI Trust Scoring</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Applying models to assess the safety, sustainability, and transparency of yield opportunities.</p>
                    </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Risk Protection</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Proactive notifications for abnormal yield changes or security concerns.</p>
                  </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Cross-Chain Visibility</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">A unified portfolio view, enabling investors to see performance across <span className="font-mono text-safepress-primary">chains</span> and <span className="font-mono text-safepress-primary">protocols</span>.</p>
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
                src={YieldscanDashboard3}
                alt="Yieldscan detailed analytics view showing AI-powered features"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
                        <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Platform Validation</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                Before launch, validation efforts emphasized accuracy and reliability:
              </p>
              
              <div className="space-y-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Backtesting</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">AI trust scores compared against historical yield and exploit data.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Simulation</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Portfolio-level testing to ensure reconciliation across multiple chains.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Scenario planning</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Modeled alerts for common DeFi events such as sudden APR collapses or protocol exploits.</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 mb-8">
                <p className="text-lg text-slate-600 leading-relaxed">
                  These steps established confidence in the system's ability to provide meaningful, actionable intelligence once live.
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
                src={YieldscanDashboard}
                alt="Yieldscan analytics dashboard showing performance results"
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Strategic Potential</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Yieldscan lays the groundwork for:
            </p>

            <div className="max-w-4xl mx-auto mb-12">
              <ul className="space-y-6">
                <li>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Retail adoption</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">through simplified, mobile-first interfaces.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Institutional oversight</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">with transparent dashboards for funds and custodians.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Future credit ratings</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">that expand beyond APR into long-term protocol risk assessments.</p>
                </li>
              </ul>
            </div>

            <motion.div
              key={`cta-section-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-safepress-primary/5 to-safepress-secondary/5 rounded-2xl p-8 border border-safepress-primary/20"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h3>
              <p className="text-lg text-slate-700 mb-8 max-w-4xl mx-auto">
                By prioritizing transparency, protection, and trust, Yieldscan is positioned to transform how investors engage with DeFi yields. The platform's design ensures that when launched, it will serve as a trusted intelligence layer, helping both retail and institutional participants make informed decisions.
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
                  <span>👉 Start Your Project</span>
                </Link>
                <a
                  href="https://Yieldscan.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-2 border-safepress-primary text-safepress-primary hover:bg-safepress-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
                  <span>View Yieldscan</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}