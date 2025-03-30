import Image from "next/image";
import React from "react";

const FeaturesSection = () => {
  return (
    <section className="p-2">
      <div className="grid grid-cols-4 grid-rows-6 gap-2">
        <div className="col-span-4 row-span-3 bg-red-600 rounded-md overflow-hidden aspect-[2/1]">
          <Image
            src="/roomimgs/room4.avif"
            width={100}
            height={100}
            quality={100}
            unoptimized
            alt="room"
          />
        </div>

        <div className="col-span-2 row-span-3 col-start-1 row-start-4 bg-fuchsia-500 rounded-md overflow-hidden aspect-[1/1]">
          <Image
            src="/roomimgs/room2.avif"
            width={100}
            height={100}
            unoptimized
            alt="room"
          />
        </div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-4 bg-blue-300 rounded-md overflow-hidden aspect-[1/1]">
          <Image
            src="/roomimgs/room3.avif"
            width={100}
            height={100}
            unoptimized
            alt="room"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
