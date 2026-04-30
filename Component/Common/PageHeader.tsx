"use client";
import React from "react";
import Link from "next/link";
import { HiHome, HiChevronRight } from "react-icons/hi2";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

const PageHeader = ({ title, subtitle, breadcrumbs }: PageHeaderProps) => {
  return (
    <section className="relative bg-slate-50  pt-12 pb-10 overflow-hidden py-16 ">
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-secondary to-secondary/70" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Breadcrumbs - Using Hi2 icons for maximum reliability */}
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-8 font-medium">
            <Link
              href="/"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <HiHome className="text-lg" />
              <span>Home</span>
            </Link>

            {breadcrumbs?.map((crumb: Breadcrumb, index: number) => (
              <React.Fragment key={index}>
                <HiChevronRight className="text-white/50 text-xs" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="text-xl md:text-3xl font-black text-white mb-6 leading-tight tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-md text-white/80 max-w-6xl leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
