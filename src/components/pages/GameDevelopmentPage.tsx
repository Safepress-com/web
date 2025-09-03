import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap, Shield, Target, Gamepad2, Monitor, Smartphone, Globe, Code, Cog, Layers, RotateCcw } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';

// Import logos
import unityLogo from '../../assets/logos/unity.svg';
import pixijsLogo from '../../assets/logos/pixijs.svg';

export function GameDevelopmentPage() {
  const technologies = [
    {
      name: 'Unity',
      description: 'C# engine for 2D/3D, mobile/PC/console, and AR. Great for complex gameplay, rich tooling, and long-term scalability (Addressables, Shader Graph, Timeline, packages).',
      icon: Gamepad2,
      logo: unityLogo
    },
    {
      name: 'PixiJS',
      description: 'High-performance 2D renderer for web & hybrid apps. Perfect for instant-load games, casual titles, and UI-heavy interactive experiences with tiny bundles.',
      icon: Zap,
      logo: pixijsLogo
    }
  ];

  const solutions = [
    {
      title: 'Web & WebGL games',
      description: 'Instant-play experiences with fast loads, great input latency, and SEO-friendly shells.',
      icon: Globe
    },
    {
      title: 'Mobile games (iOS/Android)',
      description: 'Unity IL2CPP builds, size-budgeted assets, push notifications, in-app purchases, and A/B test hooks.',
      icon: Smartphone
    },
    {
      title: 'Gameplay systems & tools',
      description: 'State machines, ability systems, save/load, localization, editor tooling, level builders.',
      icon: Cog
    },
    {
      title: 'Live ops & content pipelines',
      description: 'Feature flags, event systems, limited-time modes, and safe content deployment without full app releases.',
      icon: Layers
    },
    {
      title: 'Porting & optimization',
      description: 'Web ↔ Mobile, legacy Unity upgrades, memory & GC tuning, GPU/CPU profiling, asset compression.',
      icon: RotateCcw
    }
  ];

  const techChoices = [
    { scenario: 'Complex 2D/3D, long roadmap', recommendation: 'Unity' },
    { scenario: 'Ultra-fast web launch, tiny bundle', recommendation: 'PixiJS' },
    { scenario: 'Cross-platform mobile + PC', recommendation: 'Unity' },
    { scenario: 'Web + app hybrid UI games', recommendation: 'PixiJS + Capacitor/Tauri' },
    { scenario: 'Fast iteration with typed safety', recommendation: 'TypeScript (PixiJS) / C# (Unity)' }
  ];

  const techStack = {
    coreEngines: ['Unity (C#)', 'PixiJS (TypeScript)', 'WebGL'],
    gameplayArchitecture: ['ECS-style patterns', 'ScriptableObject configs', 'Finite/state charts', 'Addressables', 'Scene/Asset streaming'],
    netcodeBackend: ['Unity Netcode/Photon/Socket-based services', 'REST/GraphQL', 'WebSocket', 'PlayFab/Firebase/Custom'],
    toolingContent: ['Unity Editor tools', 'Node-based build scripts', 'Content pipelines', 'Localization & font atlases'],
    uiRendering: ['UGUI/UIToolkit', 'Shader Graph', 'Spine/DragonBones', 'PixiJS filters', 'Texture packing & sprite sheets'],
    analyticsEconomy: ['GameAnalytics', 'Firebase/Amplitude', 'RevenueCat', 'IAP/Ads mediation', 'A/B testing hooks'],
    qualityTesting: ['Unity Test Framework', 'NUnit', 'Play Mode tests', 'Detox/Appium (mobile UI)', 'Web test harnesses', 'Sentry/Backtrace'],
    deliveryCi: ['Unity Cloud Build', 'GitHub Actions', 'Fastlane', 'Vercel/Cloudflare (web)', 'TestFlight/Internal App Sharing', 'Steam/itch.io pipelines'],
    compliancePrivacy: ['GDPR/CCPA', 'COPPA-aware flows', 'ATT prompts', 'Parental gates', 'Crash/PII scrubbing']
  };

  const productionSteps = [
    {
      step: '1) Prototype the feel',
      description: 'Input, camera, timing, and one joyful loop. No bloat.',
      icon: Target
    },
    {
      step: '2) Lock budgets',
      description: 'Frame time, memory, draw calls, bundle size, texture/mesh/audio limits.',
      icon: Monitor
    },
    {
      step: '3) Build systems, not hacks',
      description: 'Reusable components, deterministic logic where needed, safe saves & migrations.',
      icon: Code
    },
    {
      step: '4) Prove stability',
      description: 'Soak tests, device matrix, crash/ANR monitoring, safe rollbacks.',
      icon: Shield
    },
    {
      step: '5) Ship with guardrails',
      description: 'Feature flags, progressive rollout, analytics goals, live-ops playbooks.',
      icon: Zap
    }
  ];


  const deliverables = [
    {
      title: 'Design collaboration',
      description: 'GDD-lite, game pillars, success metrics',
      icon: Target
    },
    {
      title: 'Source code & tooling',
      description: 'Clean repos, CI/CD, reproducible builds',
      icon: Code
    },
    {
      title: 'Performance report',
      description: 'Device matrix, profiling snapshots, budgets status',
      icon: Monitor
    },
    {
      title: 'Live-ops kit',
      description: 'Feature flags, event scheduler, content update guide',
      icon: Cog
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-24 relative overflow-hidden min-h-screen flex items-center">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
        </div>
        
        {/* Subtle Floating Elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-safepress-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-500/5 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl font-bold leading-tight font-display"
            >
              <span className="block text-slate-900">
                Game
              </span>
              <span className="block bg-gradient-to-r from-safepress-primary to-safepress-secondary bg-clip-text text-transparent mt-2">
                Development
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              Build polished, high-performance games that run smoothly on mobile, desktop, and web
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-safepress-primary/30 flex items-center justify-center gap-3 border border-white/10 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Let's Talk</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/case-studies"
                className="group relative font-semibold text-lg px-8 py-4 rounded-2xl border-2 border-slate-300 hover:border-slate-400 transition-all duration-300 hover:bg-slate-50 flex items-center justify-center gap-3 text-slate-700 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-safepress-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View Our Work</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-slate-200"
            >
              <p className="text-slate-500 text-sm mb-4">Our Game Stack</p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="text-slate-600 font-semibold">Unity (C#)</div>
                <div className="text-slate-600 font-semibold">PixiJS (TypeScript)</div>
                <div className="text-slate-600 font-semibold">ECS patterns</div>
                <div className="text-slate-600 font-semibold">Asset Addressables</div>
                <div className="text-slate-600 font-semibold">WebGL</div>
                <div className="text-slate-600 font-semibold">Native Mobile</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tagline Support */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed mb-8">
              At SafePress, we design and ship games that feel great from the first frame to the millionth session—tight controls, reliable netcode, lean assets, and rock-solid build pipelines.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Where design, engineering, and live ops meet
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-slate-600 leading-relaxed">
              Looking for a partner to take your idea from prototype to stable, scalable release? We handle game design collaboration, technical architecture, performance budgets, analytics, and ongoing content ops. Our architecture-first approach keeps framerate stable, memory in check, and updates safe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Engines we use (and when)
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={tech.logo} alt={`${tech.name} logo`} className="w-12 h-12" />
                  <tech.icon className="w-8 h-8 text-safepress-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{tech.name}</h3>
                <p className="text-slate-600 leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Results on Time
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-slate-50 rounded-xl"
            >
              <Clock className="w-12 h-12 text-safepress-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">1–2 weeks</h3>
              <p className="text-slate-600">clickable prototype (core loop & feel)</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-slate-50 rounded-xl"
            >
              <Zap className="w-12 h-12 text-safepress-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">6–10 weeks</h3>
              <p className="text-slate-600">production-ready vertical slice / soft-launch MVP</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-slate-600 mb-6">Need your idea validated fast?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-safepress-primary hover:bg-safepress-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            > 
            Let's Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What we build
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <solution.icon className="w-12 h-12 text-safepress-primary mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Choice Guide */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How we choose the right tech
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {techChoices.map((choice, index) => (
              <motion.div
                key={choice.scenario}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-slate-50 rounded-lg mb-4"
              >
                <span className="text-slate-700 font-medium">{choice.scenario}</span>
                <span className="text-safepress-primary font-semibold">{choice.recommendation}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technology stack</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Production approach</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {productionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <step.icon className="w-12 h-12 text-safepress-primary mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.step}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      {/* What You Get */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What you get</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={deliverable.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <deliverable.icon className="w-12 h-12 text-safepress-primary mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">{deliverable.title}</h3>
                <p className="text-slate-600 leading-relaxed">{deliverable.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact variant="light-slate" />

      <Footer />
    </div>
  );
}