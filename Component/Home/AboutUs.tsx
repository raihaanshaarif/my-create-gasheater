"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { LuCircleCheck, LuUsers, LuMapPin, LuPhoneCall } from "react-icons/lu";

export const AboutUs = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-slate-200">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side with Depth Elements */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-secondary/10">
              <Image
                src="/assets/images/about/gasductedins.avif"
                alt="Licensed Melbourne HVAC technicians performing safety checks"
                width={600}
                height={500}
                className="object-cover w-full h-[450px] lg:h-[580px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-0 bg-secondary p-6 rounded-3xl shadow-xl text-white max-w-[190px] animate-float">
              <p className="text-4xl font-black mb-1">15+</p>
              <p className="text-xs font-bold uppercase tracking-widest leading-tight">
                Years of Excellence In Melbourne
              </p>
            </div>
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">
              <span className="h-px w-8 bg-secondary"></span>
              Our Reputation
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Expert Gas Heating <br />
              <span className="text-secondary">Technicians</span> in Melbourne
            </h2>

            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl">
              We are dedicated to providing top-notch gas heating services
              across Melbourne. With a focus on safety and efficiency, our
              licensed team ensures your home stays comfortable during even the
              harshest winters.
            </p>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mb-12">
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-secondary text-2xl transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-110">
                  <LuMapPin />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    Melbourne Wide
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Serving every suburb with local, fast response times.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-secondary text-2xl transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-110">
                  <LuPhoneCall />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    24/7 Support
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Emergency repairs available when you need them most.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Checklist - Cleaned for Aesthetic Logic */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-12 w-full py-8 border-y border-slate-100 mb-12">
              {[
                "Certified Technicians",
                "100% Satisfaction",
                "Affordable Cost",
                "Clean & Professional",
              ].map((text, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <LuCircleCheck className="text-secondary text-xl" />
                  <span className="text-sm font-bold text-slate-700">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="#services"
              className="group flex items-center gap-4 pl-8 pr-3 py-3 bg-slate-900 rounded-full text-white font-bold transition-all duration-300 hover:bg-secondary hover:shadow-xl hover:shadow-secondary/20"
              onClick={() => sendGTMEvent({ event: "about_read_more_click" })}
            >
              Learn More About Us
              <BsArrowRightCircleFill className="text-3xl text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `,
        }}
      />
    </section>
  );
};
