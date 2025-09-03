import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';
import simpleAppsImage from '../../assets/pricing/1.png';
import advancedAppsImage from '../../assets/pricing/2.png';
import missionCriticalImage from '../../assets/pricing/3.png';
import vangogh from '../../assets/pricing/4.png';

interface AppTier {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface TeamStructure {
  title: string;
  price: string;
    designers?: number;
  developers?: number;
  gameDesigner?: number;
  gameDeveloper?: number;
  frontendDeveloper?: number;
  backendDeveloper?: number;
  blockchainDeveloper?: number;
  blockchainAuditor?: number;
  aiSpecialist?: number;
  devops?: number;
  "3dartist"?: number;
    qa: number;
    projectManager: number;
    teamPercentages: {
      designers?: number;
    developers?: number;
    gameDesigner?: number;
    gameDeveloper?: number;
    frontendDeveloper?: number;
    backendDeveloper?: number;
    blockchainDeveloper?: number;
    blockchainAuditor?: number;
    aiSpecialist?: number;
    devops?: number;
    "3dartist"?: number;
      qa: number;
      projectManager: number;
  };
}

const appTiers: AppTier[] = [
  {
    name: 'Simple apps',
    price: '$15,000 - $35,000',
    description: 'are lean, functional, and fast to deliver. They showcase the core value of your product with essential features, simple flows, and a clean UI',
    features: [
      'Essential features and simple flows',
      'Reliable UI with core functionality',
      'Basic user authentication',
      'Simple database structure',
      'Mobile-responsive design',
      'Basic testing and deployment'
    ]
  },
  {
    name: 'Advanced apps',
    price: '$35,000 - $75,000',
    description: 'have richer functionality, transparent integrations, and tailored user experiences. From API connectivity and real-time messaging to extended flows and interactive features, these apps go beyond the basics to deliver depth and engagement.',
    features: [
      'API connectivity and integrations',
      'Real-time messaging and notifications',
      'Extended screen flows and navigation',
      'Advanced user management',
      'Complex database relationships',
      'Performance optimization',
      'Comprehensive testing suite'
    ]
  },
  {
    name: 'Complex apps',
    price: '$75,000+',
    description: 'are the real deal: multifunctional platforms built with enterprise-grade depth. Think advanced UI animations, multiple integrations, synchronized systems, media processing, and scalable infrastructure.',
    features: [
      'Synchronization engines and real-time processing',
      'AI chatbots and machine learning',
      'Media processing and file management',
      'Advanced UI animations and interactions',
      'Scalable infrastructure and microservices',
      'Enterprise security and compliance',
      'Advanced analytics and reporting',
      'Multi-tenant architecture'
    ]
  }
];

const teamStructures: TeamStructure[] = [
    {
        title: 'Web/Mobile App Development',
        price: '',
          designers: 1,
        frontendDeveloper: 1,
        backendDeveloper: 2,
    aiSpecialist: 1,
    devops: 1,
        qa: 1,
          projectManager: 1,
          teamPercentages: {
          designers: 40,
          frontendDeveloper: 100,
          backendDeveloper: 100,
          aiSpecialist: 100,
          devops: 25,
          qa: 100,
            projectManager: 25
        }
      },
  {
    title: 'Game Development',
    price: '',
    designers: 1,
    gameDesigner: 1,
    gameDeveloper: 2,
    backendDeveloper: 1,
    aiSpecialist: 1,
    devops: 1,
    qa: 1,
    projectManager: 1,
    teamPercentages: {
      designers: 40,
      gameDesigner: 50,
      gameDeveloper: 100,
          aiSpecialist: 100,
          backendDeveloper: 100,
      devops: 15,
      qa: 100,
      projectManager: 25
    }
  },

 
  {
    title: 'Web3 Development',
    price: '',
    designers: 1,
    frontendDeveloper: 1,
    backendDeveloper: 2,
    blockchainDeveloper: 2,
    aiSpecialist: 1,
    devops: 1,
    qa: 1,
    projectManager: 1,
    teamPercentages: {
      designers: 40,
      frontendDeveloper: 100,
          aiSpecialist: 100,
          backendDeveloper: 100,
      blockchainDeveloper: 100,
      devops: 25,
      qa: 100,
      projectManager: 25
    }
  },
    {
        title: 'Web3 Security',
        price: '',
        blockchainAuditor: 2,
        blockchainDeveloper: 1,
        aiSpecialist: 1,
        qa: 2,
        projectManager: 1,
        teamPercentages: {
          aiSpecialist: 50,
          blockchainAuditor: 100,
          blockchainDeveloper: 100,
          qa: 100,
          projectManager: 25
        },
  },
];

export function PricingPage() {
  const [expandedTier, setExpandedTier] = useState<number>(0);

  // Helper function to get percentage text
  const getPercentageText = (percentage: number | undefined) => {
    if (percentage === undefined) return 'allocation';
    return percentage === 100 ? 'dedicated' : 'allocation';
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
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-5 gap-16 items-center justify-items-center">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <motion.img 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  src={vangogh}
                  alt="Team collaboration and expertise"
                  className="w-full max-w-[28rem] h-auto object-cover"
                />
              </div>
              <div className="lg:col-span-3 space-y-8 text-center lg:text-left order-1 lg:order-2">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl font-bold leading-tight font-display"
                >
                    AI Powered
                    Teams
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-xl text-slate-600 leading-relaxed"
                >
                  We combine AI with human expertise to deliver fast pacing, high-quality, cost-efficient outputs. 
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Types of App Builds
              </h2>
      
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {appTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center h-full"
                >
                  {/* Visual/Image Section */}
                  <div className="mb-6">
                    <img 
                      src={
                        index === 0 ? simpleAppsImage :
                        index === 1 ? advancedAppsImage :
                        missionCriticalImage
                      }
                      alt={tier.name}
                      className="w-48 h-48 mx-auto object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col h-full space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                    <p className="text-slate-600 leading-relaxed flex-grow">{tier.description}</p>
                    
                    {/* Timeline Information - Aligned to bottom */}
                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-1">Design</div>
                        <div className="text-lg font-bold text-safepress-primary min-h-[2rem] flex items-center justify-center">
                          {index === 0 ? '1-2 weeks' : index === 1 ? '1 month' : '2–3 months'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-1">Development</div>
                        <div className="text-lg font-bold text-safepress-secondary min-h-[2rem] flex items-center justify-center">
                          {index === 0 ? '1-2 months' : index === 1 ? '2–4 months' : '6+ months'}
                        </div>
                      </div>
                    </div>

                

                    {/* Team Size Preview */}
                   
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Recommended Team Structure
              </h2>
            </div>

                        {/* Tab Content with Integrated Slice Navigation */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              {/* Tab Navigation as Top Slices */}
              <div className="flex relative overflow-x-auto scrollbar-hide">
                {teamStructures.map((team, index) => (
                  <button
                    key={team.title}
                    onClick={() => setExpandedTier(index)}
                    className={`flex-1 min-w-[140px] sm:min-w-[160px] md:min-w-0 py-3 sm:py-4 px-2 sm:px-4 font-medium transition-colors duration-300 relative overflow-hidden ${
                      expandedTier === index
                        ? 'bg-gradient-to-br from-safepress-primary to-safepress-primary/90 text-white'
                        : 'bg-gradient-to-br from-slate-100 to-slate-50 text-slate-600 hover:from-slate-200 hover:to-slate-100 hover:text-slate-900'
                    } ${
                      index === 0 ? 'rounded-tl-3xl' : ''
                    } ${
                      index === teamStructures.length - 1 ? 'rounded-tr-3xl' : ''
                    }`}
                    
                  >
                    <div className="relative z-10 text-center">
                      <div className="text-xs sm:text-sm md:text-base font-semibold leading-tight">{team.title}</div>
                      <div className={`text-xs mt-1 ${
                        expandedTier === index ? 'text-white/80' : 'text-slate-500'
                      }`}>
                        {team.price}
                      </div>
                    </div>
                    {/* Active indicator */}
                    {expandedTier === index && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              {teamStructures.map((teamStructure, index) => {
                return (
                                  <div
                    key={teamStructure.title}
                    className={`p-4 sm:p-6 md:p-8 ${expandedTier === index ? 'block' : 'hidden'}`}
                  >
                  {/* Header */}
                  <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-4">{teamStructure.title}</h3>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-safepress-secondary mb-2">{teamStructure.price}</div>
                  </div>

                  {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    {teamStructure.aiSpecialist && (
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="text-2xl sm:text-3xl font-bold text-rose-600 mb-2">{teamStructure.aiSpecialist}</div>
                          <div className="text-sm font-medium text-slate-700 mb-3">AI Specialist{teamStructure.aiSpecialist > 1 ? 's' : ''}</div>
                          <div className="text-xs text-slate-500 bg-rose-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                            {teamStructure.teamPercentages.aiSpecialist}% {teamStructure.teamPercentages.aiSpecialist === 100 ? 'dedicated' : 'allocation'}
                          </div>
                        </div>
                      )}
                      {teamStructure?.designers && (
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="text-2xl sm:text-3xl font-bold text-safepress-primary mb-2">{teamStructure?.designers}</div>
                        <div className="text-sm font-medium text-slate-700 mb-3">UI/UX Designer{teamStructure?.designers && teamStructure.designers > 1 ? 's' : ''}</div>
                                              <div className="text-xs text-slate-500 bg-safepress-primary/10 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                          {teamStructure.teamPercentages.designers}% {getPercentageText(teamStructure.teamPercentages.designers)}
                        </div>
                      </div>
                      )}
                      
                      {teamStructure.gameDesigner && (
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">{teamStructure.gameDesigner}</div>
                          <div className="text-sm font-medium text-slate-700 mb-3">Game Designer{teamStructure.gameDesigner > 1 ? 's' : ''}</div>
                          <div className="text-xs text-slate-500 bg-purple-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                            {teamStructure.teamPercentages.gameDesigner}% {getPercentageText(teamStructure.teamPercentages.gameDesigner)}
                          </div>
                        </div>
                      )}

                      {teamStructure.gameDeveloper && (
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-2">{teamStructure.gameDeveloper}</div>
                          <div className="text-sm font-medium text-slate-700 mb-3">Game Developer{teamStructure.gameDeveloper > 1 ? 's' : ''}</div>
                          <div className="text-xs text-slate-500 bg-indigo-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                            {teamStructure.teamPercentages.gameDeveloper}% {getPercentageText(teamStructure.teamPercentages.gameDeveloper)}
                          </div>
                        </div>
                      )}

                      {teamStructure.frontendDeveloper && (
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-2">{teamStructure.frontendDeveloper}</div>
                          <div className="text-sm font-medium text-slate-700 mb-3">Frontend Developer{teamStructure.frontendDeveloper > 1 ? 's' : ''}</div>
                          <div className="text-xs text-slate-500 bg-cyan-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                            {teamStructure.teamPercentages.frontendDeveloper}% {getPercentageText(teamStructure.teamPercentages.frontendDeveloper)}
                          </div>
                        </div>
                      )}

                      {teamStructure.backendDeveloper && (
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-2">{teamStructure.backendDeveloper}</div>
                          <div className="text-sm font-medium text-slate-700 mb-3">Backend Developer{teamStructure.backendDeveloper > 1 ? 's' : ''}</div>
                          <div className="text-xs text-slate-500 bg-emerald-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                            {teamStructure.teamPercentages.backendDeveloper}% {getPercentageText(teamStructure.teamPercentages.backendDeveloper)}
                          </div>
                        </div>
                      )}

                      {teamStructure.blockchainDeveloper && (
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="text-2xl sm:text-3xl font-bold text-violet-600 mb-2">{teamStructure.blockchainDeveloper}</div>
                          <div className="text-sm font-medium text-slate-700 mb-3">Blockchain Developer{teamStructure.blockchainDeveloper > 1 ? 's' : ''}</div>
                          <div className="text-xs text-slate-500 bg-violet-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                            {teamStructure.teamPercentages.blockchainDeveloper}% {getPercentageText(teamStructure.teamPercentages.blockchainDeveloper)}
                          </div>
                        </div>
                      )}

                      {teamStructure.blockchainAuditor && (
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">{teamStructure.blockchainAuditor}</div>
                          <div className="text-sm font-medium text-slate-700 mb-3">Blockchain Auditor{teamStructure.blockchainAuditor > 1 ? 's' : ''}</div>
                          <div className="text-xs text-slate-500 bg-red-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                            {teamStructure.teamPercentages.blockchainAuditor}% {getPercentageText(teamStructure.teamPercentages.blockchainAuditor)}
                          </div>
                        </div>
                      )}

              

                      {teamStructure.devops && (
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">{teamStructure.devops}</div>
                          <div className="text-sm font-medium text-slate-700 mb-3">DevOps Engineer{teamStructure.devops > 1 ? 's' : ''}</div>
                          <div className="text-xs text-slate-500 bg-amber-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                            {teamStructure.teamPercentages.devops}% {getPercentageText(teamStructure.teamPercentages.devops)}
                          </div>
                        </div>
                      )}

                      {teamStructure["3dartist"] && (
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">{teamStructure["3dartist"]}</div>
                          <div className="text-sm font-medium text-slate-700 mb-3">3D Artist{teamStructure["3dartist"] > 1 ? 's' : ''}</div>
                                                    <div className="text-xs text-slate-500 bg-orange-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                            {teamStructure.teamPercentages["3dartist"]}% {getPercentageText(teamStructure.teamPercentages["3dartist"])}
                        </div>
                    </div>
                      )}

                      {teamStructure.developers && (
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="text-2xl sm:text-3xl font-bold text-safepress-secondary mb-2">{teamStructure.developers}</div>
                          <div className="text-sm font-medium text-slate-700 mb-3">General Developer{teamStructure.developers > 1 ? 's' : ''}</div>
                      <div className="text-xs text-slate-500 bg-safepress-secondary/10 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                            {teamStructure.teamPercentages.developers}% {getPercentageText(teamStructure.teamPercentages.developers)}
                      </div>
                    </div>
                      )}

                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{teamStructure.qa}</div>
                        <div className="text-sm font-medium text-slate-700 mb-3">QA Engineer{teamStructure.qa > 1 ? 's' : ''}</div>
                      <div className="text-xs text-slate-500 bg-blue-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                          {teamStructure.teamPercentages.qa}% {getPercentageText(teamStructure.teamPercentages.qa)}
                        </div>
                      </div>
                      
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{teamStructure.projectManager}</div>
                        <div className="text-sm font-medium text-slate-700 mb-3">Project Manager{teamStructure.projectManager > 1 ? 's' : ''}</div>
                      <div className="text-xs text-slate-500 bg-green-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 inline-block font-medium">
                          {teamStructure.teamPercentages.projectManager}% {getPercentageText(teamStructure.teamPercentages.projectManager)}
                        </div>
                    </div>
                  </div>
             
                </div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </section>

      <Contact variant="light-slate" />

      <Footer />
    </div>
  );
} 