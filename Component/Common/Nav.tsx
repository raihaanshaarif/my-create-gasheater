"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { LuPhoneCall, LuArrowDown } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "@/public/assets/images/home/f-logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);
  const hoverTimeout = useRef<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = window.setTimeout(() => {
      setActiveIndex(null);
      hoverTimeout.current = null;
    }, 150);
  };

  const toggleMobileSubmenu = (index: number) => {
    setMobileOpenIndex(mobileOpenIndex === index ? null : index);
  };

  const navItems = [
    {
      label: "Heating Services", // Added "Services" to the parent label for broader keyword capture
      href: "/services",
      submenu: [
        // EMERGENCY INTENT (High conversion, instant leads)
        {
          name: "Gas Leak Detection (24/7)",
          path: "/services/gas-leak-detection",
        },
        {
          name: "Carbon Monoxide Testing",
          path: "/services/carbon-monoxide-testing",
        },

        // REPAIR INTENT (High search volume keywords)
        {
          name: "Ducted Heating Repairs",
          path: "/services/gas-ducted-heating-repair",
        },
        {
          name: "Wall Furnace & Heater Repair",
          path: "/services/gas-heater-repair",
        }, // Broadened to capture "furnace" searches

        // INSTALL & SERVICE INTENT (High ticket value)
        {
          name: "Annual Heater Servicing",
          path: "/services/gas-ducted-heating-service",
        },
        {
          name: "New Ducted Installations",
          path: "/services/ducted-heating-installation",
        },
        {
          name: "Heater Replacements",
          path: "/services/gas-heater-replacement",
        },
      ],
    },
    {
      label: "Hot Water",
      href: "/hot-water",
      submenu: [
        { name: "Hot Water Repairs", path: "/services/hot-water-repair" },
        {
          name: "New Hot Water Systems",
          path: "/services/hot-water-installation",
        }, // Better keyword than "System Replacements"
        {
          name: "Heat Pump Installations",
          path: "/services/heat-pump-installation",
        },
        {
          name: "Water Leak Detection",
          path: "/services/water-leak-detection",
        },
      ],
    },
    {
      label: "Commercial HVAC", // Added "HVAC" - high volume commercial search term
      href: "/commercial",
      submenu: [
        {
          name: "Commercial Heating Repair",
          path: "/services/commercial-heating-repair",
        },
        {
          name: "Routine Maintenance Contracts",
          path: "/services/commercial-maintenance",
        },
      ],
    },
    {
      label: "Brands",
      href: "/brands",
      submenu: [
        { name: "All Brands", path: "/brands" },
        { name: "Bonaire Repairs", path: "/brands/bonaire" }, // Added "Repairs" to top brands for exact-match intent
        { name: "Braemar Repairs", path: "/brands/braemar" },
        { name: "Brivis Repairs", path: "/brands/brivis" },
        { name: "Breezair", path: "/brands/breezair" },
        { name: "Cambro", path: "/brands/cambro" },
        { name: "Carrier", path: "/brands/carrier" },
        { name: "Celair", path: "/brands/celair" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      submenu: [
        { name: "Service Areas", path: "/service-areas" }, // Added "Repairs" to top brands for exact-match intent
        { name: "Error Codes", path: "/error-codes" },
        { name: "Blogs", path: "/blogs" },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    // FIX: Changed 'absolute' to 'sticky bg-slate-950' so it pushes the Hero down and stays on screen
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-slate-950 border-b border-white/10 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {" "}
          {/* Increased h-20 to h-24 for breathing room */}
          {/* Logo */}
          <Link href="/" className="min-w-0 shrink-0 z-50">
            <Image
              src={logo}
              alt="Melbourne HVAC Logo"
              className="h-12 w-auto object-contain sm:h-14 lg:h-16"
              priority
            />
          </Link>
          {/* Desktop navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-4 text-white font-medium">
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  className="group relative flex items-center py-8 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 transition-colors hover:text-secondary"
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <LuArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-180 text-white/70 group-hover:text-secondary" />
                    )}
                  </Link>

                  {/* Smooth Desktop Dropdown */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 top-full -mt-2 w-[280px] rounded-2xl border border-slate-100 bg-white p-3 shadow-xl z-50"
                        >
                          <ul className="flex flex-col gap-1">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.path}
                                  className="block rounded-xl px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-secondary font-medium"
                                  onClick={() => setActiveIndex(null)}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Desktop CTA button */}
          <div className="hidden lg:block shrink-0">
            <a
              href="tel:0405133761"
              className="group flex items-center px-8 py-3 bg-secondary rounded-full text-white font-bold transition-all duration-300 hover:bg-white hover:text-slate-900 shadow-lg hover:shadow-xl"
            >
              <LuPhoneCall className="mr-2 text-xl group-hover:animate-pulse" />
              <span>Call 0405 133 761</span>
            </a>
          </div>
          {/* Mobile: Phone + Menu Toggle */}
          <div className="flex shrink-0 items-center gap-3 lg:hidden z-50">
            <a
              href="tel:0405133761"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-white shadow-lg"
              aria-label="Call Emergency Repair"
            >
              <LuPhoneCall className="text-xl" />
            </a>
            <button
              className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <span className="text-sm font-semibold">
                {isMenuOpen ? "Close" : "Menu"}
              </span>
              {isMenuOpen ? (
                <HiX className="text-xl" />
              ) : (
                <HiMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 lg:hidden rounded-3xl bg-white border border-slate-100 shadow-2xl overflow-hidden z-40"
          >
            <div className="max-h-[75vh] overflow-y-auto overscroll-contain pb-6">
              <ul className="flex flex-col divide-y divide-slate-100 px-6 pt-2">
                {navItems.map((item, index) => (
                  <li key={item.label} className="py-2">
                    {item.submenu ? (
                      <button
                        className="w-full flex items-center justify-between py-4 text-lg font-bold text-slate-900 focus:outline-none"
                        onClick={() => toggleMobileSubmenu(index)}
                      >
                        <span>{item.label}</span>
                        <LuArrowDown
                          className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                            mobileOpenIndex === index
                              ? "-rotate-180 text-secondary"
                              : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="w-full flex items-center justify-between py-4 text-lg font-bold text-slate-900"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Smooth Mobile Accordion */}
                    <AnimatePresence>
                      {item.submenu && mobileOpenIndex === index && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden flex flex-col gap-1 pb-4"
                        >
                          {item.submenu.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block rounded-xl px-4 py-3 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-secondary font-medium"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
