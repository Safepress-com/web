import type { CaseStudy } from '../types/caseStudy';
import yieldScan from '../assets/use-cases/yieldscan/3.png';
import mywalletinfo from '../assets/use-cases/mywalletinfo/1.png';
import latet from '../assets/use-cases/latet/1.png';
import chainOfCommand from '../assets/use-cases/chainofcommand/1.jpeg';
import promoCircle from '../assets/use-cases/promocircle/1.png';
import vitalikRun from '../assets/use-cases/vitalik-run/1.png';
import kickAI from '../assets/use-cases/kickai/5.png';
import tradeRate from '../assets/use-cases/traderate/1.png';


export const caseStudies: CaseStudy[] = [
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
    id: 'latet',
    title: 'Helping Nonprofits Raise Millions',
    subtitle: 'Scaling Nonprofit Donations With Confidence',
    client: 'Fault-tolerant payments platform.',
    category: 'Fintech',
    industry: 'Nonprofit / Fundraising',
    location: 'Israel',
    timeline: '6 months',
    teamSize: '4 people',
    image: latet,
    shortDescription: 'Spike-proof, fault-tolerant payments platform that helped nonprofits raise over 15M USD.',
    description: 'A serverless, surge-proof system with AWS Lambda and API Gateway, featuring multi-payment resilience, automatic failover, and live dashboards for organizers during high-intensity fundraising events.',
    challenge: 'Israel\'s largest nonprofits rely on short, high-pressure fundraising events that can generate millions in just a few hours, facing traffic surges of 10-50× within minutes and payment failures that could stall millions in donations.',
    solution: 'Engineered a serverless, surge-proof system with Payment Orchestrator for automatic failover, multi-language/multi-currency support, and live dashboards providing real-time transparency into every shekel raised.',
    results: [
      '$15M+ USD raised across multiple campaigns',
      'Zero downtime even under massive traffic spikes',
      'Automatic failover prevented lost donations during provider outages',
      'Live transparency empowered finance teams and boosted donor trust',
      'Handled traffic surges of 10-50× within minutes flawlessly'
    ],
    technologies: ['VanillaJS', 'AWS Lambda', 'DynamoDB', 'SQS', 'API Gateway', 'CloudFront', 'Multi-payment Integration'],
    tech: ['VanillaJS', 'AWS Lambda', 'DynamoDB', 'SQS', 'API Gateway', 'CloudFront', 'Multi-payment Integration'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: 'https://donate.latet.org.il/en.html',
    link: '/case-study/nonprofits',
    status: 'Live Product'
  },


  {
    id: 'kickai',
    title: 'KickAI',
    subtitle: 'AI-Powered Live Sports Gambling',
    client: 'AI-powered sports betting platform',
    category: 'Gaming',
    industry: 'Sports Betting / iGaming',
    location: 'Global',
    timeline: '6 months',
    teamSize: '10 people',
    image: kickAI,
    shortDescription: 'First-of-its-kind AI sports gambling product allowing real-time betting on live ball position during football matches.',
    description: 'A revolutionary sports betting platform that combines AI prediction accuracy with casino-grade infrastructure and real-time user experience to create an entirely new category of sports entertainment.',
    challenge: 'Build a new type of football gambling experience where fans bet in real time on the live position of the ball, powered by AI predictions and settlement logic.',
    solution: 'SafePress delivered the full technology stack—from player-facing UI to casino-grade wallets and robust backoffice operations—enabling KickAI to launch as a compliant, scalable sports betting platform.',
    results: [
      'Real-time ball position tracking with AI prediction accuracy',
      'Ball position prediction for bet weighting',
      'Casino-grade wallet integrations with automatic failover',
      'Comprehensive backoffice control with transparent settlement tools',
      'End-to-end compliance framework for multiple jurisdictions',
      'Sub-100ms latency for competitive real-time betting'
    ],
    technologies: ['React', 'TypeScript', 'AI/ML', 'WebSockets', 'Casino Wallets', 'KYC/AML', 'Real-time Analytics'],
    tech: ['React', 'AI/ML', 'WebSockets', 'Casino Wallets', 'Real-time Analytics'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: '#',
    link: '/case-study/kickai',
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
    id: 'yieldscan',
    title: 'Yieldscan',
    subtitle: 'AI-Powered DeFi Intelligence',
    client: 'AI Powered Yield Aggregator',
    category: 'Web3',
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
    id: 'promo-circle',
    title: 'Promo Circle',
    subtitle: 'Bootstrapping an Ambassador Management System in 1 Week',
    client: 'Fast-growing gaming community',
    category: 'Community Growth',
    industry: 'Community Management',
    location: 'Global',
    timeline: '1 week',
    teamSize: '4 people',
    image: promoCircle,
    shortDescription: 'Mission-critical Ambassador Management System delivered in 7 days for a 100,000+ player gaming community.',
    description: 'SafePress was brought in to design, build, and deploy a mission-critical Ambassador Management System under extreme time pressure, following our architecture-first methodology.',
    challenge: 'A fast-growing game had just crossed 100,000+ players. The community was buzzing, but scaling user acquisition required structure. The team needed a way to manage hundreds of player-ambassadors, distribute promo codes and referral rewards at scale, track campaign performance in real time, and ensure data security and zero downtime despite rapid adoption.',
    solution: 'We followed our architecture-first methodology: requirements in 24h, serverless backend (AWS Lambda) for fast iteration and auto-scaling, secure referral + promo code engine with tamper-proof tracking, real-time dashboards for ambassador performance, and MVP delivery in 5 days.',
    results: [
      'Time to Market: 1 week from zero to live',
      'Adoption: 1,200+ ambassadors activated in the first week',
      'Scale: Seamlessly supported 100k+ players and referral campaigns',
      'Trust: Secure, tamper-proof reward distribution',
      'Growth: Boosted player acquisition while reducing manual overhead by 90%'
    ],
    technologies: ['AWS Lambda', 'Serverless', 'Discord Bot', 'Telegram Bot', 'Referral Engine', 'Fraud Detection', 'Real-time Analytics'],
    tech: ['AWS Lambda', 'Serverless', 'Discord Bot', 'Telegram Bot', 'Referral Engine', 'Fraud Detection', 'Real-time Analytics'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: 'https://promocircle.win',
    link: '/case-study/promo-circle',
    status: 'Live Product'
  },
  {
    id: 'vitalik-run',
    title: 'Vitalik Run',
    subtitle: 'Viral Web3 Game for Ethereum\'s 10th Anniversary',
    client: 'Web3 Gaming Community',
    category: 'Gaming',
    industry: 'Web3 / Gaming',
    location: 'Global',
    timeline: '2 weeks',
    teamSize: '4 people',
    image: vitalikRun,
    shortDescription: 'Top‑down 2D action runner built in record time with AI‑assisted development for Ethereum\'s 10th anniversary.',
    description: 'A polished, viral web game delivered under extreme time pressure using AI acceleration, architecture‑first design, and lightweight edge infrastructure.',
    challenge: 'Ship a polished, viral game for Ethereum\'s 10th anniversary under an immovable deadline with fun, performant gameplay and global scale infrastructure.',
    solution: 'Built Vitalik Run using AI‑assisted development for rapid content generation, deterministic ECS gameplay systems, Cloudflare edge deployment, and comprehensive testing across devices.',
    results: [
      'Delivered game in time for Ethereum\'s 10th anniversary milestone',
      '60+ FPS performance on modern mobile devices',
      'Less than 120ms time‑to‑interactive on 4G connections',
      'Global distribution via Cloudflare Workers/Pages',
      'AI-generated sprites, levels, and game content',
      'Server‑verified anti‑cheat with HMAC payloads',
      'Reusable ECS framework for future games'
    ],
    technologies: ['TypeScript', 'ECS', 'Cloudflare Workers', 'AI/ML', 'WebGL', 'Sentry', 'PostHog'],
    tech: ['TypeScript', 'ECS', 'Cloudflare Workers', 'AI/ML', 'WebGL'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: 'https://vitalik.run/',
    link: '/case-study/vitalik-run',
    status: 'Live Product'
  },
  {
    id: 'traderate',
    title: 'TradeRate',
    subtitle: 'Decentralized, Community-Verified Crypto Trade Signals',
    client: 'Blockchain-verified trading signals platform',
    category: 'Web3',
    industry: 'Decentralized Finance / Social Trading',
    location: 'Global',
    timeline: '6 months',
    teamSize: '8 people',
    image: tradeRate,
    shortDescription: 'Blockchain-verified platform enabling signal creation, validator voting, community verification, automated execution, and loss compensation.',
    description: 'SafePress engineered TradeRate—a smart contract–driven, community-first trading signals platform with tiered validation, on-chain verification, and automated trading capabilities.',
    challenge: 'Crypto traders lacked a collaborative, trustworthy environment to create, validate, and act upon trading signals—relying on opaque methods, inconsistent reliability, and little protection against failed signals.',
    solution: 'Built a blockchain-verified platform with dual-layer validation (validators + community swiping), automated trading execution, profit-sharing mechanisms, and loss compensation pools for risk mitigation.',
    results: [
      'Tiered signal validation with validator voting and community swiping',
      'Blockchain-verified signals with full transparency and auditability',
      'Automated trading execution with user-defined thresholds',
      'Fair profit-sharing among creators, validators, and followers',
      'Loss compensation pool for downside protection',
      'Intuitive swipe-based UI for community validation',
      'TradeRate SDK for developer integration'
    ],
    technologies: ['React', 'TypeScript', 'Smart Contracts', 'Blockchain', 'Web3', 'Node.js', 'AWS'],
    tech: ['React', 'Smart Contracts', 'Blockchain', 'Web3', 'Node.js'],
    gradient: 'from-safepress-primary to-safepress-secondary',
    url: '#',
    link: '/case-study/traderate',
    status: 'Live Product'
  }
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(study => study.id === id);
} 