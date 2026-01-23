import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search, X } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "General",
    question: "What courses does ToyotechnICT offer?",
    answer: "We offer a wide range of ICT courses including Web Development, Data Science, Cyber Security, and UI/UX Design. Our programs are designed for both beginners and professionals looking to upskill."
  },
  {
    category: "Certification",
    question: "Do I get a certificate after completion?",
    answer: "Yes! Every student who successfully completes their course and passes the final project/assessment will receive a globally recognized ToyotechnICT certification."
  },
  {
    category: "Payments",
    question: "Is there a flexible payment plan?",
    answer: "Absolutely. We offer installment payment options for most of our long-term professional courses to ensure quality education is accessible."
  },
  {
    category: "Location",
    question: "Where is ToyotechnICT located?",
    answer: "Our main hub is located at NO.1 Gongola Road, Barnawa, Kaduna. We also provide online hybrid classes for remote students."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqData.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="font-orbitron text-4xl font-bold text-white">Common Questions</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find answers to the most frequently asked questions about our academy, 
              incubation hub, and partnership opportunities.
            </p>
          </div>

          {/* Search Bar - Matches Contact Form Input Styles */}
          <div className="relative mb-12 max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className={`w-5 h-5 transition-colors ${searchQuery ? 'text-toyoorange' : 'text-gray-500'}`} />
            </div>
            <input
              type="text"
              placeholder="Search for questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-12 py-4 text-white focus:outline-none focus:border-toyoblue transition-all placeholder:text-gray-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            <AnimatePresence mode='wait'>
              {filteredFaqs.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  {filteredFaqs.map((item, index) => (
                    <div 
                      key={index} 
                      className="glass rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase tracking-widest text-toyoorange font-bold">
                            {item.category}
                          </span>
                          <h3 className="text-white font-semibold text-lg leading-tight pr-4">
                            {item.question}
                          </h3>
                        </div>
                        <div className={`p-2 rounded-lg transition-all duration-300 ${activeIndex === index ? 'bg-toyoblue text-white' : 'bg-white/5 text-gray-400'}`}>
                          <ChevronDown 
                            className={`w-5 h-5 transition-transform duration-300 ${
                              activeIndex === index ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                      </button>

                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="px-6 pb-6 text-gray-400 border-t border-white/5 pt-4 leading-relaxed">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 glass rounded-3xl border border-dashed border-white/10"
                >
                  <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white">No results found</h3>
                  <p className="text-gray-500 mt-2">We couldn't find anything matching "{searchQuery}"</p>
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="mt-6 text-toyoorange font-semibold hover:text-orange-400 transition-colors"
                  >
                    View all questions
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-20 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
              <HelpCircle className="w-4 h-4 text-toyoblue" />
              Still have questions?
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-toyoblue hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Send a Message
              </a>
              {/* <a 
                href="https://wa.me/2348069213941" 
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border border-white/10 hover:bg-white/5 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;