import { AboutUs } from "@/Component/Home/AboutUs";
import Brands from "@/Component/Home/Brands";
import FAQ from "@/Component/Home/Faq";
import FloatingCallButton from "@/Component/Home/Floating";

import Hero from "@/Component/Home/Hero";
import Process from "@/Component/Home/Process";
import SafetyAndCompliance from "@/Component/Home/SafetyAndCompliance";
import Services from "@/Component/Home/Services";
import SuburbGrid from "@/Component/Home/SuburbGrid";
import Testimonial from "@/Component/Home/Testomonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SafetyAndCompliance />
      <AboutUs />
      <SuburbGrid />
      <Testimonial />
      <Process />
      <Brands />
      <FAQ />
      <FloatingCallButton />
    </>
  );
}
