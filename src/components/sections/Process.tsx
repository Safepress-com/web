import { motion } from 'framer-motion';
import image1 from '../../assets/main/1.png';
import image2 from '../../assets/main/2.png';
import image3 from '../../assets/main/3.png';
import artImage from '../../assets/main/4.png';

export function Process() {
  const processSteps = [
    {
      title: "Discovery",
      description: "We work with you to define business goals, understand user needs, and build a roadmap that ensures fast delivery with measurable values.",
      image: image1
    },
    {
      title: "Design",
      description: "Our UX and UI specialists craft interfaces that are intuitive, human-centred, and aligned with the core purpose of your application.",
      image: image2
    },
    {
      title: "Development",
      description: "We deliver secure, scalable systems,from mobile and web apps to back-end infrastructure, blockchain, AI, and custom solutions. Every line of code follows best-practice engineering standards.",
      image: image3
    },
    {
      title: "Support",
      description: "Software doesn't end at launch. We provide long-term support and maintenance, making sure you answer your users' needs.",
      image: artImage
    }
  ];

  return (
    <section className="min-h-screen py-24 bg-slate-900 text-white flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Our Development Process
            </h2>
          
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Image */}
                <div className="mb-8">
                  <img 
                    src={step.image} 
                    alt={`${step.title} process illustration`}
                    className="w-full h-80 object-cover transition-transform duration-500 rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative element */}
              
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}