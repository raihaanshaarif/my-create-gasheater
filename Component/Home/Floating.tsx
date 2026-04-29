"use client";
import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { sendGTMEvent } from "@next/third-parties/google";

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10">
      <a
        href="tel:0405133761"
        onClick={() =>
          sendGTMEvent({
            event: "phone_call_click",
            value: "floating_emergency_button",
            type: "click_to_call",
          })
        }
        className="group flex items-center gap-3 rounded-full bg-secondary px-5 py-4 text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-slate-900 hover:shadow-2xl"
      >
        {/* Static Icon Container - Highlights slightly on hover */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 transition-colors duration-200 group-hover:bg-white/30">
          <LuPhoneCall className="text-xl text-white" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col pr-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
            24/7 Emergency
          </span>
          <span className="text-lg font-black leading-none tracking-tight">
            Call Now
          </span>
        </div>
      </a>
    </div>
  );
};

export default FloatingCallButton;
