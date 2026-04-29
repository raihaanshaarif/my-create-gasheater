"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(); // First FAQ open by default

  const faqs = [
    {
      question: "How often should I service my gas heater?",
      answer:
        "We strongly recommend servicing your gas heater annually, ideally before winter starts. Regular maintenance ensures it runs efficiently, lowers your energy bills, and most importantly, prevents dangerous carbon monoxide leaks.",
    },
    {
      question: "Do you offer 24/7 emergency gas repair in Melbourne?",
      answer:
        "Yes, we do. Gas leaks and sudden heater failures are serious emergencies. Our Melbourne-based technicians are on call 24/7 to provide fast, safe, and reliable repairs when you need them most.",
    },
    {
      question: "What are the signs of a gas leak?",
      answer:
        "Key signs include a distinct &apos;rotten egg&apos; smell, hissing sounds near your gas appliances, dying indoor plants, or feeling sudden fatigue and nausea. If you notice these, turn off your gas at the meter, open windows, and call our emergency line immediately.",
    },
    {
      question: "Do you provide upfront pricing?",
      answer:
        "Absolutely. We diagnose the issue first and provide a flat-rate, transparent quote before any work begins. There are no hidden fees or surprise hourly charges.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate valid SEO JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-slate-100 py-20 px-6">
      {/* Inject SEO Schema invisibly into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side: Image / Visual */}
          <div className="relative h-100 w-full overflow-hidden rounded-3xl border border-slate-200 shadow-lg lg:h-150">
            {/* Replace the src with your actual professional van or technician image */}
            <Image
              src="/assets/images/resources/asset-7.webp"
              width={400}
              height={400}
              alt="Professional HVAC Technician servicing a heater in Melbourne"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft overlay gradient to make it look premium */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>

            {/* Trust Badge Floating on Image */}
            <div className="absolute bottom-6 left-6 max-w-50 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
              <p className="font-bold text-slate-900 text-lg">Fully Licensed</p>
              <p className="text-slate-500 text-sm leading-tight mt-1">
                Gas fitters & HVAC experts you can trust.
              </p>
            </div>
          </div>

          {/* Right Side: FAQ Content */}
          <div className="flex flex-col justify-center h-full">
            <div className="mb-10">
              <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm mb-3">
                <span className="h-px w-8 bg-secondary"></span>
                Got Questions?
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Frequently Asked{" "}
                <span className="text-secondary">Questions</span>
              </h2>
              <p className="text-slate-600 text-lg">
                Find quick answers to common questions about our heating,
                cooling, and emergency repair services.
              </p>
            </div>

            {/* Accordion Wrapper */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${
                      isOpen
                        ? "border-secondary shadow-md"
                        : "border-slate-200 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                    >
                      <span
                        className={`font-bold pr-4 ${isOpen ? "text-secondary" : "text-slate-900"}`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-secondary text-white" : "bg-slate-100 text-slate-500"}`}
                      >
                        <FaChevronDown
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        />
                      </div>
                    </button>

                    {/* Expandable Content Area */}
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-75 opacity-100 pb-5"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-slate-600 px-6 pt-2 border-t border-slate-50 mt-2">
                        {/* Rendering via dangerouslySetInnerHTML handles the escaped apostrophes cleanly if needed, or normal text */}
                        <span
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        ></span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
