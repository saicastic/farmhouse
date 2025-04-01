"use client";

import FeaturesSection from "@/components/homesections/FeaturesSection";
import HomeAboutus from "@/components/homesections/HomeAboutus";
import HomeDescription from "@/components/homesections/HomeDescription";
import HomeHero from "@/components/homesections/HomeHero";
import ZoomParallax from "@/components/homesections/ZoomParallax";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="pb-6">
        <HomeHero />
        <FeaturesSection />
        <ZoomParallax />
        <HomeAboutus />
        <HomeDescription />
      </main>
    </ReactLenis>
  );
}
