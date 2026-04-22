"use client";
import React, { useState, useRef } from "react";
import logo from "@/public/assets/images/home/f-logo.png";
import Image from "next/image";
import { LuPhoneCall, LuArrowDown } from "react-icons/lu";

const Nav = () => {
  // mobile menu open state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
    }, 120);
  };

  // Each item may have a submenu array.
  // Only items with submenu will show the arrow icon.
  const navItems = [
    {
      label: "Heating",
      submenu: [
        "Carbon Monoxide (CO) Testing",
        "Ducted Heater Replacement",
        "Ducted Heating Repair",
        "Gas Ducted Heating Repair",
        "Gas Ducted Heating Replacement",
        "Gas Ducted Heating Service",
        "Gas Ducted Heating Maintenance",
        "Gas Ducted Heating Troubleshooting",
        "Gas Ducted Heating Inspection",
        "Gas Ducted Heating Tune-Up",
        "Gas Ducted Heating Upgrade",
        "Gas Ducted Heating Consultation",
      ],
    },

    {
      label: "Hot Water",
      submenu: [
        "Hot Water Repairs",
        "Hot Water Replacement",
        "Hot Water Service",
      ],
    },
    {
      label: "Install",
      submenu: [
        "Ducted Heating Installation",
        "Gas Ducted Heating Installation",
        "Hot Water Installation",
        "Rheem Heat Pump Installation",
      ],
    },
    { label: "Commercial", submenu: ["Commercial Heating Repair Melbourne"] },
    {
      label: "Brands",
      submenu: [
        "All Brands",
        "Bonaire",
        "Braemar",
        "Breamar Wall Furnace",
        "Breezair",
        "Brivis",
        "Cambro",
        "Carrier",
        "Celair",
      ],
    },
  ];

  return (
    <div className="max-w-full  mx-40 z-3">
      <div className="flex justify-between max-h-32 items-center">
        {/* logo area */}
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        {/* https://melbourneheatingandcooling.com.au/ */}
        {/* desktop navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-lg">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                className="group relative flex items-center gap-2 hover:text-secondary"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <span>{item.label}</span>

                {/* show arrow only when submenu exists */}
                {item.submenu && (
                  <>
                    <LuArrowDown className="inline-block h-4 w-4 transition-transform duration-300 group-hover:-rotate-180" />

                    {/* submenu list stays open while hovered and closes with a small delay */}
                    <ul
                      className={`absolute left-0 top-full mt-2 min-w-[300px] flex-col rounded-lg border border-slate-200 bg-white p-2 shadow-lg transition duration-150 ${activeIndex === index ? "flex" : "hidden"}`}
                    >
                      {item.submenu.map((subItem) => (
                        <li
                          key={subItem}
                          className="rounded px-3 py-2 text-sm text-black hover:bg-secondary hover:text-white"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* desktop button */}
        <div className="hidden lg:block">
          <a href="">
            <button className="px-10 py-2 border border-secondary rounded-4xl text-white font-bold transition duration-300 hover:border-transparent hover:text-gray-200 hover:bg-red-600">
              <LuPhoneCall className="inline-block mr-2" />
              Request a Service Callout
            </button>
          </a>
        </div>

        {/* mobile menu button */}
        <button
          className="lg:hidden px-4 py-2 border rounded-lg border-slate-200 text-sm font-semibold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* mobile navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <ul className="flex flex-col gap-4 p-4 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.label} className="space-y-2">
                <div className="cursor-pointer py-2 text-primary hover:text-secondary transition">
                  {item.label}
                </div>

                {/* show mobile submenu items if they exist */}
                {item.submenu && (
                  <ul className="ml-4 flex flex-col gap-2 text-base text-slate-600">
                    {item.submenu.map((subItem) => (
                      <li
                        key={subItem}
                        className="rounded px-3 py-2 hover:bg-slate-100 hover:text-secondary"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
