import FeaturesSection from "@/components/homesections/FeaturesSection";
import HomeAboutus from "@/components/homesections/HomeAboutus";
import ZoomParallax from "@/components/homesections/ZoomParallax";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FeaturesSection />
      <ZoomParallax />
      <HomeAboutus />
    </>
  );
}
