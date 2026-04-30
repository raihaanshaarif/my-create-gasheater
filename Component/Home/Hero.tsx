"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FiZap, FiCheckCircle, FiShield } from "react-icons/fi";
import { sendGTMEvent } from "@next/third-parties/google";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: "",
    issue: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Lead captured:", formData);
    // Add API logic
  };

  return (
    <section className="relative mt-4 min-h-[90svh] overflow-hidden bg-slate-50 z-2 sm:-mt-22 pb-16 flex flex-col justify-center border-b border-slate-200">
      {/* --- CLEAN BACKGROUND LOGIC --- */}
      {/* Removing the heavy "AI" images and using a professional, subtle architectural grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#191e4e 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Soft, clean accent wash in the top corner (Not a neon glow) */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[#25a9e0]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-28 pb-10 sm:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Trust Elements */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left">
            {/* Subtle Alert Badge */}
            <span className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-secondary flex items-center gap-2 px-4 py-2 rounded-full ">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Melbourne&apos;s Gas Specialists
            </span>

            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl mb-6 text-[#191e4e] tracking-tight">
              Gas Heater Repair & <br className="hidden md:block" /> Service
              Melbourne
            </h1>

            <h2 className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg mb-10 font-medium">
              Melbourne weather is unpredictable; your safety shouldn’t be. We
              specialize in{" "}
              <strong className="text-slate-900 font-bold">
                24/7 emergency gas heater repairs
              </strong>{" "}
              and{" "}
              <strong className="text-slate-900 font-bold">
                carbon monoxide testing
              </strong>{" "}
              across all suburbs. Licensed, insured, and ready to restore your
              warmth today.
            </h2>

            {/* Direct Phone CTA - High Contrast for Light Mode */}
            <div className="flex flex-wrap items-center gap-6 mb-12 bg-white p-3 pr-8 rounded-full border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary transition-transform duration-300 group-hover:scale-105">
                <LuPhoneCall className="text-2xl text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                  Immediate Emergency Dispatch
                </span>
                <a
                  href="tel:0405133761"
                  onClick={() =>
                    sendGTMEvent({
                      event: "phone_call_click",
                      value: "hero_emergency",
                    })
                  }
                  className="text-3xl font-black text-[#191e4e] transition-colors duration-300 group-hover:text-[#25a9e0]"
                >
                  0405 133 761
                </a>
              </div>
            </div>

            {/* Crisp Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <FiZap />, text: "Same-Day Service" },
                { icon: <FiCheckCircle />, text: "Licensed Gas Fitters" },
                { icon: <FiShield />, text: "CO Safety Certified" },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-slate-700 shadow-sm"
                >
                  <div className="text-[#25a9e0] text-lg">{badge.icon}</div>
                  <span className="font-bold text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="col-span-1 lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden">
              {/* Subtle top border accent representing the brand */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#191e4e] to-[#25a9e0]" />

              <div className="mb-8 mt-2">
                <h3 className="text-2xl font-black text-[#191e4e] mb-2">
                  Request a Fast Callback
                </h3>
                <p className="text-slate-500 font-medium text-sm">
                  Our Melbourne technicians respond within 15 minutes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-xl focus:outline-none focus:border-[#25a9e0] focus:ring-1 focus:ring-[#25a9e0] transition-all font-medium placeholder:text-slate-400"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-xl focus:outline-none focus:border-[#25a9e0] focus:ring-1 focus:ring-[#25a9e0] transition-all font-medium placeholder:text-slate-400"
                    required
                  />
                  <input
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleChange}
                    placeholder="Suburb"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-xl focus:outline-none focus:border-[#25a9e0] focus:ring-1 focus:ring-[#25a9e0] transition-all font-medium placeholder:text-slate-400"
                    required
                  />
                </div>
                <select
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-xl focus:outline-none focus:border-[#25a9e0] focus:ring-1 focus:ring-[#25a9e0] transition-all font-medium appearance-none text-slate-500"
                  required
                >
                  <option value="" disabled>
                    Select Service...
                  </option>
                  <option value="Emergency Repair">Emergency Repair</option>
                  <option value="Heater Service">General Heater Service</option>
                  <option value="New Installation">New Installation</option>
                  <option value="CO2 Testing">Carbon Monoxide Testing</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-secondary text-white font-black text-lg py-4 rounded-xl mt-4 hover:bg-primary transition-colors duration-300 shadow-md"
                >
                  Get Help Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Service Cards */}
        <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "GAS HEATING INSTALLATION",
              link: "/services/gas-ducted-repair",
            },
            {
              title: "GAS HEATING SERVICE",
              link: "/services/gas-ducted-service",
            },
            {
              title: "GAS HEATING REPAIR",
              link: "/services/ducted-heater-repair",
            },
          ].map((card, idx) => (
            <Link
              key={idx}
              href={card.link}
              className="group bg-white border border-slate-200 text-[#191e4e] px-8 py-6 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#25a9e0] hover:shadow-[0_10px_30px_-10px_rgba(37,169,224,0.2)]"
            >
              <h3 className="text-base font-bold tracking-wide transition-colors group-hover:text-[#25a9e0]">
                {card.title}
              </h3>
              <BsArrowRightSquareFill className="text-2xl text-slate-300 group-hover:text-[#25a9e0] transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
