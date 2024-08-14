// components/FaqSection.tsx
'use client'
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'How fast will I get a decision?',
      answer: 'We aim to make decisions as quickly as possible, usually within a few hours of submission.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel your subscription at any time. There are no long-term commitments.',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Yes, you can add additional information to your invoice by contacting support.',
    },
    {
      question: 'How does billing work?',
      answer: 'Billing is done monthly, and you can manage your billing preferences in your account settings.',
    },
    {
      question: 'How do I change my account email?',
      answer: 'You can change your account email in the account settings section of your dashboard.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-section">
      {faqItems.map((item, index) => (
        <div key={index} className="faq-item my-2">
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className='text-[#101828] text-[18px] font-[500]'>{item.question}</h3>
            <span className='border border-[#98A2B3] rounded-full w-[20px] h-[20px] flex justify-center items-center text-[#98A2B3]'>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p className='text-[#475467] text-[16px] font-[400]'>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
