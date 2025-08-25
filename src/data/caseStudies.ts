import type { CaseStudy } from '../types/caseStudy';
import yieldScan from '../assets/use-cases/yieldscan/3.png';
import mywalletinfo from '../assets/use-cases/mywalletinfo/1.png';
import latet from '../assets/use-cases/latet/1.png';
import chainOfCommand from '../assets/use-cases/chainofcommand/1.jpeg';


export const caseStudies: CaseStudy[] = [
  {
    id: 'yieldscan',
    title: 'Yieldscan',
    subtitle: 'AI-Powered DeFi Intelligence',
    client: 'AI Powered Yield Aggregator',
    category: 'DeFi',
    industry: 'Crypto Asset Management',
    location: 'Global',
    timeline: '3 months',
    teamSize: '8 people',
    image: yieldScan,
    shortDescription: 'AI-driven information layer for DeFi yields that monitors, rates, and explains yield opportunities.',
    description: 'A comprehensive intelligence platform that combines real yield calculation, AI-based trust scoring, and automated alerts to give DeFi investors a single, reliable view of their portfolios.',
    challenge: 'Create an AI-driven information layer for DeFi yields that monitors, rates, and explains yield opportunities while showing users their true net earnings.',
    solution: 'Built an AI-powered analytics platform that scans yield protocols, applies trust & risk ratings, monitors performance in real-time, and personalizes best-earning opportunities for each user.',
    results: [
      'Real-time yield tracking across 200+ routing protocols',
      'AI trust scoring with 95% accuracy',
      'Cross-chain portfolio visibility',
      'Automated risk detection system',
      'Unified view of actual vs advertised yields',
      'Automated scoring across protocols',
      'Personalized yield recommendations'
    ],
    technologies: ['React', 'TypeScript', 'AI/ML', 'Blockchain', 'Node.js'],
    tech: ['React', 'Node.js'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: 'https://yieldscan.io/',
    link: '/case-study/yieldscan',
    status: 'Live Product'
  },
  {
    id: 'latet',
    title: 'Helping Israel\'s Biggest Nonprofits Raise Millions',
    subtitle: 'Scaling Nonprofit Donations With Confidence',
    client: 'Fault-tolerant payments platform.',
    category: 'Fintech',
    industry: 'Nonprofit / Fundraising',
    location: 'Israel',
    timeline: '6 months',
    teamSize: '4 people',
    image: latet,
    shortDescription: 'Spike-proof, fault-tolerant payments platform that helped Israel\'s largest nonprofits raise over 50M NIS.',
    description: 'A serverless, surge-proof system with AWS Lambda and API Gateway, featuring multi-payment resilience, automatic failover, and live dashboards for organizers during high-intensity fundraising events.',
    challenge: 'Israel\'s largest nonprofits rely on short, high-pressure fundraising events that can generate millions in just a few hours, facing traffic surges of 10-50× within minutes and payment failures that could stall millions in donations.',
    solution: 'Engineered a serverless, surge-proof system with Payment Orchestrator for automatic failover, multi-language/multi-currency support, and live dashboards providing real-time transparency into every shekel raised.',
    results: [
      '50M+ NIS raised across multiple campaigns',
      'Zero downtime even under massive traffic spikes',
      'Automatic failover prevented lost donations during provider outages',
      'Live transparency empowered finance teams and boosted donor trust',
      'Handled traffic surges of 10-50× within minutes flawlessly'
    ],
    technologies: ['VanillaJS', 'AWS Lambda', 'DynamoDB', 'SQS', 'API Gateway', 'CloudFront', 'Multi-payment Integration'],
    tech: ['VanillaJS', 'AWS Lambda', 'DynamoDB', 'SQS', 'API Gateway', 'CloudFront', 'Multi-payment Integration'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: 'https://donate.latet.org.il/',
    link: '/case-study/nonprofits',
    status: 'Live Product'
  },

  {
    id: 'wallet-info',
    title: 'MyWalletInfo',
    subtitle: 'Professional Multi-Chain Wallet Management',
    client: 'Investment management system tailored for professional investors',
    category: 'Web3',
    industry: 'Retail Investment Management',
    location: 'Global, multi-chain support',
    timeline: '4 months',
    teamSize: '8 people',
    image: mywalletinfo,
    shortDescription: 'Trust-focused system that manages wallets, SAFT agreements, token releases, and secure distributions across 50+ chains.',
    description: 'SafePress partnered with MyWalletInfo to engineer a trust-first investment management system tailored for professional investors, featuring feeless multi-chain distribution, integrated calendars, and built-in OTC markets.',
    challenge: 'Professional investors face fragmented wallet tools that lack security, compliance, and integrated investment workflows across multiple chains.',
    solution: 'SafePress partnered with MyWalletInfo to engineer a trust-first investment management system tailored for professional investors, featuring feeless multi-chain distribution, integrated calendars, and built-in OTC markets.',
    results: [
      'Feeless multi-chain distribution across 50+ chains',
      'Integrated calendar with Google Calendar sync',
      'Advanced notification layer for token releases and OTC opportunities',
      'Built-in OTC market for secure trading',
      'MPC security and end-to-end encryption',
      'Professional investment workflows and compliance tools'
    ],
    technologies: ['React', 'TypeScript', 'Go', 'Kafka', 'MPC', 'Multi-chain', 'AWS'],
    tech: ['React', 'Go', 'Kafka', 'MPC', 'Multi-chain', 'AWS'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: 'https://mywalletinfo.com/',
    link: '/case-study/mywalletinfo',
    status: 'Live Product'
  },
  {
    id: 'chain-of-command',
    title: 'Chain of Command',
    subtitle: 'Engineering Fair & Scalable 1v1 Medieval Strategy',
    client: 'Competitive 1v1 turn-based strategy game',
    category: 'Gaming',
    industry: 'Competitive Strategy Gaming',
    location: 'Global',
    timeline: '8 months',
    teamSize: '6 people',
    image: chainOfCommand,
    shortDescription: 'Competitive 1v1 turn-based strategy game with troop loyalty, starvation mechanics, and provably fair gacha systems.',
    description: 'SafePress partnered with the Chain of Command team to design a head-to-head multiplayer battle engine with provably fair mechanics, scalable backend infrastructure, and LiveOps tools.',
    challenge: 'Create a competitive 1v1 turn-based game that integrates troop loyalty, starvation mechanics, desertion, morale, and weapon matchups, while also introducing gacha chest systems and randomness to keep matches unpredictable.',
    solution: 'Engineered a comprehensive 1v1 multiplayer gaming infrastructure with deterministic battle engine, provably fair randomness for gacha mechanics, secure anti-cheat architecture, and scalable PvP systems for head-to-head duels.',
    results: [
      'Kickstarter-ready build architected for global release with scalable 1v1 duel infrastructure',
      'Load-tested 1v1 duel engine proven to scale thousands of simultaneous matches with deterministic outcomes',
      'Fairness-first design with transparent randomness boosting trust for competitive players',
      'LiveOps & telemetry tools prepared for rapid tuning post-launch'
    ],
    technologies: ['Game Engine', '1v1 Multiplayer', 'WebSockets', 'VRF', 'Anti-cheat', 'PvP Systems', 'LiveOps'],
    tech: ['Game Engine', '1v1 Multiplayer', 'WebSockets', 'VRF', 'Anti-cheat', 'PvP Systems', 'LiveOps'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: '#',
    link: '/case-study/chain-of-command',
    status: 'Coming Soon'
  },
  {
    id: 'smart-contract-auditor',
    title: 'Smart Contract Auditor',
    subtitle: 'AI-Powered Security Analysis Platform',
    client: 'Blockchain Security',
    category: 'Security & Compliance',
    industry: 'Blockchain Security',
    location: 'Global',
    timeline: '2 months',
    teamSize: '5 people',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center',
    shortDescription: 'AI-powered smart contract security analysis platform for DeFi protocols.',
    description: 'An AI-powered platform that analyzes smart contract code for security vulnerabilities, provides detailed risk assessments, and generates comprehensive audit reports.',
    challenge: 'Develop an automated security auditing system that can detect vulnerabilities in smart contracts before they are deployed to mainnet.',
    solution: 'Built an AI-powered platform that analyzes smart contract code for security vulnerabilities, provides detailed risk assessments, and generates comprehensive audit reports.',
    results: [
      'Detected 15+ critical vulnerabilities in production contracts',
      'Reduced audit time from weeks to hours',
      'Prevented potential losses of over $2M in DeFi protocols',
      'Automated vulnerability detection with high accuracy',
      'Comprehensive audit reporting system'
    ],
    technologies: ['Python', 'Solidity', 'Machine Learning', 'Ethereum', 'AWS', 'Docker'],
    tech: ['Python', 'Solidity', 'Machine Learning', 'Ethereum', 'AWS', 'Docker'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: 'https://example.com/smart-contract-auditor',
    link: '/case-study/smart-contract-auditor',
    status: 'Live Product'
  },
  {
    id: 'securevault',
    title: 'SecureVault',
    subtitle: 'Enterprise Crypto Custody',
    client: 'Institutional Investors',
    category: 'Security / Fintech',
    industry: 'Financial Services',
    location: 'North America',
    timeline: '8 months',
    teamSize: '12 people',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center',
    shortDescription: 'Next-generation institutional digital asset management with multi-signature security.',
    description: 'A comprehensive custody solution designed for institutional investors, featuring multi-signature security, compliance automation, and seamless trading integration.',
    challenge: 'Build a secure, compliant custody solution for institutional investors managing large digital asset portfolios.',
    solution: 'Developed a comprehensive custody solution with multi-signature security, compliance automation, and seamless trading integration.',
    results: [
      'SOC 2 Type II compliant architecture',
      'Multi-signature wallet integration',
      'Real-time compliance monitoring',
      'Institutional-grade security',
      'Automated compliance reporting'
    ],
    technologies: ['Security', 'Compliance', 'Multi-sig', 'APIs', 'React'],
    tech: ['Security', 'Compliance', 'Multi-sig', 'APIs', 'React'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: '#',
    link: '#',
    status: 'Coming Soon'
  },
  {
    id: 'gamefi-analytics',
    title: 'GameFi Analytics',
    subtitle: 'Player Behavior Intelligence',
    client: 'Blockchain Gaming',
    category: 'Gaming / Analytics',
    industry: 'Blockchain Gaming',
    location: 'Global',
    timeline: '4 months',
    teamSize: '6 people',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center',
    shortDescription: 'Data-driven insights for blockchain gaming economies and player behavior.',
    description: 'Advanced analytics platform for GameFi projects, providing deep insights into player behavior, token economics, and in-game asset performance.',
    challenge: 'Create an analytics platform that provides deep insights into GameFi player behavior and token economics.',
    solution: 'Built an advanced analytics platform that analyzes player behavior, token economics, and in-game asset performance for GameFi projects.',
    results: [
      'Player behavior prediction models',
      'Token economy optimization',
      'NFT trading analytics',
      'Revenue optimization insights',
      'Real-time gaming metrics'
    ],
    technologies: ['Analytics', 'Gaming', 'NFTs', 'Data Science', 'React'],
    tech: ['Analytics', 'Gaming', 'NFTs', 'Data Science', 'React'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: '#',
    link: '#',
    status: 'In Development'
  }
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(study => study.id === id);
} 