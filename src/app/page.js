import FeaturesSection from "@/components/homesections/FeaturesSection";
import HomeAboutus from "@/components/homesections/HomeAboutus";
import HomeHero from "@/components/homesections/HomeHero";
import ZoomParallax from "@/components/homesections/ZoomParallax";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturesSection />
      <ZoomParallax />
      <HomeAboutus />
    </>
  );
}
