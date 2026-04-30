"use client";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
// Swiper React components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  const reviews = [
    {
      name: "Sarah M.",
      suburb: "Richmond",
      text: "Our ducted heater died right in the middle of a freezing winter night. The team arrived incredibly fast, diagnosed the issue on the spot, and had us warm again in no time. Absolute lifesavers!",
      service: "Emergency Repair",
    },
    {
      name: "James T.",
      suburb: "St Kilda",
      text: "I smelled gas near our main unit and panicked. I called them for an emergency gas repair, and they were at my door within the hour. Professional, reassuring, and made everything safe immediately.",
      service: "Gas Leak Repair",
    },
    {
      name: "Emma L.",
      suburb: "Brunswick",
      text: "Upgraded our old system to a modern split system air conditioner. The technicians were polite, left no mess behind, and walked me through exactly how to run it efficiently. Highly recommend this local crew.",
      service: "New Installation",
    },
    {
      name: "Liam K.",
      suburb: "Frankston",
      text: "Our ducted heating was blowing cold air. The tech found the fault quickly, had the exact replacement part in his van, and fixed it on the spot. Excellent, transparent service from start to finish.",
      service: "Heater Repair",
    },
    {
      name: "Olivia R.",
      suburb: "Camberwell",
      text: "We get our system serviced annually by these guys. They are always on time, incredibly polite, and they leave the house spotless. True professionals who respect your home.",
      service: "Annual Maintenance",
    },
    {
      name: "Noah W.",
      suburb: "Preston",
      text: "Booked them for a carbon monoxide test for peace of mind before winter. Very thorough inspection, and the technician explained everything clearly. Highly recommended for safety checks.",
      service: "CO Testing",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 px-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm mb-3">
              <span className="h-px w-8 bg-secondary"></span>
              Real Customer Stories
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Trusted by Families Across{" "}
              <span className="text-secondary">Melbourne</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Don&apos;t just take our word for it. See what your neighbors have
              to say about our fast, reliable service.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} className="text-yellow-400 text-2xl" />
              ))}
            </div>
            <p className="text-slate-600 font-medium flex items-center gap-2">
              4.9/5 Rating on <FaGoogle className="text-blue-500" /> Google
            </p>
          </div>
        </div>

        {/* Swiper Carousel Container */}
        <div className="pb-12">
          {" "}
          {/* Added padding bottom for pagination dots */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active bg-secondary",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full pb-14!" // Push dots down slightly so they don't overlap cards
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full mx-1 my-2">
                  {" "}
                  {/* Added slight margin so shadow isn't clipped by Swiper overflow */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6 grow">
                    {review.text}
                  </p>
                  <div className="mt-auto border-t border-slate-100 pt-6">
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-slate-500">
                        {review.suburb}, VIC
                      </span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-bold uppercase tracking-tighter">
                        {review.service}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="mt-8 text-center">
          <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-secondary/20">
            View All 150+ Reviews
          </button>
        </div> */}
      </div>

      {/* Optional Custom CSS for Pagination Dots to match your theme (add to your globals.css if needed) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-pagination-bullet {
          background-color: #cbd5e1; /* Tailwind slate-300 */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #0f172a; /* Tailwind slate-900 - change to var(--secondary) if you have one */
          width: 24px;
          border-radius: 9999px;
        }
      `,
        }}
      />
    </section>
  );
};

export default Testimonial;
