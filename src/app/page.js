"use client";

import FeaturesSection from "@/components/homesections/FeaturesSection";
import HomeAboutus from "@/components/homesections/HomeAboutus";
import HomeHero from "@/components/homesections/HomeHero";
import ZoomParallax from "@/components/homesections/ZoomParallax";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <HomeHero />
        <FeaturesSection />
        <ZoomParallax />
        <HomeAboutus />
      </main>
    </ReactLenis>
  );
}
