import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Mobile Image */}
        <div className="md:hidden w-full h-full">
          <Image
            src="/roomimgs/room4.avif" // Add your mobile image path
            fill
            alt="Mobile room image"
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block w-full h-full">
          <Image
            unoptimized
            src="/roomimgs/room2.avif" // Keep your original desktop image
            fill
            alt="Desktop room image"
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light uppercase tracking-wide text-white mb-4">
            Soluna <br />
            FarmStays
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            Experience unparalleled comfort in our meticulously designed spaces
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
