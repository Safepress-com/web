import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VitalikRunGameplay from '../../assets/use-cases/vitalik-run/3.png';
import VitalikRunGameplay2 from '../../assets/use-cases/vitalik-run/1.png';
import VitalikRunGameplay3 from '../../assets/use-cases/vitalik-run/4.png';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';

export function VitalikRunCaseStudy() {
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
              Vitalik Run
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Viral Web3 Game for Ethereum's 10th Anniversary
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
                  <p className="text-lg text-slate-600 mb-6"><strong>Industry:</strong> <span className="font-mono text-safepress-primary">Web3</span> / Gaming</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Location:</strong> Global</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Challenge:</strong> Ship a polished, viral game for <span className="font-mono text-safepress-primary">Ethereum's 10th anniversary</span> under an immovable deadline.</p>
                  <p className="text-lg text-slate-600"><strong>Solution:</strong> Vitalik Run — a top‑down 2D action runner built in record time with <span className="font-mono text-safepress-secondary">AI‑assisted development</span>, architecture‑first design, and lightweight edge infrastructure.</p>
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
                src={VitalikRunGameplay}
                alt="Vitalik Run gameplay showing the top-down 2D action runner"
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
                Ethereum's 10th anniversary created a fixed launch window. We needed to:
              </p>
              
              <div className="space-y-8 mb-12">
                      <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Deliver a fun, performant web game</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">in days, not months.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Handle high traffic from global players</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">without downtime.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Produce large volumes of sprites, levels, and effects</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">under tight content deadlines.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Ensure stability, observability, and security</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">from day one.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Conventional workflows would have missed the milestone. We required a new approach.
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
                SafePress focused on architecture‑first delivery and <span className="font-mono text-safepress-secondary">AI</span> acceleration.
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Core Loop & Systems</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">We implemented deterministic tick updates, an <span className="font-mono text-safepress-primary">ECS‑driven</span> gameplay model, and modular content configs — enabling fast iteration and replay consistency.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">AI in the Loop</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Code scaffolding for collision systems, input mapping, and unit tests. Sprite and concept generation with human cleanup for production art. Automated balance tests for spawn waves and abilities. Microcopy generation for achievements, tooltips, and UI text.</p>
                    </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">CI/CD & Infrastructure</h3>
                  <p className="text-lg text-slate-600 leading-relaxed"><span className="font-mono text-safepress-primary">GitHub Actions</span> CI with type checks, FPS budget tests, and golden‑frame diffs. <span className="font-mono text-safepress-primary">Cloudflare Workers/Pages</span> for instant deploys and global distribution. Built‑in telemetry (Sentry + PostHog) for error capture and retention analysis.</p>
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
                src={VitalikRunGameplay2}
                alt="Vitalik Run game interface showing AI-generated content and effects"
                className="w-full"
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Platform Validation</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                We ensured the game was launch‑ready through:
              </p>
              
              <div className="space-y-8 mb-8">
        
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Security & Anti‑Cheat</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Obfuscated client paths with server‑verified score submissions. <span className="font-mono text-safepress-primary">HMAC</span> payloads, replay protection, and heuristic fraud detection.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Cross‑Device QA</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Daily builds validated on desktop and mobile browsers. Ring‑buffer rollback tools for debugging.</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 mb-8">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Rigorous testing ensured a smooth launch experience across all devices and networks.
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
                src={VitalikRunGameplay3}
                alt="Vitalik Run performance metrics and testing dashboard"
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
                By combining AI acceleration with strict architecture discipline, SafePress delivered Vitalik Run in time for Ethereum's 10th anniversary. The project demonstrated how small teams can launch polished, scalable experiences under extreme time pressure.
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
                  href="https://vitalik.run/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-2 border-safepress-primary text-safepress-primary hover:bg-safepress-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
                  <span>Play Vitalik Run</span>
                </a>
                <a
                  href="https://decrypt.co/332956/relive-ethereum-story-through-vitalik-buterins-eyes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-2 border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
                  <span>Read on Decrypt</span>
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