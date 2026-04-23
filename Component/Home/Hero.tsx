"use client"; // Required if you are using onClick handlers in Next.js App Router
import React from "react";
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { sendGTMEvent } from "@next/third-parties/google";

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[100svh] overflow-hidden bg-slate-900 z-2 -mt-22">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/ducted-poster.jpg" // Highly recommended for Core Web Vitals (LCP)
      >
        <source src="/assets/ducted.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-slate-950/60" />{" "}
      {/* Darkened slightly to make text pop more */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-16 text-center text-white">
        {/* Eyebrow */}
        <span className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-secondary opacity-90">
          Gas Heater Specialists
        </span>

        {/* H1 */}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Keeping Melbourne Homes Warm All Winter
        </h1>

        {/* H2 with SEO Bolding */}
        <h2 className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
          Melbourne weather is unpredictable; your home&apos;s heating
          shouldn&apos;t be. From{" "}
          <strong>
            emergency repairs to annual servicing and installation
          </strong>
          , we deliver seamless, whole-home warmth the exact moment a Victorian
          cold front hits.
        </h2>

        {/* CTA Section */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a href="#services">
            <button className="px-10 py-2 border border-secondary rounded-4xl text-white font-bold transition duration-300 hover:border-transparent hover:text-gray-200 hover:bg-red-600">
              Call for Emergency Repair
            </button>
          </a>

          <p className="text-slate-300 font-medium">or</p>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <LuPhoneCall className="text-2xl text-secondary" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-slate-300">
                Call For Emergency Repair
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
                className="text-lg font-bold text-white transition-colors duration-300 hover:text-secondary"
              >
                0405 133 761
              </a>
            </div>
          </div>
        </div>

        {/* Service Cards (Fixed for Mobile & SEO) */}
        <div className="mt-16 w-full flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/services/gas-ducted-repair"
            className="group bg-white text-black px-6 py-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold group-hover:text-secondary transition-colors">
              GAS HEATING INSTALLATION
            </h3>
            <BsArrowRightSquareFill className="text-2xl text-secondary" />
          </Link>

          <Link
            href="/services/gas-ducted-service"
            className="group bg-white text-black px-6 py-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold group-hover:text-secondary transition-colors">
              GAS HEATING SERVICE
            </h3>
            <BsArrowRightSquareFill className="text-2xl text-secondary" />
          </Link>

          <Link
            href="/services/ducted-heater-repair"
            className="group bg-white text-black px-6 py-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold group-hover:text-secondary transition-colors">
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
