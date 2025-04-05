import Image from "next/image";
import React from "react";

const FeaturesSection = () => {
  return (
    <section className="p-2 my-6 sm:p-3 sm:my-8 md:p-4 md:my-12 max-w-[1920px] mx-auto">
      <div className="w-full text-center py-4 md:py-8 px-4 sm:px-6">
        <h3 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-black tracking-tighter md:tracking-wider transition-all duration-300 hover:scale-105">
          <span className="bg-gradient-to-r from-black to-stone-950 bg-clip-text text-transparent">
            Features
          </span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-3 sm:gap-3 md:gap-4">
        {/* Main Image */}
        <div className="col-span-4 row-span-3 relative rounded-lg overflow-hidden aspect-[2/1]">
          <Image
            src="/roomimgs/room4.avif"
            fill
            alt="room"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <div className="px-3 py-2 max-w-[45%] bg-black/50 text-white absolute bottom-3 left-3 z-10 rounded-md backdrop-blur-sm">
            <h3 className="text-[0.6rem] sm:text-xs md:text-[0.7rem] font-medium">
              Clean
            </h3>
            <p className="opacity-80 text-[0.5rem] sm:text-[0.6rem] md:text-[0.6rem] leading-tight">
              Most cleanest room in the entire world
            </p>
          </div>
        </div>

        {/* Secondary Images */}
        <div className="col-span-2 row-span-3 col-start-1 row-start-4 relative rounded-lg overflow-hidden aspect-[1/1]">
          <Image
            src="/roomimgs/room2.avif"
            fill
            alt="room"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="px-3 py-2 max-w-[80%] bg-black/50 text-white absolute bottom-3 left-3 z-10 rounded-md backdrop-blur-sm">
            <h3 className="text-[0.6rem] sm:text-xs md:text-[0.7rem] font-medium">
              Clean
            </h3>
            <p className="opacity-80 text-[0.5rem] sm:text-[0.6rem] md:text-[0.6rem] leading-tight">
              Most cleanest room in the entire world
            </p>
          </div>
        </div>

        <div className="col-span-2 relative row-span-3 col-start-3 row-start-4 rounded-lg overflow-hidden aspect-[1/1]">
          <Image
            src="/roomimgs/room3.avif"
            fill
            alt="room"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="px-3 py-2 max-w-[80%] bg-black/50 text-white absolute bottom-3 left-3 z-10 rounded-md backdrop-blur-sm">
            <h3 className="text-[0.6rem] sm:text-xs md:text-[0.7rem] font-medium">
              Clean
            </h3>
            <p className="opacity-80 text-[0.5rem] sm:text-[0.6rem] md:text-[0.6rem] leading-tight">
              Most cleanest room in the entire world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
