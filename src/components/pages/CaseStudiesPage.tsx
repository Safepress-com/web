import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
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
              Explore how we've helped organizations build secure, scalable solutions that drive real business results across AI, blockchain, and emerging technologies.
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-safepress-primary to-safepress-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help you achieve similar results with your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-safepress-primary hover:bg-slate-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                to="/"
                className="border-2 border-white text-white hover:bg-white hover:text-safepress-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}