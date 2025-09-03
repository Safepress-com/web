import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap, Shield, Target } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';

export function FrontendPage() {
  const technologies = [
    {
      name: 'React',
      description: 'Build modern, interactive interfaces with React. Ideal for long-lived apps that need reliable scaling, deep ecosystem support, and cross-platform opportunities with React Native.',
      icon: '⚛️'
    },
    {
      name: 'Next.js',
      description: 'Ship SEO-friendly, high-performing web apps using Next.js. Server-side rendering, static generation, and edge performance make it perfect for marketplaces, SaaS, and content-rich products.',
      icon: '▲'
    },
    {
      name: 'VanillaJS',
      description: 'When every millisecond matters, nothing beats VanillaJS. For landing pages, lightweight apps, and hyper-optimized web experiences, we deliver fast, dependency-free solutions that just work.',
      icon: '⚡'
    }
  ];

  const solutions = [
    {
      title: 'Web applications',
      description: 'Responsive, accessible, and reliable front-ends that perform under real-world load. Built for Core Web Vitals and future-proofed for growth.',
      icon: '🌐'
    },
    {
      title: 'Mobile front-ends',
      description: 'Cross-platform experiences powered by React Native, or mobile-ready web apps. Unified design systems, seamless integrations, and consistent performance across devices.',
      icon: '📱'
    },
    {
      title: 'Internal tools',
      description: 'High-performing dashboards and admin panels your team actually enjoys using. Optimized for security, usability, and speed.',
      icon: '🛠️'
    }
  ];

  const techChoices = [
    { scenario: 'Enterprise-ready scaling', recommendation: 'React or Next.js' },
    { scenario: 'SEO & content-heavy', recommendation: 'Next.js' },
    { scenario: 'Every MS matters', recommendation: 'VanillaJS' },
    { scenario: 'Cross-platform needs', recommendation: 'React + React Native' },
    { scenario: 'Fastest iteration & DX', recommendation: 'React' }
  ];

  const techStack = {
    core: ['React', 'Next.js', 'VanillaJS', 'TypeScript'],
    stateData: ['React Query', 'Redux', 'Context API', 'REST', 'GraphQL', 'WebSocket'],
    designRwd: ['Tailwind CSS', 'CSS Modules/SCSS', 'shadcn/ui', 'Radix UI'],
    qualityTesting: ['Jest', 'Cypress', 'Playwright', 'Testing Library', 'Lighthouse CI'],
    deliveryCloud: ['Vercel', 'Netlify', 'AWS Amplify', 'Cloudflare', 'Docker', 'GitHub Actions'],
    securityCompliance: ['OWASP ASVS checks', 'CSP headers', 'SSO/2FA', 'Audit logging']
  };

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
                Front-End
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
              Build trustworthy, high-performance apps that scale with your business
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
              <p className="text-slate-500 text-sm mb-4">Frontend Stack</p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="text-slate-600 font-semibold">React</div>
                <div className="text-slate-600 font-semibold">Next.js</div>
                <div className="text-slate-600 font-semibold">TypeScript</div>
                <div className="text-slate-600 font-semibold">Tailwind CSS</div>
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
              At SafePress, we craft front-ends that earn user trust, accelerate growth, and perform under pressure—from first paint to the millionth user.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Where strategy, design, and custom front-end engineering meet
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
              Looking for a front-end partner to create an app that feels premium and never buckles? We guide you end-to-end—from strategy and design system to resilient UI code and performance budgets. Our architecture-first approach ensures your app stays fast, accessible, and secure as you scale.
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
              Front-end technologies we use
            </h2>
            <p className="text-xl text-slate-600">
              We recommend stacks based on your goals—not hype.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-2">2 weeks</h3>
              <p className="text-slate-600">clickable prototype</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-slate-50 rounded-xl"
            >
              <Zap className="w-12 h-12 text-safepress-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">8–12 weeks</h3>
              <p className="text-slate-600">production-ready MVP</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-slate-600 mb-6">Need your idea verified fast?</p>
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
              Unlock new opportunities with front-end solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
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
              How to choose the right front-end tech
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

      {/* Numbers Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Numbers that matter</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Target className="w-12 h-12 text-safepress-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">99.999%+</h3>
              <p className="text-slate-300">uptime</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Zap className="w-12 h-12 text-safepress-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">98+</h3>
              <p className="text-slate-300">Lighthouse score</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Shield className="w-12 h-12 text-safepress-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">Zero</h3>
              <p className="text-slate-300">security issues</p>
            </motion.div>
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

      <Contact variant="light-slate" />

      <Footer />
    </div>
  );
} 