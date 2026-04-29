"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/Component/Common/PageHeader";
import { BsArrowRight } from "react-icons/bs";
import {
  LuWrench,
  LuFlame,
  LuThermometerSnowflake,
  LuRefreshCw,
  LuShieldCheck,
  LuTriangle,
  LuWaves,
  LuZap,
} from "react-icons/lu";

const HeatingServices = () => {
  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Heating" },
  ];

  const heatingServices = [
    {
      title: "Gas Ducted Heating Repair",
      description:
        "Fast diagnosis and repair for all major ducted brands. We restore whole-home comfort efficiently.",
      link: "/services/gas-ducted-repair",
      image: "/assets/images/services/ducted-repair.jpg",
      icon: <LuWrench />,
    },
    {
      title: "Gas Ducted Heating Service",
      description:
        "Comprehensive annual maintenance to prevent breakdowns and ensure your system runs at peak efficiency.",
      link: "/services/gas-ducted-service",
      image: "/assets/images/services/servicing.jpg",
      icon: <LuThermometerSnowflake />,
    },
    {
      title: "Ducted Heating Installation",
      description:
        "Energy-efficient 5 & 6-star systems tailored to your home. Expert design and professional installation.",
      link: "/services/ducted-installation",
      image: "/assets/images/services/installation.jpg",
      icon: <LuFlame />,
    },

    {
      title: "Gas Heater Repair & Service",
      description:
        "Repairing wall furnaces, space heaters, and gas fires. Safety checks and performance optimization for all units.",
      link: "/services/gas-heater-repair",
      image: "/assets/images/services/ducted-repair.jpg",
      icon: <LuZap />,
    },
    {
      title: "Gas Heater Replacement",
      description:
        "Old heater unsafe or inefficient? We provide seamless replacements with modern, cost-saving alternatives.",
      link: "/services/gas-heater-replacement",
      image: "/assets/images/services/ducted-repair.jpg",
      icon: <LuRefreshCw />,
    },
    {
      title: "Carbon Monoxide Testing",
      description:
        "The 'Silent Killer' is undetectable without professional gear. We provide medical-grade CO testing for your safety.",
      link: "/services/carbon-monoxide-testing",
      image: "/assets/images/services/co-testing.jpg",
      icon: <LuShieldCheck />,
    },
    {
      title: "Gas Leak Detection",
      description:
        "24/7 Emergency response for gas smells or pressure drops. We find and fix leaks to secure your property.",
      link: "/services/gas-leak-detection",
      image: "/assets/images/services/gas-leak.jpg",
      icon: <LuTriangle />,
    },
  ];

  return (
    <main className="bg-slate-50">
      <PageHeader
        title="Our Heating Services in Melbourne"
        subtitle="From emergency midnight repairs to 6-star system installations, our licensed technicians keep Melbourne families warm and safe all winter long."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Section Heading Logic */}
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">
              <span className="h-px w-8 bg-secondary"></span>
              Expert Solutions
              <span className="h-px w-8 bg-secondary"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Total Warmth & <span className="text-secondary">Safety</span>{" "}
              Solutions
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl">
              We specialize in the full lifecycle of Melbourne heating systems.
              Select a service below to learn more about our process and
              pricing.
            </p>
          </div>

          {/* Fixed Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {heatingServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative flex flex-col h-full bg-white rounded-4xl border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                {/* 1. Image Section */}
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Overlapping Icon Box */}
                  <div className="absolute -bottom-6 left-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary text-2xl shadow-xl z-20 transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:scale-110 group-hover:-rotate-6">
                    {service.icon}
                  </div>
                </div>

                {/* 2. Content Section */}
                <div className="flex flex-col grow p-8 pt-12">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 grow">
                    {service.description}
                  </p>

                  {/* 3. Footer Link */}
                  <div className="mt-auto border-t border-slate-100 pt-6 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-secondary transition-colors duration-300">
                    <span className="uppercase tracking-widest">
                      Full Details
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-500 group-hover:translate-x-1">
                      <BsArrowRight className="text-base" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Trust Banner / CTA */}
          <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-20 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
                  Have a Heating{" "}
                  <span className="text-secondary">Emergency?</span>
                </h3>
                <p className="text-slate-400 text-lg">
                  Our emergency dispatch team is available 24/7. Don&apos;t
                  spend the night in the cold—we can have a licensed technician
                  at your door within hours.
                </p>
              </div>

              <a
                href="tel:0405133761"
                className="flex flex-col items-center md:items-end group"
              >
                <span className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">
                  Emergency Dispatch
                </span>
                <span className="text-3xl md:text-5xl font-black text-white transition-colors group-hover:text-secondary">
                  0405 133 761
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeatingServices;
