import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Process } from '../sections/Process'
import { Features } from '../sections/Features'
import { Contact } from '../sections/Contact'
import { FAQ } from '../sections/FAQ'
import { Navbar } from '../layout/Navbar'
import { Footer } from '../layout/Footer'

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative">
        <Hero />
        <About />
        <Process />
        <Features />
        <Contact variant="light-slate" />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}