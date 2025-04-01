import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <section className="w-full h-[100vh] overflow-hidden">
      <div className="w-full h-full">
        <Image
          src="/roomimgs/room6.avif"
          unoptimized
          width={100}
          height={100}
          alt="room image"
        />
      </div>
    </section>
  );
};

export default HomeHero;
