import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/pages/HomePage'
import { AboutPage } from './components/pages/AboutPage'
import { PricingPage } from './components/pages/PricingPage'
import { YieldscanCaseStudy } from './components/pages/YieldscanCaseStudy'
import { WalletInfoCaseStudy } from './components/pages/WalletInfoCaseStudy'
import { NonprofitCaseStudy } from './components/pages/NonprofitCaseStudy'
import { ChainOfCommandCaseStudy } from './components/pages/ChainOfCommandCaseStudy'
import { PromoCircleCaseStudy } from './components/pages/PromoCircleCaseStudy'
import { VitalikRunCaseStudy } from './components/pages/VitalikRunCaseStudy'
import { KickAICaseStudy } from './components/pages/KickAICaseStudy'
import { TradeRateCaseStudy } from './components/pages/TradeRateCaseStudy'
import { ContactPage } from './components/pages/ContactPage'
import { CaseStudiesPage } from './components/pages/CaseStudiesPage'
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage'
import { FrontendPage } from './components/pages/FrontendPage'
import { BackendPage } from './components/pages/BackendPage'
import { SmartContractPage } from './components/pages/SmartContractPage'
import { SmartContractAuditPage } from './components/pages/SmartContractAuditPage'
import { GameDevelopmentPage } from './components/pages/GameDevelopmentPage'
import { ScrollToTop } from './components/ui/ScrollToTop'
import { FloatingConsultationButton } from './components/ui/FloatingConsultationButton'
import { CalendlyModal } from './components/ui/CalendlyModal'
import { CalendlyModalProvider } from './contexts/CalendlyModalContext'

function App() {
  return (
    <CalendlyModalProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<PricingPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-study/yieldscan" element={<YieldscanCaseStudy />} />
        <Route path="/case-study/mywalletinfo" element={<WalletInfoCaseStudy />} />
        <Route path="/case-study/nonprofits" element={<NonprofitCaseStudy />} />
        <Route path="/case-study/chain-of-command" element={<ChainOfCommandCaseStudy />} />
        <Route path="/case-study/promo-circle" element={<PromoCircleCaseStudy />} />
        <Route path="/case-study/vitalik-run" element={<VitalikRunCaseStudy />} />
        <Route path="/case-study/kickai" element={<KickAICaseStudy />} />
        <Route path="/case-study/traderate" element={<TradeRateCaseStudy />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/frontend" element={<FrontendPage />} />
        <Route path="/backend" element={<BackendPage />} />
        <Route path="/smart-contracts" element={<SmartContractPage />} />
        <Route path="/smart-contract-audit" element={<SmartContractAuditPage />} />
        <Route path="/game-development" element={<GameDevelopmentPage />} />
      </Routes>
      <FloatingConsultationButton />
      <CalendlyModal />
    </CalendlyModalProvider>
  )
}

export default App
