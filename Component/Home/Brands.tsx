"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { file: "actronAir.png", name: "ActronAir" },
  { file: "bonaire.png", name: "Bonaire" },
  { file: "braemar.png", name: "Braemar" },
  { file: "brivis.png", name: "Brivis" },
  { file: "carrier.png", name: "Carrier" },
  { file: "fujitsu.png", name: "Fujitsu" },
  { file: "haier.png", name: "Haier" },
  { file: "hitachi.png", name: "Hitachi" },
  { file: "kaden.png", name: "Kaden" },
  { file: "lg.png", name: "LG" },
  { file: "mitsubishi.png", name: "Mitsubishi" },
  { file: "panasonic.png", name: "Panasonic" },
  { file: "rinnai.png", name: "Rinnai" },
  { file: "samsung.png", name: "Samsung" },
  { file: "toshiba.png", name: "Toshiba" },
  { file: "vulcan.png", name: "Vulcan" },
];

// Create a reversed array for the bottom row so they don't look identical stacked
const bottomRowLogos = [...logos].reverse();

const Brands = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm mb-3">
              <span className="h-px w-8 bg-secondary"></span>
              Premium Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Trusted Brands We <span className="text-secondary">Service</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm font-medium hidden md:block">
            Authorized repairs & installations for all major manufacturers.
          </p>
        </div>
      </div>

      {/* Ticker Container Wrapper */}
      <div className="w-full relative brand-ticker-wrapper flex flex-col gap-6">
        {/* Left/Right Fade Gradients covering both rows */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* --- Top Row: Scrolls Left --- */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          speed={4500}
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 40 },
            768: { slidesPerView: 4, spaceBetween: 50 },
            1024: { slidesPerView: 6, spaceBetween: 60 },
            1280: { slidesPerView: 7, spaceBetween: 80 },
          }}
          className="brand-swiper w-full"
        >
          {logos.map((brand, idx) => (
            <SwiperSlide key={`top-${idx}`}>
              <div className="group flex h-20 w-full items-center justify-center transition-all duration-300">
                <Image
                  src={`/assets/images/brands/${brand.file}`}
                  width={160}
                  height={80}
                  alt={`${brand.name} HVAC brand logo`}
                  className="max-h-full w-auto object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Bottom Row: Scrolls Right --- */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          speed={4500} // Keep speeds identical so the crossing effect is smooth
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true, // This is the magic property that flips the scroll
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 40 },
            768: { slidesPerView: 4, spaceBetween: 50 },
            1024: { slidesPerView: 6, spaceBetween: 60 },
            1280: { slidesPerView: 7, spaceBetween: 80 },
          }}
          className="brand-swiper w-full"
        >
          {bottomRowLogos.map((brand, idx) => (
            <SwiperSlide key={`bottom-${idx}`}>
              <div className="group flex h-20 w-full items-center justify-center transition-all duration-300">
                <Image
                  src={`/assets/images/brands/${brand.file}`}
                  width={160}
                  height={80}
                  alt={`${brand.name} HVAC brand logo`}
                  className="max-h-full w-auto object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global CSS for the linear ticker effect */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .brand-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `,
        }}
      />
    </section>
  );
};

export default Brands;
