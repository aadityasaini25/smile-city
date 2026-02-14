'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Invisalign and how does it work?",
      answer: "Invisalign uses a series of clear, removable aligners to gradually straighten your teeth. Each set is worn for about 1-2 weeks and works by applying precise, controlled pressure to move teeth into their ideal positions without the need for metal wires or brackets."
    },
    {
      question: "How long does orthodontic treatment usually take?",
      answer: "Treatment duration varies based on complexity, but most cases range from 6 to 18 months for aligners, and 12 to 24 months for traditional braces. During your consultation with Dr. K. Purnasri, we'll provide a customized timeline for your specific smile."
    },
    {
      question: "Am I too old for braces or Invisalign?",
      answer: "Absolutely not! Orthodontic treatment is effective at any age as long as your gums and bone structure are healthy. Many of our patients are adults seeking a more confident, professional smile with discreet options like Invisalign."
    },
    {
      question: "How often do I need to visit the clinic during treatment?",
      answer: "With our specialist-driven approach, we typically see Invisalign patients every 6-8 weeks and braces patients every 4-6 weeks to monitor progress and provide your next sets of aligners or make adjustments."
    },
    {
      question: "Do clear aligners really work as well as metal braces?",
      answer: "Yes, for the vast majority of cases. Invisalign technology has advanced significantly and can treat crowding, spacing, overbites, and underbites with the same precision as traditional braces, while offering better comfort and aesthetics."
    },
    {
      question: "How do I maintain my smile after treatment?",
      answer: "After your active treatment is finished, you'll wear a retainer to keep your teeth in their new positions. We provide high-quality custom retainers and long-term follow-up to ensure your beautiful results last a lifetime."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900">
          Frequently Asked <span className="text-gradient-gold">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card !p-0 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 md:p-8 text-left font-bold hover:bg-purple-50 transition-colors flex justify-between items-center group"
              >
                <span className="flex-grow pr-4 text-lg md:text-xl text-gray-800 group-hover:text-[#5B216E] transition-colors">{faq.question}</span>
                <span className={`w-8 h-8 rounded-full border border-purple-100 flex items-center justify-center text-[#5B216E] transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180 bg-[#5B216E] text-white' : ''}`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-8 md:px-8 md:pb-10 bg-white">
                  <div className="w-full h-px bg-purple-50 mb-8"></div>
                  <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}