import React from "react";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { MdOutlineSecurity } from "react-icons/md";
import { IoDocumentsOutline } from "react-icons/io5";

const SafetyAndCompliance = () => {
  return (
    <section className="bg-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              Safety First
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Comprehensive{" "}
              <span className="text-red-600">Carbon Monoxide</span> Testing &
              Gas Safety Checks
            </h2>

            <p className="text-lg text-slate-600">
              In Victoria, Energy Safe Victoria recommends gas heaters be
              serviced and safety-checked <strong>every two years</strong>. Our
              licensed gas fitters don&apos;t just repair units; we ensure your
              family is protected from the silent danger of CO leaks.
            </p>

            <ul className="space-y-4">
              {[
                "Licensed Gas Fitters ",
                "Negative Pressure Testing & Spillage Checks",
                "Compliant with AS4575 Gas Servicing Standards",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-800 font-medium"
                >
                  <HiOutlineShieldCheck className="text-2xl text-secondary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="tel:0405133761"
                className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-all"
              >
                Book a Safety Check
              </a>
            </div>
          </div>

          {/* Right: Visual Trust Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <MdOutlineSecurity className="text-4xl text-secondary mb-4" />
              <h3 className="text-xl text-secondary font-bold mb-2">
                Negative Pressure
              </h3>
              <p className="text-slate-600 text-sm">
                We test for air extraction issues that cause carbon monoxide to
                be drawn back into your home.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <IoDocumentsOutline className="text-4xl text-secondary mb-4" />
              <h3 className="text-xl text-secondary  font-bold mb-2">
                Compliance Certificate
              </h3>
              <p className="text-slate-600 text-sm">
                Receive a formal safety report after every service for your
                insurance and peace of mind.
              </p>
            </div>

            <div className="md:col-span-2 bg-slate-900 p-8 rounded-2xl text-white flex items-center justify-between">
              <div>
                <p className="text-secondary font-bold uppercase text-xs tracking-widest mb-1">
                  Emergency Warning
                </p>
                <h4 className="text-lg font-bold italic">
                  Smell Gas? Turn off the main valve and call us immediately.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyAndCompliance;
