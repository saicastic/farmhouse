"use client";

import FeaturesSection from "@/components/homesections/FeaturesSection";
import HomeAboutus from "@/components/homesections/HomeAboutus";
import HomeDescription from "@/components/homesections/HomeDescription";
import HomeFeatures from "@/components/homesections/HomeFeatures";
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
        <HomeAboutus
          imgUrl="/roomimgs/room1.avif"
          title="About Our Spaces"
          description="Experience luxury redefined in our carefully curated living spaces . Experience luxury redefined in our carefully curated living spaces. Experience luxury redefined in our carefully curated living spaces. Experience luxury redefined in our carefully curated living spaces."
          buttonText="Explore Rooms"
          bgColor="#5d2510"
        />
        <HomeFeatures
          backgroundPattern="/custom-pattern.png"
          items={[
            {
              image: "/roomimgs/room1.avif",
              title: "Modern Design",
              description: "Contemporary aesthetics meet functionality",
            },
            {
              image: "/roomimgs/room2.avif",
              title: "Premium Quality",
              description: "Crafted with finest materials",
            },
            {
              image: "/roomimgs/room4.avif",
              title: "Premium Quality",
              description: "Crafted with finest materials",
            },
            {
              image: "/roomimgs/room6.avif",
              title: "Premium Quality",
              description: "Crafted with finest materials",
            },
            // Add at least 4 items for proper grid layout
          ]}
        />
        <HomeAboutus
          imgUrl="/roomimgs/room4.avif"
          title="About Our Facilities"
          description="Experience luxury redefined in our carefully curated living spaces . Experience luxury redefined in our carefully curated living spaces. Experience luxury redefined in our carefully curated living spaces. Experience luxury redefined in our carefully curated living spaces."
          buttonText="Explore Facillities"
          bgColor="#6a6f4c"
        />
        <HomeDescription />
      </main>
    </ReactLenis>
  );
}
