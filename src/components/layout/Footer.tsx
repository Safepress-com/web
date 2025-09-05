import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare } from 'lucide-react';
import SafePressLogo from '../../logo.svg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About', href: '/' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact Us', href: '/contact' },
    ],
  
    technologies: [
      { name: 'Frontend', href: '/frontend' },
      { name: 'Backend', href: '/backend' },
      { name: 'Smart Contract Development', href: '/smart-contracts' },
      { name: 'Smart Contract Audits', href: '/smart-contract-audit' },
      { name: 'Game Development', href: '/game-development' },
    ],

    vc: [
      { name: 'SafePress VC', href: '/vc' },
    ],
  };

  // const socialLinks = [
  //   // { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/safepress' },
  //   // { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/safepress' },
  //   // { name: 'GitHub', icon: Github, href: 'https://github.com/safepress' },
  // ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <img
                  src={SafePressLogo}
                  alt="SafePress"
                  className="h-8 w-auto mb-4"
                />
                <p className="text-slate-300 leading-relaxed">
                  Building secure, scalable software solutions for the next generation of digital experiences.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="mailto:dev@safepress.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-safepress-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  dev@safepress.com
                </a>
                <a 
                  href="https://t.me/rubyedelstein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-safepress-primary transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  @rubyedelstein
                </a>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-safepress-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-safepress-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Technologies Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Technologies</h3>
            <ul className="space-y-3">
              {footerLinks.technologies.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-safepress-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VC Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-emerald-300">VC</h3>
            <ul className="space-y-3">
              {footerLinks.vc.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-slate-400 text-sm">
                © {currentYear} SafePress. All rights reserved.
              </p>
              <Link
                to="/privacy-policy"
                className="text-slate-400 hover:text-safepress-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
            
            {/* Social Links */}
            {/* <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-safepress-primary transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}