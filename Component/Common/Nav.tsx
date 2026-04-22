"use client";
import React, { useState } from "react";
import logo from "@/public/assets/images/home/f-logo.png";
import Image from "next/image";
import { LuPhoneCall, LuArrowDown } from "react-icons/lu";

const Nav = () => {
  // mobile menu open state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Each item may have a submenu array.
  // Only items with submenu will show the arrow icon.
  const navItems = [
    { label: "Cooling", submenu: ["example1", "example2"] },
    { label: "Heating" },
    { label: "Hot Water" },
    { label: "Install" },
    { label: "Commercial" },
    { label: "Brands" },
  ];

  return (
    <div className="max-w-full mx-10">
      <div className="flex justify-between max-h-32 items-center">
        {/* logo area */}
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        {/* https://melbourneheatingandcooling.com.au/ */}
        {/* desktop navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-lg">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="group relative flex items-center gap-2 hover:text-secondary"
              >
                <span>{item.label}</span>

                {/* show arrow only when submenu exists */}
                {item.submenu && (
                  <>
                    <LuArrowDown className="inline-block h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />

                    {/* submenu list: hidden until hover */}
                    <ul className="absolute left-0 top-full mt-2 hidden min-w-[160px] flex-col rounded-lg border border-slate-200 bg-white p-2 shadow-lg group-hover:flex">
                      {item.submenu.map((subItem) => (
                        <li
                          key={subItem}
                          className="rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-secondary"
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
            <button className="px-10 py-2 bg-secondary rounded-4xl text-white hover:text-gray-200 transition-colors duration-300">
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
