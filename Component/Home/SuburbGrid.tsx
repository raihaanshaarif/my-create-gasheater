import React from "react";
import Link from "next/link";
import { HiOutlineMapPin } from "react-icons/hi2";

const SuburbGrid = () => {
  const regions = [
    {
      name: "South East Melbourne",
      suburbs: [
        "Berwick",
        "Clayton",
        "Dandenong",
        "Frankston",
        "Pakenham",
        "Narree Warren",
      ],
    },
    {
      name: "Eastern Suburbs",
      suburbs: [
        "Box Hill",
        "Glen Waverley",
        "Ringwood",
        "Burwood",
        "Doncaster",
        "Mulgrave",
      ],
    },
    {
      name: "Inner City & Bayside",
      suburbs: [
        "St Kilda",
        "Brighton",
        "Richmond",
        "Port Melbourne",
        "South Yarra",
        "Bentleigh",
      ],
    },
  ];

  return (
    <section className="bg-slate-100 py-20 px-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
              <HiOutlineMapPin className="text-lg" /> Local Experts
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Heating Repairs <span className="text-secondary">&</span> Service
            Areas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide fast, same-day gas heating services across all Melbourne
            suburbs. Select your area to book a local technician.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200">
                {region.name}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {region.suburbs.map((suburb) => (
                  <Link
                    key={suburb}
                    href={`/service-areas/gas-heater-repair-${suburb.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-600 hover:text-secondary hover:translate-x-1 transition-all flex items-center gap-1 text-sm font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mr-1" />
                    {suburb}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SEO Catch-all Footer */}
        <div className="mt-12 p-6 bg-secondary rounded-2xl text-center">
          <p className="text-slate-300 font-medium">
            Don&apos;t see your suburb? We cover the **entire Greater Melbourne
            area**.
            <Link
              href="tel:0405133761"
              className="text-white underline ml-2 hover:text-primary transition-colors"
            >
              Call us to check availability.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuburbGrid;
