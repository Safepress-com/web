import { motion } from 'framer-motion';
import { Globe, TrendingUp, Shield, Zap, BarChart3, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import latetImage from '../../assets/use-cases/latet/1.png';
import latetImage2 from '../../assets/use-cases/latet/2.jpeg';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

export function NonprofitCaseStudy() {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);

  // Reset animations when navigating to this page
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6 font-display">
              Fundraiser Payment System
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Building spike-proof, fault-tolerant payments for Israel's biggest fundraising events
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">At a Glance</h2>
                
                              <div className="mb-12">
                <p className="text-lg text-slate-600 mb-6"><strong>Industry:</strong> <span className="font-mono text-safepress-primary">Nonprofit / Fundraising Infrastructure</span></p>
                <p className="text-lg text-slate-600 mb-6"><strong>Location:</strong> Israel, global donor support</p>
                <p className="text-lg text-slate-600 mb-6"><strong>Challenge:</strong> Large nonprofit organizations in Israel depend on short, high-intensity fundraising events that last only 3–4 hours. These campaigns face extreme traffic surges, payment processor outages, and the need for multi-language, multi-currency support to reach global donors. Existing systems lacked resilience, real-time transparency, and reliability during these critical windows — risking millions in lost donations.</p>
                <p className="text-lg text-slate-600 mb-6"><strong>Solution:</strong> SafePress engineered a surge-ready, serverless payment system built on AWS Lambda and edge delivery. The platform provides multi-provider payment orchestration with automated failover, multilingual and multi-currency support, and a live real-time dashboard for organizers to monitor donations as they happen.</p>
                <p className="text-lg text-slate-600 mb-6"><strong>Nonprofits now benefit from:</strong></p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li className="text-slate-600">High-availability infrastructure designed for sudden 50× traffic spikes</li>
                  <li className="text-slate-600">Multi-payment integration with automatic failover to prevent downtime</li>
                  <li className="text-slate-600">Multilingual donor flows and localized receipts across currencies</li>
                  <li className="text-slate-600">Real-time dashboard with live donations, analytics, and finance-ready exports</li>
                  <li className="text-slate-600">Automated reconciliation and audit logs for compliance</li>
                </ul>
                <p className="text-lg text-slate-600"><strong>The result:</strong> Israel's largest nonprofits raised <span className="font-mono text-safepress-primary">over 50M NIS</span> with SafePress-powered campaigns, achieving record-breaking fundraising goals with zero downtime and total donor trust.</p>
              </div>
              </div>
            </div>

            <motion.div
              key={`hero-image-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={latetImage}
                alt="Nonprofit fundraising platform showing donation tracking and payment processing"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">The Challenge</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                Israel's largest nonprofits rely on short, high-pressure fundraising events that can generate millions in just a few hours. These campaigns face major risks:
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Traffic Surges</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Donation traffic skyrockets <span className="font-mono text-safepress-primary">50×</span> within minutes during live events.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Payment Failures</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Outages at a single provider could stall millions in donations during critical fundraising windows.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Global Reach</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Donors demand multi-language, multi-currency support across different regions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Transparency</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Organizers need live visibility into every shekel raised to maintain donor trust.</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  SafePress was tasked with building a <strong>spike-proof, fault-tolerant payments platform</strong> to handle these mission-critical events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Our Solution</h2>
              <p className="text-xl text-slate-600 mb-12 text-center leading-relaxed">
                We engineered a comprehensive, surge-proof payment infrastructure that transforms how nonprofits handle high-intensity fundraising events.
              </p>
              
              <div className="space-y-12 mb-12">
                {/* Event-Ready Architecture */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Event-Ready Architecture</h3>
                  </div>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    We engineered a <strong className="text-safepress-primary">serverless, surge-proof system</strong> with AWS Lambda and API Gateway, ensuring infrastructure scales up instantly during peak hours and idles down post-event.
                  </p>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    The architecture combines <strong>static frontend delivery</strong> over CloudFront + S3 with pure Vanilla JS for sub-second load times worldwide, <strong>serverless backend</strong> with Lambda provisioned concurrency activated only for event windows, <strong>resilient state management</strong> through DynamoDB ensuring donation intents are idempotent and consistent, and <strong>async processing</strong> via SQS queues that absorb webhook bursts, receipts, and CRM synchronization.
                  </p>
                </div>

                {/* Multi-Payment Resilience */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Multi-Payment Resilience</h3>
                  </div>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    SafePress built a <strong className="text-safepress-secondary">Payment Orchestrator</strong> to guarantee transaction completion even when providers failed.
                  </p>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    The system provides <strong>automatic failover</strong> with real-time health checks that instantly reroute traffic to backup providers, <strong>regional and currency optimization</strong> that routes payments based on donor location and preferred payment methods, and comprehensive <strong>reconciliation and audit trails</strong> through Step Functions + DynamoDB ensuring every transaction is tracked, deduplicated, and exported to finance systems.
                  </p>
                </div>

                {/* Live Dashboard for Organizers */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Live Dashboard for Organizers</h3>
                  </div>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Fundraising teams saw their donations <strong className="text-safepress-primary">live, in real time</strong> through a comprehensive monitoring system.
                  </p>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    The dashboard features <strong>WebSocket streams</strong> that securely broadcast donations as they clear, real-time <strong>insights and analytics</strong> showing per-minute volume, gross/net totals, top donor regions, and failed payment tracking, and instant <strong>export capabilities</strong> providing CSV downloads and finance-ready reports for immediate use.
                  </p>
                </div>

                {/* Global Experience */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Global Experience</h3>
                  </div>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    To reach donors worldwide, we built a truly global payment experience that adapts to local preferences and requirements.
                  </p>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    The platform supports <strong>multi-language interfaces</strong> with a JSON-based translation system including RTL support for Hebrew and Arabic, <strong>multi-currency processing</strong> with automatic formatting and localized receipts based on donor country, and <strong>ultra-light delivery</strong> maintaining sub-30KB critical paths for first render to ensure performance at scale across all regions and devices.
                  </p>
                </div>

                {/* Summary Box */}
                <div className="bg-gradient-to-r from-safepress-primary/10 to-safepress-secondary/10 rounded-2xl p-8 border border-safepress-primary/20">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">The Complete Solution</h3>
                  <p className="text-lg text-slate-700 text-center leading-relaxed">
                    By combining these four pillars — event-ready architecture, multi-payment resilience, live dashboards, and global experience — SafePress created a comprehensive fundraising platform that handles the most demanding nonprofit campaigns with enterprise-grade reliability and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Results</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed text-center">
                With SafePress, Israel's biggest nonprofits ran flawless fundraising events:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">50M+ NIS Raised</h3>
                  <p className="text-slate-600">Across multiple campaigns with zero downtime</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Zero Downtime</h3>
                  <p className="text-slate-600">Even under massive traffic spikes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Automatic Failover</h3>
                  <p className="text-slate-600">Prevented lost donations during provider outages</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-10 h-10 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Live Transparency</h3>
                  <p className="text-slate-600">Empowered finance teams and boosted donor trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust SafePress */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Nonprofits Trust SafePress</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              SafePress combines <strong>engineering rigor</strong> with <strong>business impact</strong>:
            </p>

            <div className="max-w-4xl mx-auto mb-12">
              <ul className="space-y-6 text-left">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-safepress-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-safepress-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Enterprise-Grade Resilience</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Redundant cloud regions, multi-vendor payment routing, and automatic failover guarantee continuity — even under extreme demand or third-party outages.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-safepress-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-safepress-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Built-In Governance & Compliance</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">End-to-end encryption, full audit trails, and alignment with PCI-DSS and GDPR standards ensure donations meet the strictest financial and regulatory requirements.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-safepress-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-safepress-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Real-Time Intelligence & Control</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">Executive dashboards provide instant visibility into fundraising performance, donor flows, and payment health — empowering leadership with actionable data during mission-critical events.</p>
                  </div>
                </li>
              </ul>
            </div>

            <motion.div
              key={`trust-image-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <img 
                src={latetImage2}
                alt="Nonprofit fundraising platform showing trust and compliance features"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              key={`cta-section-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-safepress-primary/5 to-safepress-secondary/5 rounded-2xl p-8 border border-safepress-primary/20"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h3>
              <p className="text-lg text-slate-700 mb-8 max-w-4xl mx-auto">
                We don't just build software. We build the systems that keep donations flowing when it matters most. Our nonprofit payment platform has proven that with the right architecture, even the most intense fundraising events can run flawlessly.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Build?</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                We help ambitious organizations turn bold ideas into scalable platforms. Let's discuss how we can build your next solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-safepress-primary hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>👉 Start Your Project</span>
                </Link>
                <a
                  href="https://donate.latet.org.il/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-2 border-safepress-primary text-safepress-primary hover:bg-safepress-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
                  <span>View Platform</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 