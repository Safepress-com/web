import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap, Shield, Target, Code, Server } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';

// Import logos
import typescriptLogo from '../../assets/logos/typescript.svg';
import nodejsLogo from '../../assets/logos/nodejs.svg';
import pythonLogo from '../../assets/logos/python.svg';
import goLogo from '../../assets/logos/go.svg';
import rustLogo from '../../assets/logos/rust.svg';

export function BackendPage() {
  const technologies = [
    {
      name: 'TypeScript / Node.js',
      description: 'Fast to market, great ecosystem, perfect for modern APIs and event-driven systems.',
      strengths: 'rapid delivery, rich libs, single-language across frontend/backend',
      typical: 'BFFs, real-time APIs, integrations, dashboards',
      logo: nodejsLogo,
      secondaryLogo: typescriptLogo
    },
    {
      name: 'Python',
      description: 'Battle-tested for data, ML, and automation; clean syntax, huge library support.',
      strengths: 'ML/AI, ETL, orchestration, scientific tooling',
      typical: 'data platforms, internal tools, async workers',
      logo: pythonLogo
    },
    {
      name: 'Golang',
      description: 'Lean, predictable performance and effortless concurrency for services at scale.',
      strengths: 'throughput, memory efficiency, simple deployments',
      typical: 'microservices, streaming pipelines, gateways, infra tools',
      logo: goLogo
    },
    {
      name: 'Rust',
      description: 'When you need maximum safety and speed for the long haul.',
      strengths: 'zero-cost abstractions, memory safety, predictable latency',
      typical: 'high-perf services, crypto/fintech primitives, engines',
      logo: rustLogo
    }
  ];

  const stackDecisionFactors = [
    { factor: 'Time to market', recommendation: 'Node.js or Python for fastest delivery and iteration' },
    { factor: 'Dependability & safety', recommendation: "Go's strong typing and tooling; Rust for memory safety" },
    { factor: 'App complexity', recommendation: 'Go/Rust for complex, high-throughput services; Node.js for feature-rich product surfaces' },
    { factor: 'Scalability', recommendation: 'Go excels at concurrency; Rust for low-latency, high-load workloads; Node.js scales horizontally well' },
    { factor: 'Ecosystem & hiring', recommendation: 'Node.js/Python have the widest talent and libraries' }
  ];

  const services = [
    {
      title: 'Backend for mobile apps',
      description: 'Authentication, push, content, payments, and data flows that are reliable, secure, and built to scale as you grow.',
      icon: '📱'
    },
    {
      title: 'Backend for web apps',
      description: 'Clear domain models and robust APIs. We implement business logic on the server side with strong observability and fault isolation.',
      icon: '🌐'
    }
  ];

  const processSteps = [
    {
      title: 'Scoping & estimation',
      description: 'clarify goals, constraints, and success metrics; produce a preliminary architecture and timeline.',
      icon: '📋'
    },
    {
      title: 'Workshops & preparation',
      description: 'strategy, data, or product sessions; risk mapping; technical spikes; delivery plan.',
      icon: '🛠️'
    },
    {
      title: 'Build',
      description: 'backend first (APIs, services, infra), then frontend integration; automated tests and CI/CD from day one.',
      icon: '⚡'
    },
    {
      title: 'Release',
      description: 'blue/green or canary deployments; runbooks; alerting; SLOs defined.',
      icon: '🚀'
    },
    {
      title: 'Ongoing support',
      description: 'enhancements, performance tuning, cost optimization, and knowledge transfer when you scale in-house.',
      icon: '🔧'
    }
  ];

  const techStack = {
    languagesFrameworks: {
      title: 'Languages & Frameworks',
      items: [
        'TypeScript/Node.js: NestJS, Express, Fastify, TypeORM/Prisma, Jest',
        'Python: FastAPI, Django, SQLAlchemy, Celery, PyTest',
        'Go: Gin/Fiber, gRPC, Wire, Testify',
        'Rust: Axum/Actix, Tokio, Serde, sqlx, Criterion'
      ]
    },
    dataCaches: {
      title: 'Data & Caches',
      items: ['PostgreSQL', 'MySQL', 'Amazon Aurora', 'Redis', 'ElasticSearch/OpenSearch', 'ClickHouse', 'S3/MinIO']
    },
    messagingStreaming: {
      title: 'Messaging & Streaming',
      items: ['Kafka', 'NATS', 'RabbitMQ', 'AWS SNS/SQS', 'WebSockets', 'gRPC']
    },
    observability: {
      title: 'Observability',
      items: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Loki', 'ELK/EFK', 'Sentry']
    },
    cloudInfra: {
      title: 'Cloud & Infra',
      items: ['AWS, GCP, Azure', 'Docker, Kubernetes', 'Terraform, Helm', 'Cloudflare', 'CDNs', 'Serverless (Lambda/Cloud Functions)']
    },
    apisContracts: {
      title: 'APIs & Contracts',
      items: ['OpenAPI/Swagger', 'gRPC/Protobuf', 'JSON:API', 'GraphQL (Apollo/Federation)']
    },
    securityCompliance: {
      title: 'Security & Compliance',
      items: ['OAuth2/OIDC', 'JWT/Session', 'KMS/HSM', 'Vault', 'secrets rotation', 'WAFs', 'CIS Benchmarks', 'OWASP ASVS']
    },
    testingReliability: {
      title: 'Testing & Reliability',
      items: ['Unit/integration tests', 'contract tests', 'load tests (k6)', 'chaos drills', 'staging parity', 'canaries']
    }
  };

  const whyChooseUs = [
    {
      title: 'Mission-critical mindset',
      description: 'security, reliability, and scalability from day one',
      icon: <Shield className="w-8 h-8 text-safepress-primary" />
    },
    {
      title: 'Architecture-first',
      description: 'clear designs, threat models, and capacity plans before coding',
      icon: <Code className="w-8 h-8 text-safepress-primary" />
    },
    {
      title: 'No waste',
      description: 'tight scopes, measurable milestones, predictable delivery',
      icon: <Target className="w-8 h-8 text-safepress-primary" />
    },
    {
      title: 'Operational excellence',
      description: 'observability, incident playbooks, and cost discipline',
      icon: <Server className="w-8 h-8 text-safepress-primary" />
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
                Backend 
              </span>
              <span className="block bg-gradient-to-r from-safepress-primary to-safepress-secondary bg-clip-text text-transparent mt-2">
              Development              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              Choose the right backend strategy, technology, and tools to support your company's digital growth.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              Build powerful software that earns user trust, grows your business, and performs under pressure.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4"
            >
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-safepress-primary/30 inline-flex items-center justify-center gap-3 border border-white/10 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Let's work together</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why SafePress Section */}
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
              Why SafePress for Backend
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A leading backend team that knows your needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Looking for custom backend development? Partner with an engineering-first team that guides you end-to-end—architecture, delivery, and ongoing performance. We help you select the right strategy, design rock-solid systems, ship on time, and keep improving with proactive maintenance and clear SLAs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Backend technologies we use
            </h2>
            <p className="text-xl text-slate-600">
              Pick the stack that fits your business goals, throughput, and team culture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  {tech.secondaryLogo ? (
                    <div className="flex items-center justify-center gap-2">
                      <img src={tech.logo} alt={tech.name} className="w-8 h-8 object-contain" />
                      <img src={tech.secondaryLogo} alt={tech.name} className="w-8 h-8 object-contain" />
                    </div>
                  ) : (
                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{tech.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{tech.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-slate-700">Strengths: </span>
                    <span className="text-slate-600">{tech.strengths}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Typical use: </span>
                    <span className="text-slate-600">{tech.typical}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Decision Guide */}
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
              How to choose your backend stack
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto mb-12">
            {stackDecisionFactors.map((item, index) => (
              <motion.div
                key={item.factor}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-white rounded-lg mb-4 shadow-sm"
              >
                <span className="text-slate-900 font-semibold mb-2 md:mb-0 md:w-1/3">{item.factor}:</span>
                <span className="text-slate-600 md:w-2/3">{item.recommendation}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-slate-700 mb-6">
              Having a hard time deciding? We'll map your requirements to a stack in a 60-minute architecture session.
            </p>
          </motion.div>
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
              Tangible results, right on schedule
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
              <p className="text-slate-600">prototype/POC (core flow, skeleton architecture)</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-slate-50 rounded-xl"
            >
              <Zap className="w-12 h-12 text-safepress-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">8-12 weeks</h3>
              <p className="text-slate-600">MVP (production-ready, with monitoring, CI/CD, and rollback plans)</p>
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
              Let's work together
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              What we deliver
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our backend service process
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-6 bg-slate-50 rounded-xl"
              >
                <div className="text-3xl flex-shrink-0">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our backend technology stack</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {Object.entries(techStack).map(([key, category], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-slate-600 text-sm leading-relaxed">
                      {item}
                    </div>
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