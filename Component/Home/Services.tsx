"use client";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import {
  LuWrench,
  LuFlame,
  LuThermometerSnowflake,
  LuShieldCheck,
  LuTriangle,
  LuDroplets,
} from "react-icons/lu";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
  const services = [
    {
      title: "Gas Ducted Heating Repair",
      description:
        "Fast, reliable repairs for all major ducted heating brands. We restore whole-house warmth quickly and safely.",
      link: "/services/gas-ducted-repair",
      image: "/assets/images/services/ducted-repair.jpg", // Ensure paths match your public folder
      icon: <LuWrench />,
    },
    {
      title: "Ducted Heating Installation",
      description:
        "Upgrade to a 6-star energy-efficient system. Expert installation tailored to your Melbourne home layout.",
      link: "/services/gas-ducted-installation",
      image: "/assets/images/services/installation.jpg",
      icon: <LuFlame />,
    },
    {
      title: "Gas Heater Servicing",
      description:
        "Ensure your system is running at peak performance with a comprehensive annual safety and performance check.",
      link: "/services/gas-heater-service",
      image: "/assets/images/services/servicing.jpg",
      icon: <LuThermometerSnowflake />,
    },
    {
      title: "Carbon Monoxide Testing",
      description:
        "Protect your family with medical-grade CO testing. We detect odorless leaks that standard alarms can miss.",
      link: "/services/carbon-monoxide-testing",
      image: "/assets/images/services/co-testing.jpg",
      icon: <LuShieldCheck />,
    },
    {
      title: "Gas Leak Detection",
      description:
        "Smell gas? We offer immediate emergency response to find and fix gas leaks, securing your property instantly.",
      link: "/services/gas-leak-detection",
      image: "/assets/images/services/gas-leak.jpg",
      icon: <LuTriangle />,
    },
    {
      title: "Hot Water Systems",
      description:
        "Continuous flow or storage hot water solutions. We repair and install all major brands across Melbourne.",
      link: "/services/hot-water-repair",
      image: "/assets/images/services/hot-water.jpg",
      icon: <LuDroplets />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm mb-3">
              <span className="h-px w-8 bg-secondary"></span>
              Expert Solutions
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Melbourne <span className="text-secondary">Services</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Professional gas heating and cooling services delivered by
              licensed experts. Safe, reliable, and guaranteed workmanship.
            </p>
          </div>

          <div className="shrink-0 hidden md:block">
            <Link
              href="/services"
              className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-secondary hover:border-secondary transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>

        {/* Services Swiper Grid */}
        <div className="w-full relative pb-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active bg-secondary",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="services-swiper pb-14!"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto">
                <Link
                  href={service.link}
                  className="group relative flex flex-col h-full bg-white rounded-4xl border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                >
                  {/* --- 1. Top Image Section with Zoom --- */}
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Dark gradient overlay for text readability on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Icon Box (Overlapping image and text) */}
                    <div className=" absolute -bottom-6 left-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary text-2xl shadow-xl z-30 transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:scale-110 group-hover:-rotate-6">
                      {service.icon}
                    </div>
                  </div>

                  {/* --- 2. Content Section --- */}
                  <div className="flex flex-col grow p-8 pt-12 z-33">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors duration-300 pr-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 grow">
                      {service.description}
                    </p>

                    {/* --- 3. Footer Link --- */}
                    <div className="mt-auto border-t border-slate-100 pt-6 flex items-center justify-between text-sm font-bold text-slate-900 group-hover:text-secondary transition-colors duration-300">
                      <span>Service Details</span>

                      <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-500 group-hover:translate-x-1">
                        <BsArrowRight className="text-lg" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile View All */}
        <div className="mt-4 text-center md:hidden">
          <Link
            href="/services"
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary transition-colors duration-300 shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .services-swiper .swiper-pagination-bullet {
          background-color: #cbd5e1;
          opacity: 1;
        }
        .services-swiper .swiper-pagination-bullet-active {
          background-color: #0f172a;
          width: 28px;
          border-radius: 9999px;
        }
      `,
        }}
      />
    </section>
  );
};

export default Services;
