import React from "react";
import {
  FaPhoneAlt,
  FaTruck,
  FaFileInvoiceDollar,
  FaRegCheckCircle,
} from "react-icons/fa";

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Call or Book Online",
      description:
        "Reach out 24/7. Our friendly dispatchers will listen to your issue and schedule a time that works perfectly for you.",
      icon: <FaPhoneAlt className="text-xl" />,
    },
    {
      id: "02",
      title: "Fast, On-Time Arrival",
      description:
        "Our fully-stocked vans arrive promptly. We&apos;ll even send you a text message when your technician is on the way.",
      icon: <FaTruck className="text-xl" />,
    },
    {
      id: "03",
      title: "Upfront Pricing",
      description:
        "We diagnose the issue and provide a flat-rate, transparent quote before any work begins. No hidden fees, ever.",
      icon: <FaFileInvoiceDollar className="text-xl" />,
    },
    {
      id: "04",
      title: "Problem Solved",
      description:
        "We fix it right the first time, clean up our workspace, and back our work with a rock-solid workmanship guarantee.",
      icon: <FaRegCheckCircle className="text-xl" />,
    },
  ];

  return (
    <section className="bg-slate-100 py-20 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm mb-3">
            <span className="h-px w-8 bg-secondary"></span>
            Simple & Stress-Free
            <span className="h-px w-8 bg-secondary"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            How Our Process <span className="text-secondary">Works</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We know dealing with heating and cooling issues is stressful.
            We&apos;ve designed our entire process to be as fast, transparent,
            and easy for you as possible.
          </p>
        </div>

        {/* Clean Process Grid */}
        <div className="relative">
          {/* Subtle Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-slate-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Large Watermark Number */}
                <div className="absolute top-4 right-6 text-5xl font-black text-slate-300 transition-colors duration-300 group-hover:text-secondary pointer-events-none z-0">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-secondary mb-6 relative z-10 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Call to Action */}
        <div className="mt-16 flex justify-center">
          <div className="bg-slate-50 rounded-2xl p-6 sm:px-10 flex flex-col sm:flex-row items-center gap-6 border border-slate-100">
            <div className="text-center sm:text-left">
              <p className="font-bold text-slate-900 text-lg">
                Ready to get started?
              </p>
              <p className="text-slate-500 text-sm">
                Our technicians are on standby across Melbourne.
              </p>
            </div>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary transition-all shadow-md whitespace-nowrap">
              Book Service Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
