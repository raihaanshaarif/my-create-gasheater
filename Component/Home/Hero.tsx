"use client"; // Required for motion/react and click handlers
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
    // Add your API submission logic here
  };

  return (
    <section className="relative mt-4 min-h-[90svh] overflow-hidden bg-slate-900 z-2 sm:-mt-22 pb-16">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/ducted-poster.jpg"
      >
        <source src="/assets/ducted.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-slate-950/70" />{" "}
      {/* Darkened slightly for better form contrast */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-24 pb-10 sm:pt-32">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Trust Elements */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left text-white">
            <span className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-secondary opacity-90 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Gas Heater Specialists
            </span>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-6">
              Gas Heater Repair & Service Melbourne
            </h1>

            <h2 className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg mb-8">
              Melbourne weather is unpredictable; your safety shouldn’t be. We
              specialize in{" "}
              <strong className="text-white">
                24/7 emergency gas heater repairs and carbon monoxide
                testing{" "}
              </strong>
              across Melbourne. Licensed, insured, and ready to restore your
              warmth today.
            </h2>

            {/* Direct Phone CTA */}
            <div className="flex flex-wrap items-center gap-6 mb-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <LuPhoneCall className="text-2xl text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-slate-300">
                  Immediate Emergency Dispatch
                </span>
                <a
                  href="tel:0405133761"
                  onClick={() =>
                    sendGTMEvent({
                      event: "phone_call_click",
                      value: "hero_emergency",
                      type: "click_to_call",
                    })
                  }
                  className="text-2xl font-black text-white transition-colors duration-300 hover:text-secondary"
                >
                  0405 133 761
                </a>
              </div>
            </div>

            {/* Animated Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <FiZap />, text: "Same-Day Service" },
                { icon: <FiCheckCircle />, text: "Licensed Gas Fitters" },
                { icon: <FiShield />, text: "CO2 Safety Certified" },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-slate-900/60 border border-slate-700 px-4 py-2 rounded-xl text-white shadow-lg backdrop-blur-sm"
                >
                  <div className="text-secondary text-lg">{badge.icon}</div>
                  <span className="font-semibold text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="col-span-1 lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Request a Fast Callback
                </h3>
                <p className="text-slate-600 text-sm">
                  Our Melbourne technicians respond within 15 minutes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    required
                  />
                  <input
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleChange}
                    placeholder="Suburb"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    required
                  />
                </div>

                <div>
                  <select
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    required
                  >
                    <option value="" disabled>
                      Select Service...
                    </option>
                    <option value="Emergency Repair">Emergency Repair</option>
                    <option value="Heater Service">
                      General Heater Service
                    </option>
                    <option value="New Installation">New Installation</option>
                    <option value="CO2 Testing">Carbon Monoxide Testing</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-white font-bold text-lg py-4 rounded-xl mt-2 hover:bg-slate-900 transition-colors duration-300 shadow-lg"
                >
                  Get Help Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Service Cards (Moved to the bottom of the Hero) */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/services/gas-ducted-repair"
            className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-900 hover:shadow-xl"
          >
            <h3 className="text-lg font-bold group-hover:text-secondary transition-colors">
              GAS HEATING INSTALLATION
            </h3>
            <BsArrowRightSquareFill className="text-2xl text-secondary" />
          </Link>

          <Link
            href="/services/gas-ducted-service"
            className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-900 hover:shadow-xl"
          >
            <h3 className="text-lg font-bold group-hover:text-secondary transition-colors">
              GAS HEATING SERVICE
            </h3>
            <BsArrowRightSquareFill className="text-2xl text-secondary" />
          </Link>

          <Link
            href="/services/ducted-heater-repair"
            className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-900 hover:shadow-xl"
          >
            <h3 className="text-lg font-bold group-hover:text-secondary transition-colors">
              GAS HEATING REPAIR
            </h3>
            <BsArrowRightSquareFill className="text-2xl text-secondary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
