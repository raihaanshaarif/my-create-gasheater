import Image from "next/image";
import React from "react";

const logos = [
  "actronAir.png",
  "bonaire.png",
  "braemar.png",
  "brivis.png",
  "carrier.png",
  "fujitsu.png",
  "haier.png",
  "hitachi.png",
  "kaden.png",
  "lg.png",
  "mitsubishi.png",
  "panasonic.png",
  "rinnai.png",
  "samsung.png",
  "toshiba.png",
  "vulcan.png",
];

const Brands = () => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Trusted Brands We Service
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-[100px] w-[200px] items-center justify-center border border-secondary rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={`/assets/images/brands/${logo}`}
                width={200}
                height={100}
                alt={`${logo.replace(/\.[^.]+$/, "")} brand logo`}
                className="max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
