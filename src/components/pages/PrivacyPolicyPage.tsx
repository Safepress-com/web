import { motion } from 'framer-motion';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-safepress-primary/10 rounded-full mb-6">
                  <Shield className="w-8 h-8 text-safepress-primary" />
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight font-display mb-6"
              >
                Privacy Policy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto"
              >
                Your privacy and data security are fundamental to our mission. This policy outlines how we collect, use, and protect your information.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* 1. General Information */}
                <div className="bg-slate-50 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-safepress-primary" />
                    1. General Information
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      This Privacy Policy outlines the rules for processing and protection of personal data of Users when using the websites and services provided by <strong>SafePress FZ-LLC</strong> ("Administrator").
                    </p>
                    <p>
                      A <strong>User</strong>, for the purposes of this Policy, is defined as any person contacting and/or ordering services provided by the Administrator.
                    </p>
                    <p>
                      <strong>SafePress FZ-LLC</strong>, registered and operating under the applicable laws of the United Arab Emirates, is the <strong>Administrator of Personal Data</strong> pursuant to the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (GDPR) and other applicable privacy regulations.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-2">Contact regarding the processing of personal data:</p>
                      <a 
                        href="mailto:privacy@safepress.com" 
                        className="text-safepress-primary hover:text-safepress-secondary transition-colors flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        privacy@safepress.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Purpose of Collecting and Processing Personal Data */}
                <div className="bg-slate-50 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Eye className="w-8 h-8 text-safepress-primary" />
                    2. Purpose of Collecting and Processing Personal Data
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      The User entrusts the Administrator with the processing of personal data in order to:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Use the Administrator's websites and online services.</li>
                      <li>Enable communication regarding User's queries and orders made via the Administrator's contact forms.</li>
                      <li>Send personalized business information and proposals to the User.</li>
                    </ol>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>By providing a <strong>telephone number</strong>, the User agrees to be contacted by phone in order to enable the Administrator to provide the requested services.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Mail className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>By providing an <strong>email address</strong>, the User agrees to be contacted via email for the same purpose.</span>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Consent to provide such information is voluntary; however, lack of consent may prevent the Administrator from properly handling queries or orders.
                    </p>
                    <p>
                      In the event of cooperation between the User and Administrator, access to personal data may be granted to subcontractors and affiliated partners of the Administrator. This will be communicated transparently and only with the User's permission.
                    </p>
                  </div>
                </div>

                {/* 3. Scope of Data Processing */}
                <div className="bg-slate-50 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Lock className="w-8 h-8 text-safepress-primary" />
                    3. Scope of Data Processing
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      The Administrator may process the following User data:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Telephone number</li>
                    </ul>
                    <p>
                      The processing of the above data includes creating backup copies as part of secure system operations.
                    </p>
                    <p>
                      The website may run automated systems that monitor user behavior to personalize content and optimize the User's experience. Each User can opt out or object to such systems at any time.
                    </p>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900 mb-2">Cookies and Analytics</h4>
                      <p className="text-sm text-amber-800">
                        The Administrator uses <strong>cookies</strong> to ensure proper website functionality, adjust content to User preferences, and optimize performance. We also use <strong>Google Analytics</strong> to gather anonymous statistical data. Users can configure their browser settings to manage cookies, including blocking or deleting them.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Rights of Users */}
                <div className="bg-slate-50 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-safepress-primary" />
                    4. Rights of Users
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>Users have the right to:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Access their personal data</li>
                        <li>Rectify (change) their personal data</li>
                        <li>Remove their personal data</li>
                      </ul>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Restrict the processing of personal data</li>
                        <li>Transfer their personal data</li>
                        <li>File complaints regarding personal data processing</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800">
                        To exercise these rights, Users should contact the Administrator at{' '}
                        <a 
                          href="mailto:privacy@safepress.com" 
                          className="text-safepress-primary hover:text-safepress-secondary transition-colors font-semibold"
                        >
                          privacy@safepress.com
                        </a>
                      </p>
                    </div>
                    <p className="text-sm text-slate-600">
                      Please note that deletion, restriction, or objection to processing may limit the Administrator's ability to provide services or respond to User queries.
                    </p>
                  </div>
                </div>

                {/* 5. Data Retention */}
                <div className="bg-slate-50 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Data Retention</h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      The Administrator retains User's personal data only as long as necessary to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Respond to User queries and provide services.</li>
                      <li>Prepare and deliver business offers.</li>
                      <li>Fulfill contractual or legal obligations.</li>
                    </ul>
                    <p>
                      Once the above purposes are met, data will be securely deleted unless retention is required by law. Users may request removal of their data at any time.
                    </p>
                  </div>
                </div>

                {/* 6. Administrator's Obligations */}
                <div className="bg-slate-50 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">6. Administrator's Obligations</h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      The Administrator is committed to processing personal data securely and in compliance with applicable regulations. In particular, SafePress will:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Protect data from unauthorized access, alteration, or destruction.</li>
                      <li>Restrict access to authorized personnel only.</li>
                      <li>Maintain proper records of data processing activities.</li>
                      <li>Ensure that all personnel with access to personal data are bound by confidentiality agreements (NDAs) and receive appropriate data protection training.</li>
                      <li>Maintain up-to-date records of methods and technologies used to secure data.</li>
                      <li>Ensure that all systems and devices used for data processing comply with recognized technical and organizational standards for information security.</li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-safepress-primary/10 to-safepress-secondary/10 p-8 rounded-2xl border border-safepress-primary/20">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Questions About This Policy?</h3>
                  <div className="text-center space-y-4">
                    <p className="text-slate-700">
                      If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to reach out.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                      <a 
                        href="mailto:privacy@safepress.com"
                        className="inline-flex items-center gap-2 bg-safepress-primary text-white px-6 py-3 rounded-lg hover:bg-safepress-secondary transition-colors font-semibold"
                      >
                        <Mail className="w-4 h-4" />
                        Contact Privacy Team
                      </a>
                      <a 
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-safepress-primary px-6 py-3 rounded-lg border border-safepress-primary hover:bg-safepress-primary hover:text-white transition-colors font-semibold"
                      >
                        <MapPin className="w-4 h-4" />
                        General Contact
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
} 