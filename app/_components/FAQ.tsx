// File: pages/faqs.tsx
'use client'
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    { question: "What is a Umul Qura ?", answer: "UMUL QURA TV is a platform providing Quranic education, tafsir, Arabic courses, and more." },
    { question: "How do I get started with Diasmog TV?", answer: "You can get started by signing up on the platform and accessing the available courses." },
    { question: "Is the full tafsir included?", answer: "Yes, Umul Qura  offers full tafsir sessions for in-depth Quranic understanding." },
    { question: "Is there a full Arabic curriculum?", answer: "Yes, Umul qura  includes a full Arabic curriculum to help you understand Arabic." },
    { question: "How is Umul different from other Quran study platforms?", answer: "Umul  focuses on structured learning, combining tafsir, Arabic, and practical Islamic education." },
    { question: "How do I access the personalized dashboard and course materials?", answer: "Log in to your Umul QUra account to access your personalized dashboard and materials." },
    { question: "How do I contact Umul Qura  for support?", answer: "You can contact Umul qura support via the help section or email support@bayyinah.tv." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12 flex items-center justify-center">
      <div className="w-full max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg">
              {/* Question */}
              <button
                className="w-full text-left flex justify-between items-center p-4 text-white"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="p-4 text-gray-300 border-t border-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
