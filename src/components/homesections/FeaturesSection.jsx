import Image from "next/image";
import React from "react";

const FeaturesSection = () => {
  return (
    <section className="p-2 my-6">
      <div className="grid grid-cols-4 grid-rows-6 gap-2">
        <div className="col-span-4 row-span-3 relative rounded-md overflow-hidden aspect-[2/1]">
          <Image
            src="/roomimgs/room4.avif"
            width={100}
            height={100}
            quality={100}
            unoptimized
            alt="room"
          />
          <div className="px-2 max-w-[40%] py-1 rounded-xs bg-black/50  text-white absolute bottom-2 left-2 z-10 bg-opacity-50">
            <h3 className="text-[0.5rem]">Clean</h3>
            <p className="opacity-[80%] text-[0.4rem]">
              Most cleanest room in the entire world
            </p>
          </div>
        </div>

        <div className="col-span-2 row-span-3 relative col-start-1 row-start-4 rounded-md overflow-hidden aspect-[1/1]">
          <Image
            src="/roomimgs/room2.avif"
            width={100}
            height={100}
            unoptimized
            alt="room"
          />
          <div className="px-2 max-w-[75%] py-1 rounded-xs bg-black/50  text-white absolute bottom-2 left-2 z-10 bg-opacity-50">
            <h3 className="text-[0.5rem]">Clean</h3>
            <p className="opacity-[80%] text-[0.4rem] leading-2">
              Most cleanest room in the entire world
            </p>
          </div>
        </div>
        <div className="col-span-2 relative row-span-3 col-start-3 row-start-4 rounded-md overflow-hidden aspect-[1/1]">
          <Image
            src="/roomimgs/room3.avif"
            width={100}
            height={100}
            unoptimized
            alt="room"
          />
          <div className="px-2 max-w-[75%] py-1 rounded-xs bg-black/50  text-white absolute bottom-2 left-2 z-10 bg-opacity-50">
            <h3 className="text-[0.5rem]">Clean</h3>
            <p className="opacity-[80%] text-[0.4rem] leading-2">
              Most cleanest room in the entire world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
