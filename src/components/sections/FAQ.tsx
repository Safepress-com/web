import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What does a software house do?",
    answer: "A software house builds and maintains custom software solutions. Unlike freelancers or small dev shops, it delivers the full stack, from architecture and design to development, security, cloud deployment, and ongoing support. The goal is to create reliable, scalable platforms that solve complex problems, fuel growth, and earn lasting trust."
  },
  {
    question: "How is SafePress different from other software houses?",
    answer: "We’re a software house built for mission-critical systems in Web3, FinTech, and Games. Unlike generic development shops, we focus exclusively on platforms that must withstand peak loads, pass compliance audits, and scale without fail. Our edge comes from blending deep technical architecture, security auditing, and enterprise-grade engineering into every project. Instead of vague promises or endless time-based billing, we work with clear deliverables and measurable outcomes with daily updates. In our world, shipping software that doesn’t inspire trust simply doesn’t exist."
  },
  {
    question: "Why should I hire a software house instead of just building my own team?",
    answer: "Hiring your own team sounds simple, but it rarely is. Recruiting, training, and retaining top engineers takes months and every delay slows your business down. With us, you skip the hiring struggle and get an expert team ready to deliver from day one."
  },
  {
    question: "What should I look for when choosing a software house?",
    answer: "Look for proven experience building systems withdeep expertise in Web3, and a track record of delivering platforms that scale reliably under real-world pressure. At SafePress, we’ve engineered systems handling hundreds of millions in value and millions of users, helping startups and enterprises alike launch with confidence, pass audits, and grow without fear of failure."
  },
  {
    question: "How do you manage outsourced development so clients don't lose control?",
    answer: "We build with **transparency and accountability**. You get real-time visibility into project progress via dashboards, daily updates, and direct access to our engineers. **Your vision stays in your hands, we execute it with precision.**"
  },

  {
    question: "How do you handle communication and project management?",
    answer: "We integrate into your preferred workflow (Slack, Jira, GitHub, etc.) and maintain **weekly sprint reviews, milestone-based reporting, and direct founder-to-founder communication** for critical updates."
  },
  {
    question: "Can you handle compliance and audits?",
    answer: "Yes. We have experience in **KYC/AML, GDPR, SOC2, PCI DSS, and blockchain smart contract audits**. Compliance is part of the architecture, not an afterthought."
  },

  {
    question: "Why should I choose your software house over others?",
    answer: "Because we don't just \"build apps.\" We **engineer trust-first systems that cannot fail.** We've managed over **$350M TVL**, supported **100+ clients**, and helped raise **$15M+** for nonprofits. With **zero failures.**"
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatAnswer = (answer: string) => {
    return answer.split('\n').map((line, lineIndex) => {
      if (line.startsWith('* **')) {
        return (
          <li key={lineIndex} className="ml-4 text-gray-600">
            {line.replace('* **', '').replace('**', '')}
          </li>
        );
      }
      if (line.startsWith('* ')) {
        return (
          <li key={lineIndex} className="ml-4 text-gray-600">
            {line.replace('* ', '')}
          </li>
        );
      }
      if (line.trim() === '') {
        return <br key={lineIndex} />;
      }
      return (
        <span key={lineIndex} className="inline">
          {line.split('**').map((part, partIndex) => 
            partIndex % 2 === 1 ? (
              <strong key={partIndex} className="font-semibold text-gray-900">{part}</strong>
            ) : (
              part
            )
          )}
        </span>
      );
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
              FAQS
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:border-slate-300"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-start hover:bg-slate-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-6 leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-slate-200 ${
                      openIndex === index ? 'bg-safepress-primary text-white' : ''
                    }`}>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-300 ease-in-out ${
                          openIndex === index ? 'rotate-45' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={openIndex === index ? "M6 18L18 6M6 6l12 12" : "M12 4v16m8-8H4"}
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
                      {formatAnswer(faq.answer)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 