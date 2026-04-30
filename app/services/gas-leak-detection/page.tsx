"use client";
import React from "react";
import PageHeader from "@/Component/Common/PageHeader";
import {
  LuTriangle,
  LuPhoneCall,
  LuWind,
  LuFlame,
  LuShieldCheck,
  LuActivity,
  LuSearch,
} from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";
import { sendGTMEvent } from "@next/third-parties/google";

const GasLeakDetection = () => {
  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Gas Leak Detection" },
  ];

  const faqs = [
    {
      q: "What should I do if I smell gas in my home?",
      a: "Immediately turn off your gas meter at the mains, open all windows and doors for ventilation, do not use any electrical switches (including phones or lights), evacuate the property, and call our 24/7 emergency gas fitters.",
    },
    {
      q: "How do plumbers detect a gas leak?",
      a: "We use a combination of hydrostatic pressure drop testing on your gas line to confirm a leak exists, followed by highly sensitive electronic gas 'sniffer' tools and ultrasonic detectors to pinpoint the exact location behind walls or underground.",
    },
    {
      q: "Who is responsible for fixing a gas leak in Melbourne?",
      a: "If the leak is on the street side of your gas meter, your gas distributor is responsible. If the leak is after the meter (on your property's pipes or appliances), you are responsible for hiring a licensed VBA gas fitter to repair it.",
    },
    {
      q: "Can a gas leak cause carbon monoxide poisoning?",
      a: "Yes. Incomplete combustion from a faulty, leaking gas appliance can produce Carbon Monoxide (CO). This is a colorless, odorless gas. We strongly recommend adding a CO test whenever we perform gas leak detection.",
    },
  ];

  return (
    <main className="bg-slate-50">
      <PageHeader
        title="Emergency Gas Leak Detection Melbourne"
        subtitle="Smell gas? Don't wait. Our licensed Melbourne gas fitters use advanced diagnostic equipment to pinpoint and repair leaks fast. 24/7 Emergency dispatch available."
        breadcrumbs={breadcrumbs}
      />

      {/* 1. IMMEDIATE ACTION / EMERGENCY BANNER */}
      <section className="relative -mt-10 z-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-2xl border-l-8 border-accent p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <LuTriangle className="text-[200px] text-accent" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <LuTriangle className="text-accent text-2xl animate-pulse" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-primary">
                    Suspect a Gas Leak? Act Now.
                  </h2>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Turn off your gas at the main meter immediately.",
                    "Open doors and windows to ventilate the area.",
                    "DO NOT turn electrical switches on or off, light matches, or smoke.",
                    "Evacuate to a safe distance and call for emergency repair.",
                  ].map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700 font-medium"
                    >
                      <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-auto shrink-0 flex flex-col gap-3">
                <a
                  href="tel:0405133761"
                  onClick={() =>
                    sendGTMEvent({ event: "gas_leak_emergency_call" })
                  }
                  className="bg-accent text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/30 hover:-translate-y-1"
                >
                  <LuPhoneCall className="text-2xl" />
                  CALL 0405 133 761
                </a>
                <p className="text-center text-sm font-bold text-slate-500 tracking-wide">
                  15-MINUTE DISPATCH TARGET
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNS OF A LEAK */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
              Hidden Danger:{" "}
              <span className="text-secondary">Signs of a Gas Leak</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Natural gas is naturally odorless. Gas companies add a chemical
              called Mercaptan to give it a distinct smell. If you notice any of
              these signs, you need professional detection immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Rotten Egg Smell",
                desc: "The most obvious sign. A distinct sulfur or rotten egg odor in your home.",
                icon: <LuWind />,
              },
              {
                title: "Hissing Sounds",
                desc: "A faint hissing or whistling sound near gas appliances, pipes, or behind walls.",
                icon: <LuActivity />,
              },
              {
                title: "Dead Vegetation",
                desc: "Unexplained dead or dying indoor plants, or brown patches of grass near underground exterior lines.",
                icon: <LuFlame />,
              },
              {
                title: "High Gas Bills",
                desc: "A sudden, unexplained spike in your gas utility bill indicating a continuous leak.",
                icon: <LuSearch />,
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-8 rounded-[2rem] hover:border-secondary transition-colors shadow-sm"
              >
                <div className="w-14 h-14 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center text-2xl mb-6">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR DETECTION PROCESS */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">
                <span className="h-px w-8 bg-secondary"></span>
                VBA Licensed Experts
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight">
                How We Pinpoint Leaks{" "}
                <span className="text-secondary">Without Guesswork</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Gas leaks can be incredibly difficult to locate, especially when
                pipes run inside wall cavities or beneath concrete. We use
                state-of-the-art diagnostic technology to find the exact source
                of the leak, saving you time and avoiding unnecessary property
                damage.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Manometer Pressure Drop Testing",
                    desc: "We connect specialized gauges to your gas line. If the pressure drops when appliances are off, a leak is confirmed.",
                  },
                  {
                    title: "Electronic Gas 'Sniffers'",
                    desc: "We sweep your property with highly sensitive electronic detectors that can sense gas molecules at a microscopic level.",
                  },
                  {
                    title: "Ultrasonic Detection",
                    desc: "For high-pressure lines, we use acoustic equipment to 'listen' for the ultrasonic frequency of escaping gas.",
                  },
                  {
                    title: "VBA Compliance & Certification",
                    desc: "Once repaired, we re-test the entire system and issue a compliance certificate guaranteeing your property is safe.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <LuShieldCheck className="text-secondary text-2xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary text-lg">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Representation Area */}
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/5 rounded-[3rem] -rotate-3 transform" />
              <div className="bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <h3 className="text-white text-2xl font-bold mb-8 relative z-10">
                  Why Choose Us for Gas Emergencies?
                </h3>

                <ul className="space-y-5 relative z-10">
                  {[
                    "Fully licensed by the Victorian Building Authority (VBA).",
                    "Equipped vans acting as mobile warehouses.",
                    "Upfront fixed pricing before we start repairs.",
                    "Respect for your home—we clean up after ourselves.",
                    "Lifetime guarantee on our workmanship.",
                  ].map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <FiCheckCircle className="text-secondary text-xl shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEO FAQ SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Gas Leak <span className="text-secondary">FAQs</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA BANNER */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          {/* Replaced hardcoded gradient with a primary gradient mix */}
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  Don&apos;t Risk Your Family&apos;s Safety.
                </h3>
                <p className="text-slate-300 text-lg">
                  Gas leaks are a serious hazard. Our licensed technicians are
                  on standby across Melbourne ready to secure your property
                  immediately.
                </p>
              </div>

              <a
                href="tel:0405133761"
                onClick={() => sendGTMEvent({ event: "bottom_cta_gas_leak" })}
                className="shrink-0 bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-colors shadow-xl"
              >
                Call 0405 133 761 Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GasLeakDetection;
