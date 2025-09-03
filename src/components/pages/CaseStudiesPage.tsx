import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Contact } from '../sections/Contact';
import { caseStudies } from '../../data/caseStudies';

export function CaseStudiesPage() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-display">
              Case Studies
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Explore how we've helped organizations build secure, scalable solutions that drive real business results across Web3, FinTech and Gaming.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
           

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
               
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-safepress-primary text-sm font-medium">
                        {study.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">
                      {study.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded font-mono">
                          +{study.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {study.link === '#' ? (
                      <div className="flex items-center gap-2 text-slate-400 font-medium">
                        <span>Case study coming soon</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    ) : (
                      <Link
                        to={study.link}
                        className="inline-flex items-center gap-2 text-safepress-primary hover:text-safepress-secondary font-medium transition-colors"
                      >
                        Read Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* More Coming Soon Section */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-br from-safepress-primary to-safepress-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    More Case Studies Coming Soon
                  </h3>
                  <p className="text-slate-600 mb-6">
                    We're documenting more case studies and will be sharing them with you soon. Stay tuned for exciting new case studies!
                  </p>
                  <div className="flex items-center justify-center gap-2 text-safepress-primary font-medium">
                    <div className="w-2 h-2 bg-safepress-primary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-safepress-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-safepress-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </div>
  );
}