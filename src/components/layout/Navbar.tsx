import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import SafePressBlackLogo from '../../logoblack.svg';

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling down from the top
      if (currentScrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Teams', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
  ];


  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

 
  // Always show navbar on non-home pages
  const shouldShow = location.pathname !== '/' || isVisible;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: shouldShow ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white/95 backdrop-blur-md border-b border-slate-200 fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={SafePressBlackLogo}
              alt="SafePress"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-safepress-primary'
                    : 'text-slate-600 hover:text-safepress-primary'
                }`}
              >
                {item.name}
               
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
             
           
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-safepress-primary to-safepress-secondary hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-safepress-primary/25 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-safepress-primary transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 py-4"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-safepress-primary bg-safepress-primary/5 rounded-lg'
                      : 'text-slate-600 hover:text-safepress-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
           
              
              <div className="pt-4 border-t border-slate-200">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-gradient-to-r from-safepress-primary to-safepress-secondary text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}