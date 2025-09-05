import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CalendarDays } from 'lucide-react'
import { useCalendlyModal } from '../../hooks/useCalendlyModal'

export function FloatingConsultationButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { openModal: openCalendly } = useCalendlyModal()
  const location = useLocation()

  // Don't show the button on /vc and /apply pages
  const hiddenRoutes = ['/vc', '/apply']
  const shouldHideButton = hiddenRoutes.includes(location.pathname)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsVisible(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    openCalendly()
  }

  if (!isVisible || shouldHideButton) return null

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl scale-in-animation"
      aria-label="Book a free consultation"
    >
      <CalendarDays className="w-5 h-5" />
      <span className="font-medium">Book a free consultation</span>
    </button>
  )
} 