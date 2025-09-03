import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Shield, CheckCircle, Clipboard, Search, Eye, FileText, AlertTriangle, Lock, Code, Layers, Repeat, Globe } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';



export function SmartContractAuditPage() {
  const auditProcess = [
    {
      title: 'Scope & Planning',
      description: 'Requirements review, trust boundaries, threat model, asset registry, invariants list',
      icon: <Clipboard className="w-8 h-8 text-safepress-primary" />
    },
    {
      title: 'Static & Dynamic Analysis',
      description: 'Slither, Foundry/Forge, Echidna-style fuzzing, property tests, differential tests, mutation tests',
      icon: <Search className="w-8 h-8 text-safepress-primary" />
    },
    {
      title: 'Manual Review',
      description: 'Line-by-line analysis, role/permission lattice, upgrade vectors, reentrancy, oracle risks, MEV surfaces',
      icon: <Eye className="w-8 h-8 text-safepress-primary" />
    },
    {
      title: 'Deliverables',
      description: 'Preliminary report, final report with PoCs, remediation review, optional on-call launch support',
      icon: <FileText className="w-8 h-8 text-safepress-primary" />
    }
  ];


  const qualityGates = [
    'Required: 100% critical paths covered by tests & invariants',
    'Lighthouse-style budgets for gas (per function)',
    'No critical or high-severity issues outstanding at release gate',
    'SBOM for dependencies (OZ versions, commit hashes)',
    'Governance checklist: timelocks, guardians, multi-sig policies, emergency procedures'
  ];

  const [activeTab, setActiveTab] = useState(0);

  const vulnerabilityCategories = [
    {
      id: "fund-risks",
      title: "Critical Fund Risks",
      description: "Direct threats to user funds",
      icon: <AlertTriangle className="w-5 h-5" />,
      color: "red",
      count: 12,
      findings: [
        { name: "Reentrancy Attacks", description: "External calls re-enter your contract before state changes are finalized", severity: "Critical", impact: "$600M+ lost to reentrancy attacks" },
        { name: "Flash Loan Exploits", description: "Manipulate protocol state using uncollateralized loans", severity: "Critical", impact: "$1.3B+ in flash loan attacks" },
        { name: "Price Oracle Manipulation", description: "Artificially inflate/deflate asset prices for profit", severity: "Critical", impact: "$200M+ in oracle manipulation" },
        { name: "Liquidation Failures", description: "Flawed liquidation logic leading to bad debt", severity: "High", impact: "Protocol insolvency risk" }
      ]
    },
    {
      id: "access-auth",
      title: "Access & Authorization", 
      description: "Permission system vulnerabilities",
      icon: <Lock className="w-5 h-5" />,
      color: "orange",
      count: 8,
      findings: [
        { name: "Authorization Bypass", description: "Unauthorized access to privileged functions", severity: "Critical", impact: "Complete protocol takeover" },
        { name: "Uninitialized Proxies", description: "Proxy hijacking through initialization race", severity: "High", impact: "Contract ownership theft" },
        { name: "Centralization Risks", description: "Single points of failure in admin controls", severity: "Medium", impact: "Governance compromise" },
        { name: "Role Inheritance Issues", description: "Permission gaps in complex hierarchies", severity: "Medium", impact: "Privilege escalation" }
      ]
    },
    {
      id: "mev-tx",
      title: "MEV & Transactions",
      description: "Transaction ordering exploits",
      icon: <Repeat className="w-5 h-5" />,
      color: "purple", 
      count: 6,
      findings: [
        { name: "Sandwich Attacks", description: "Profit from predictable price movements", severity: "High", impact: "$900M+ extracted via MEV" },
        { name: "Frontrunning Surfaces", description: "Attackers profit by transaction ordering", severity: "Medium", impact: "User value extraction" },
        { name: "Gas Griefing", description: "Make transactions economically unviable", severity: "Medium", impact: "DoS via gas costs" },
        { name: "Time Manipulation", description: "Miner manipulation of timestamps", severity: "Low", impact: "Timing-based exploits" }
      ]
    },
    {
      id: "technical",
      title: "Technical Implementation",
      description: "Code-level security flaws",
      icon: <Code className="w-5 h-5" />,
      color: "blue",
      count: 10,
      findings: [
        { name: "Unchecked External Calls", description: "Silent failures from unverified return values", severity: "High", impact: "State corruption" },
        { name: "Storage Collision", description: "Upgrade-related storage overwrites", severity: "High", impact: "Data corruption" },
        { name: "Delegate Call Injection", description: "Unsafe delegatecall usage", severity: "Critical", impact: "Arbitrary code execution" },
        { name: "ERC Standard Violations", description: "Broken token standard implementations", severity: "Medium", impact: "Composability failure" }
      ]
    },
    {
      id: "protocol-ops",
      title: "Protocol Operations",
      description: "Functionality & UX issues", 
      icon: <Layers className="w-5 h-5" />,
      color: "green",
      count: 7,
      findings: [
        { name: "Upgrade Bricking", description: "Permanent contract dysfunction from upgrades", severity: "Critical", impact: "Protocol death" },
        { name: "Griefable Pausing", description: "Abusable pause mechanisms", severity: "High", impact: "Protocol DoS" },
        { name: "Precision Loss", description: "Accuracy loss in calculations", severity: "Medium", impact: "Value leakage" },
        { name: "Rounding Drift", description: "Accumulating calculation errors", severity: "Medium", impact: "Long-term fund loss" }
      ]
    },
    {
      id: "cross-chain",
      title: "Cross-Chain Security",
      description: "Multi-chain deployment risks",
      icon: <Globe className="w-5 h-5" />,
      color: "indigo",
      count: 5,
      findings: [
        { name: "Signature Replay", description: "Cross-context signature reuse", severity: "High", impact: "Unauthorized transactions" },
        { name: "Cross-Chain Replay", description: "Transaction replay across chains", severity: "Medium", impact: "Unintended execution" },
        { name: "Oracle Failure Modes", description: "Oracle downtime and stale data", severity: "High", impact: "Price feed manipulation" }
      ]
    }
  ];

  const auditTimelines = [
    { phase: 'Initial assessment', duration: '1–2 days' },
    { phase: 'Deep audit', duration: '1 week per 1,000 lines' },
    { phase: 'Report delivery', duration: '2–3 days' },
    { phase: 'Remediation review', duration: '2–5 days' }
  ];

  const auditTools = {
    static: {
      title: 'Static Analysis',
      items: ['Slither scans', 'Custom rule engines', 'Dependency vulnerability scanning', 'Control flow analysis for reentrancy patterns']
    },
    dynamic: {
      title: 'Dynamic Testing',
      items: ['Foundry/Forge test suites', 'Mythril symbolic execution', 'Echidna-style fuzzing', 'Property-based testing', 'Mutation testing protocols']
    },
    manual: {
      title: 'Manual Review',
      items: ['Line-by-line code analysis', 'Architecture review', 'Business logic validation', 'Front-running vulnerability analysis', 'Centralization risk assessment']
    }
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
                Smart Contract
              </span>
              <span className="block bg-gradient-to-r from-safepress-primary to-safepress-secondary bg-clip-text text-transparent mt-2">
                Security Audits
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              Protect your users' funds and your reputation with comprehensive security audits. 
              Identify vulnerabilities before they become costly exploits.
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
            </motion.div>

            {/* Key Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">0</div>
                <div className="text-sm text-slate-600">exploits post-audit</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">$350M+</div>
                <div className="text-sm text-slate-600">TVL audited & secured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">500+</div>
                <div className="text-sm text-slate-600">Critical to medium issues prevented</div>
              </div>
          
            </motion.div>
          </motion.div>
        </div>
      </section>

    
      {/* Auditing Process */}
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
              Our Audit Process
            </h2>
            <p className="text-xl text-slate-600">
              A thorough, repeatable methodology for maximum security.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {auditProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Vulnerability Explorer */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Vulnerabilities We Catch</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-world attack vectors that have cost the industry billions. Interactive explorer of the most critical smart contract vulnerabilities.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {vulnerabilityCategories.map((category, index) => {
                const isActive = activeTab === index;
                const getTabClasses = () => {
                  if (!isActive) return 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200';
                  
                  switch (category.color) {
                    case 'red': return 'bg-red-500 text-white shadow-lg';
                    case 'orange': return 'bg-orange-500 text-white shadow-lg';
                    case 'purple': return 'bg-purple-500 text-white shadow-lg';
                    case 'blue': return 'bg-blue-500 text-white shadow-lg';
                    case 'green': return 'bg-green-500 text-white shadow-lg';
                    case 'indigo': return 'bg-indigo-500 text-white shadow-lg';
                    default: return 'bg-slate-500 text-white shadow-lg';
                  }
                };
                
                const getIconClasses = () => {
                  if (isActive) return 'text-white';
                  
                  switch (category.color) {
                    case 'red': return 'text-red-600';
                    case 'orange': return 'text-orange-600';
                    case 'purple': return 'text-purple-600';
                    case 'blue': return 'text-blue-600';
                    case 'green': return 'text-green-600';
                    case 'indigo': return 'text-indigo-600';
                    default: return 'text-slate-600';
                  }
                };

                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${getTabClasses()}`}
                  >
                    <span className={getIconClasses()}>
                      {category.icon}
                    </span>
                    <span className="hidden sm:inline">{category.title}</span>
                    <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden max-h-[70vh]"
            >
              {/* Category Header */}
              <div className={`px-8 py-6 bg-gradient-to-r ${
                vulnerabilityCategories[activeTab].color === 'red' ? 'from-red-500 to-red-600' :
                vulnerabilityCategories[activeTab].color === 'orange' ? 'from-orange-500 to-orange-600' :
                vulnerabilityCategories[activeTab].color === 'purple' ? 'from-purple-500 to-purple-600' :
                vulnerabilityCategories[activeTab].color === 'blue' ? 'from-blue-500 to-blue-600' :
                vulnerabilityCategories[activeTab].color === 'green' ? 'from-green-500 to-green-600' :
                'from-indigo-500 to-indigo-600'
              } text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  {vulnerabilityCategories[activeTab].icon}
                  <h3 className="text-2xl font-bold">{vulnerabilityCategories[activeTab].title}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {vulnerabilityCategories[activeTab].count} vulnerabilities
                  </span>
                </div>
                <p className="text-white/90">{vulnerabilityCategories[activeTab].description}</p>
              </div>

              {/* Findings Grid */}
              <div className="p-8 overflow-y-auto max-h-[50vh]">
                <div className="grid md:grid-cols-2 gap-6">
                  {vulnerabilityCategories[activeTab].findings.map((finding, index) => (
                    <motion.div
                      key={finding.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                    >
                      {/* Finding Header */}
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-slate-700">
                          {finding.name}
                        </h4>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          finding.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                          finding.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                          finding.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {finding.severity}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {finding.description}
                      </p>
                      
                      {/* Impact Badge */}
                      <div className="flex items-center gap-2">
                        <AlertTriangle className={`w-4 h-4 ${
                          vulnerabilityCategories[activeTab].color === 'red' ? 'text-red-600' :
                          vulnerabilityCategories[activeTab].color === 'orange' ? 'text-orange-600' :
                          vulnerabilityCategories[activeTab].color === 'purple' ? 'text-purple-600' :
                          vulnerabilityCategories[activeTab].color === 'blue' ? 'text-blue-600' :
                          vulnerabilityCategories[activeTab].color === 'green' ? 'text-green-600' :
                          'text-indigo-600'
                        }`} />
                        <span className="text-xs text-slate-500 font-medium">
                          {finding.impact}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12 mb-8 p-8 bg-slate-900 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">DO NOT BECOME A STATISTIC</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Over $2.4 billion were lost to DeFi exploits in 2025 alone. Most of these attacks exploited well-known vulnerability patterns that comprehensive audits catch.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-safepress-primary hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                <Shield className="w-5 h-5" />
                Secure Your Users' Funds
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audit Timelines */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Audit Timeline</h2>
            <p className="text-xl text-slate-600">
              Professional, efficient audit delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {auditTimelines.map((timeline, index) => (
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
              Timeline scales with code complexity. We provide detailed estimates after initial assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security & Quality Gates */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Security Standards</h2>
            <p className="text-xl text-slate-600">
              Our quality gates ensure nothing gets missed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-1 gap-6">
              {qualityGates.map((gate) => (
                <div
                  key={gate}
                  className="flex items-start gap-3 p-6 bg-green-50 rounded-xl border border-green-200"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">{gate}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audit Tools */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Audit Methodology & Tools</h2>
            <p className="text-xl text-slate-600">
              Industry-leading tools combined with expert manual review.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Object.entries(auditTools).map(([category, data], index) => (
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
      <Contact variant="light-slate" />
      <Footer />
    </div>
  );
}