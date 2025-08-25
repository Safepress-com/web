import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/pages/HomePage'
import { AboutPage } from './components/pages/AboutPage'
import { YieldscanCaseStudy } from './components/pages/YieldscanCaseStudy'
import { WalletInfoCaseStudy } from './components/pages/WalletInfoCaseStudy'
import { NonprofitCaseStudy } from './components/pages/NonprofitCaseStudy'
import { ChainOfCommandCaseStudy } from './components/pages/ChainOfCommandCaseStudy'
import { ContactPage } from './components/pages/ContactPage'
import { CaseStudiesPage } from './components/pages/CaseStudiesPage'
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage'
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
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-study/yieldscan" element={<YieldscanCaseStudy />} />
        <Route path="/case-study/mywalletinfo" element={<WalletInfoCaseStudy />} />
        <Route path="/case-study/nonprofits" element={<NonprofitCaseStudy />} />
        <Route path="/case-study/chain-of-command" element={<ChainOfCommandCaseStudy />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <FloatingConsultationButton />
      <CalendlyModal />
    </CalendlyModalProvider>
  )
}

export default App
