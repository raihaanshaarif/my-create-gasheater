import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuPhoneCall,
  LuMail,
  LuMapPin,
  LuClock,
  LuShieldCheck,
  LuChevronRight,
} from "react-icons/lu";
import logo from "@/public/assets/images/home/f-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Gas Ducted Heating", path: "/services/gas-ducted-heating-repair" },
    { name: "Gas Heater Servicing", path: "/services/gas-heater-repair" },
    {
      name: "Carbon Monoxide Testing",
      path: "/services/carbon-monoxide-testing",
    },
    { name: "Hot Water Systems", path: "/services/hot-water-repair" },
    { name: "Evaporative Cooling", path: "/services/cooling" },
    { name: "Emergency Gas Leaks", path: "/services/gas-leak-detection" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Pricing", path: "/pricing" },
    { name: "Service Areas", path: "/service-areas" },
    { name: "Customer Reviews", path: "/reviews" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="relative text-slate-300 pt-20 pb-8 border-t border-slate-900">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-12 translate-x-20 pointer-events-none" />

      <div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Column 1: Brand & Contact Info (Spans 4 cols on desktop) */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src={logo}
                  alt="Melbourne HVAC Logo"
                  className="h-14 w-auto object-contain"
                  priority
                />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                Melbourne&apos;s trusted heating and cooling experts. We
                specialize in fast, reliable, and safe emergency repairs,
                servicing families across all Melbourne suburbs.
              </p>

              <div className="space-y-4 w-full">
                <div className="flex items-start gap-4">
                  <LuMapPin className="text-xl text-secondary shrink-0 mt-1" />
                  <span className="text-sm">
                    Melbourne, Victoria, Australia
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <LuMail className="text-xl text-secondary shrink-0" />
                  <a
                    href="mailto:info@yourdomain.com.au"
                    className="text-sm transition-colors hover:text-secondary"
                  >
                    info@yourdomain.com.au
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <LuClock className="text-xl text-secondary shrink-0" />
                  <span className="text-sm">24/7 Emergency Dispatch</span>
                </div>
              </div>
            </div>

            {/* Column 2: Services (Spans 3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                <span className="h-4 w-1 bg-secondary rounded-full"></span>
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      href={service.path}
                      className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      <LuChevronRight className="text-secondary/0 transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1" />
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links (Spans 2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                <span className="h-4 w-1 bg-secondary rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.path}
                      className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      <LuChevronRight className="text-secondary/0 transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1" />
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Emergency Callout Action (Spans 3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-500"></div>

                <h4 className="text-white font-bold text-lg mb-2 relative z-10">
                  Need Urgent Help?
                </h4>
                <p className="text-slate-400 text-sm mb-6 relative z-10">
                  Our fully licensed gas fitters are on standby 24 hours a day,
                  7 days a week.
                </p>

                <a
                  href="tel:0405133761"
                  className="flex items-center justify-center gap-3 w-full bg-secondary text-white py-4 px-4 rounded-xl font-bold transition-transform duration-300 hover:scale-105 shadow-lg shadow-secondary/25 relative z-10"
                >
                  <LuPhoneCall className="text-xl animate-pulse" />
                  0405 133 761
                </a>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-medium relative z-10">
                  <LuShieldCheck className="text-secondary text-base shrink-0" />
                  <span>Licensed & Customer Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              © {currentYear} Gas Heater Service Melbourne. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              {/* <span className="hidden md:inline">ABN: 12 345 678 901</span> */}
              <span className="hidden md:inline text-slate-800">|</span>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-800">|</span>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
