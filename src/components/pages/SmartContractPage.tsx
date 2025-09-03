import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Target, Code, AlertTriangle, GitBranch } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';

// Import blockchain logos
import ethereumLogo from '../../assets/logos/ethereum.svg';
import solidityLogo from '../../assets/logos/solidity.svg';
import solanaLogo from '../../assets/logos/solana.svg';
import tonLogo from '../../assets/logos/ton.svg';
import arbitrumLogo from '../../assets/logos/arbitrum.svg';
import polygonLogo from '../../assets/logos/polygon.svg';

// Import smart contract images
import smartContractImage1 from '../../assets/smart-contract-audit/1.png';
import smartContractImage2 from '../../assets/smart-contract-audit/2.png';
import smartContractImage3 from '../../assets/smart-contract-audit/3.png';
import smartContractImage4 from '../../assets/smart-contract-audit/4.png';

export function SmartContractPage() {
  const technologies = [
    {
      name: 'Solidity (EVM)',
      description: 'Build for Ethereum and all major EVM chains. From tokens to complex DeFi protocols, we deliver gas-efficient, secure contracts.',
      chains: 'Ethereum, Arbitrum, Optimism, Base, Polygon, BNB Chain, Avalanche',
      standards: 'ERC-20/4626, ERC-721/1155, EIP-2612, EIP-712',
      frameworks: 'Foundry, Hardhat',
      logo: ethereumLogo,
      secondaryLogo: solidityLogo,
      chainLogos: [arbitrumLogo, polygonLogo]
    },
    {
      name: 'Rust (Solana)',
      description: 'High-performance programs for the Solana runtime. Efficient account management, CPI safety, and deterministic program logic.',
      chains: 'Solana (SVM)',
      standards: 'PDAs, CPI, Account constraints',
      frameworks: 'Anchor, Native Solana SDK',
      logo: solanaLogo
    },
    {
      name: 'Func (TON)',
      description: 'Smart contracts on The Open Network. Message queues, cell structures, and gas-efficient TVM operations.',
      chains: 'The Open Network (TON)',
      standards: 'Jetton, NFT, Wallet standards',
      frameworks: 'FunC compiler, TVM tooling',
      logo: tonLogo
    }
  ];

  const services = [
    {
      title: 'Custom Solutions',
      description: 'Whether it\'s tokens, DeFi, or new Web3 experiences, we tailor contracts to your business goals.',
      icon: <Target className="w-8 h-8 text-safepress-primary" />,
      image: smartContractImage1
    },
    {
      title: 'Battle-tested Foundations',
      description: 'We fork proven contracts when it makes sense, adapt standards, and ship faster without reinventing the wheel.',
      icon: <Zap className="w-8 h-8 text-safepress-primary" />,
      image: smartContractImage2
    },
    {
      title: 'Future-proof Architecture',
      description: 'Built to evolve: flexible frameworks that support upgrades and keep pace with the ecosystem.',
      icon: <GitBranch className="w-8 h-8 text-safepress-primary" />,
      image: smartContractImage3
    },
    {
      title: 'Security at the Core',
      description: 'Comprehensive audits and continuous monitoring so your contracts stay secure from launch and beyond',
      icon: <Shield className="w-8 h-8 text-safepress-primary" />,
      image: smartContractImage4
    }
  ];



  const developmentApproach = [
    {
      title: 'Spec-driven design',
      description: 'executable specs (tests + invariants) before code complexity',
      icon: <Code className="w-8 h-8 text-safepress-primary" />
    },
    {
      title: 'Gas-aware',
      description: 'micro-benchmarks and regression budgets in CI',
      icon: <Zap className="w-8 h-8 text-safepress-primary" />
    },
    {
      title: 'Upgrades without chaos',
      description: 'safe proxy upgrades, timelocks, and staged rollouts',
      icon: <GitBranch className="w-8 h-8 text-safepress-primary" />
    },
    {
      title: 'Observability',
      description: 'on-chain event schema, dashboards, and alerting from day one',
      icon: <Target className="w-8 h-8 text-safepress-primary" />
    }
  ];

  const techStack = {
    evm: {
      title: 'EVM Development',
      items: ['Foundry (forge/anvil/cast)', 'Hardhat', 'Slither', 'Echidna-style fuzz', 'OpenZeppelin/Defender', 'Tenderly simulations', 'Mythril']
    },
    solana: {
      title: 'Solana Development',
      items: ['Anchor framework', 'Solana Program Library', 'Program test harness', 'Localnet validators', 'Audit macros for constraints']
    },
    ton: {
      title: 'TON Development',
      items: ['FunC toolchain', 'TVM/Cell utilities', 'Local testnets', 'Message simulation scripts']
    },
    // securityQuality: {
    //   title: 'Security & Quality',
    //   items: ['100% critical path coverage', 'Gas regression budgets', 'No critical/high issues at release', 'SBOM for dependencies', 'Governance checklists']
    // },
    // cicdMonitoring: {
    //   title: 'CI/CD & Monitoring',
    //   items: ['GitHub Actions', 'Per-PR gas snapshots', 'Invariant/fuzz suites', 'Dune/Flipside dashboards', 'Runbooks and alerts']
    // }
  };



  const timelines = [
    { phase: 'Design & spec', duration: '3–7 days' },
    { phase: 'Implementation', duration: '2–6 weeks' },
    { phase: 'Testing & QA', duration: '1–2 weeks' },
    { phase: 'Deployment prep', duration: '2–5 days' }
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
                Smart Contract
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
              Build secure, gas-efficient smart contracts with battle-tested frameworks and development practices. From simple tokens to complex DeFi protocols.

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
                <span className="relative z-10">Start Building</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/smart-contract-audit"
                className="group relative bg-white border border-safepress-primary hover:bg-safepress-primary text-safepress-primary hover:text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Shield className="w-5 h-5" />
                <span>Security Audit</span>
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-slate-200"
            >
              <p className="text-slate-500 text-sm mb-4">Blockchain Platforms</p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="flex items-center gap-2">
                  <img src={ethereumLogo} alt="Ethereum" className="w-6 h-6 object-contain" />
                  <span className="text-slate-600 font-semibold">Ethereum</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={solanaLogo} alt="Solana" className="w-6 h-6 object-contain" />
                  <span className="text-slate-600 font-semibold">Solana</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tonLogo} alt="TON" className="w-6 h-6 object-contain" />
                  <span className="text-slate-600 font-semibold">TON</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={arbitrumLogo} alt="Arbitrum" className="w-6 h-6 object-contain" />
                  <span className="text-slate-600 font-semibold">L2s</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="max-w-7xl mx-auto space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="flex-1 lg:max-w-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-[70%] h-auto mx-auto"
                  />
                </div>

                {/* Text Section */}
                <div className="flex-1 lg:max-w-lg text-center lg:text-left">
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  {service.description}
                  </h3>
                  <p className="lg:text-4xl text-slate-600 leading-relaxed mb-8">
                   
                  </p>
                  
                  {/* Optional CTA or additional info */}
                
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technologies</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
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
                <p className="text-slate-600 leading-relaxed mb-6">{tech.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-slate-700">Chains: </span>
                    <span className="text-sm text-slate-600">{tech.chains}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-700">Standards: </span>
                    <span className="text-sm text-slate-600">{tech.standards}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-700">Frameworks: </span>
                    <span className="text-sm text-slate-600">{tech.frameworks}</span>
                  </div>
                  {tech.chainLogos && (
                    <div>
                      <span className="text-sm font-semibold text-slate-700 block mb-2">Supported Chains: </span>
                      <div className="flex items-center gap-2 flex-wrap">
                        {tech.chainLogos.map((chainLogo, idx) => (
                          <img key={idx} src={chainLogo} alt="Chain logo" className="w-6 h-6 object-contain" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Approach */}
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
              Development Approach
            </h2>
            <p className="text-xl text-slate-600">
              Best practices from day one.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {developmentApproach.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">{approach.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{approach.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Development Timeline</h2>
            <p className="text-xl text-slate-600">
              Efficient delivery from concept to deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {timelines.map((timeline, index) => (
              <motion.div
                key={timeline.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{timeline.phase}</h3>
                <p className="text-2xl font-bold text-safepress-primary">{timeline.duration}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-slate-600 max-w-3xl mx-auto">
              Need faster delivery? We can run parallel development phases and optimize for your launch timeline.
            </p>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tooling & stack</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Object.entries(techStack).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{data.title}</h3>
                <div className="space-y-2">
                  {data.items.map((item) => (
                    <p key={item} className="text-slate-600 text-sm leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers that matter */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Development Track Record</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Shield className="w-12 h-12 text-safepress-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">0</h3>
              <p className="text-slate-300">post-deployment bugs</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AlertTriangle className="w-12 h-12 text-safepress-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">$350M+</h3>
              <p className="text-slate-300">TVL secured</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Zap className="w-12 h-12 text-safepress-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">50+</h3>
              <p className="text-slate-300">contracts deployed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Target className="w-12 h-12 text-safepress-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">2 weeks</h3>
              <p className="text-slate-300">average delivery</p>
            </motion.div>
          </div>
        </div>
      </section>


      <Contact variant="light-slate" />
      <Footer />
    </div>
  );
}