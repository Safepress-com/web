import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import chainOfCommandImage from '../../assets/use-cases/chainofcommand/1.jpeg';
import chainOfCommandImage2 from '../../assets/use-cases/chainofcommand/2.jpeg';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

export function ChainOfCommandCaseStudy() {
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
              Chain of Command
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Engineering Fair & Scalable 1v1 Medieval Strategy
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
                  <p className="text-lg text-slate-600 mb-6"><strong>Industry:</strong> <span className="font-mono text-safepress-primary">Gaming</span> / Competitive Strategy</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Location:</strong> Global</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Challenge:</strong> <em>Chain of Command</em> set out to create a <strong>competitive 1v1 turn-based game</strong> inspired by medieval warfare. The design required more than just basic PvP, it had to integrate troop loyalty, starvation mechanics, desertion, morale, and weapon matchups, while also introducing <strong>gacha chest systems and randomness</strong> to keep matches unpredictable. The challenge was to ensure:</p>
                  <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li className="text-slate-600"><strong>Deterministic fairness</strong> in 1v1 outcomes with rollback protection</li>
                    <li className="text-slate-600"><strong>Secure randomness</strong> for loot drops, morale shifts, and battle events</li>
                    <li className="text-slate-600"><strong>Cheat-resistance</strong> with server-authoritative turn validation</li>
                    <li className="text-slate-600"><strong>Scalability</strong> to host thousands of simultaneous duels globally</li>
                    <li className="text-slate-600"><strong>Live balancing</strong> of the economy, loyalty, and reward systems</li>
                  </ul>
                  <p className="text-lg text-slate-600 mb-6"><strong>Solution:</strong> SafePress partnered with the <em>Chain of Command</em> team to design a <strong>head-to-head multiplayer battle engine</strong> with provably fair mechanics, scalable backend infrastructure, and LiveOps tools, making the game Kickstarter-ready and capable of growing to a global audience.</p>
                  <p className="text-lg text-slate-600 mb-6"><strong>Players will benefit from:</strong></p>
                  <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                    <li className="text-slate-600"><strong>Fair 1v1 turn-based battles</strong> with deterministic resolution and rollback safety</li>
                    <li className="text-slate-600"><strong>Provably fair gacha systems</strong> for loot chests and random battle effects</li>
                    <li className="text-slate-600"><strong>Troop loyalty and starvation mechanics</strong> that influence morale and strategy</li>
                    <li className="text-slate-600"><strong>Global matchmaking</strong> with ranking and seasonal ladders</li>
                    <li className="text-slate-600"><strong>Live dashboards</strong> for developers to monitor duels, adjust drop rates, and track engagement</li>
                  </ul>
                  <p className="text-lg text-slate-600"><strong>The result:</strong> <em>Chain of Command</em> is set to launch on Kickstarter soon — built on SafePress infrastructure that guarantees fair duels, secure randomness, and scalable PvP systems.</p>
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
                src={chainOfCommandImage}
                alt="Chain of Command medieval strategy game showing battle interface and troop management"
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
                Designing <em>Chain of Command</em> required going beyond typical PvP frameworks. The team envisioned <strong>authentic medieval dynamics</strong> where starvation, loyalty, and morale influence battle outcomes as much as weaponry.
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">1v1 Determinism</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Ensuring simultaneous turns resolve fairly across regions with <span className="font-mono text-safepress-primary">deterministic outcomes</span>.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Randomness Transparency</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Making loot drops and battle events secure against exploitation through <span className="font-mono text-safepress-secondary">provably fair systems</span>.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Game State Persistence</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Storing army loyalty, morale, and progression across duels with <span className="font-mono text-safepress-primary">secure persistence</span>.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Matchmaking & Ranking</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Building a global ladder for fair head-to-head competition with <span className="font-mono text-safepress-secondary">skill-based pairing</span>.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  For SafePress, this meant solving the technical challenges of fair 1v1 competitive gaming at scale.
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
                We engineered a comprehensive 1v1 multiplayer gaming infrastructure that combines medieval strategy depth with modern scalable architecture.
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Authoritative 1v1 Engine</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Turn submissions validated on the server, not the client, preventing cheats and ensuring <span className="font-mono text-safepress-primary">fair play</span>.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Deterministic Resolution</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Both players' moves resolved with cryptographic seeds for reproducibility and <span className="font-mono text-safepress-secondary">consistent outcomes</span>.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Provably Fair Gacha</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Loot chests and in-match random events generated with <span className="font-mono text-safepress-primary">VRF-backed randomness</span> for transparency.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Troop Morale & Starvation</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Event-driven simulations track loyalty, desertion, and supply lines for <span className="font-mono text-safepress-secondary">authentic medieval dynamics</span>.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Scalable Matchmaking</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">AWS Lambda + DynamoDB handle global queues with <span className="font-mono text-safepress-primary">low latency</span> for thousands of simultaneous duels.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">LiveOps Dashboard</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Developers can run tournaments, adjust gacha tables, and monitor duels in <span className="font-mono text-safepress-secondary">real time</span>.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Results (Pre-Launch)</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                With SafePress, <em>Chain of Command</em> is ready to launch with enterprise-grade infrastructure:
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Kickstarter-ready build</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Architected for global release with scalable 1v1 duel infrastructure.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Load-tested 1v1 duel engine</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Proven to scale thousands of simultaneous matches with deterministic outcomes.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Fairness-first design</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Transparent randomness boosts trust for competitive players and tournament organizers.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">LiveOps & telemetry tools</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Prepared for rapid tuning post-launch with comprehensive monitoring and analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why It Matters</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              By combining <strong>medieval strategy depth</strong> with <strong>provably fair 1v1 dueling infrastructure</strong>, SafePress ensured <em>Chain of Command</em> launches not just as a game, but as a <strong>competitive platform</strong> that can scale from Kickstarter to global tournaments.
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
                src={chainOfCommandImage2}
                alt="Chain of Command game showing multiplayer features and tournament systems"
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
                We help ambitious game studios turn bold ideas into scalable platforms. Let's discuss how we can build your next multiplayer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-safepress-primary hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>👉 Start Your Project</span>
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

      <Footer />
    </div>
  );
} 