import Image from "next/image";
import React from "react";

const HomeAboutus = () => {
  return (
    <section className="w-full bg-red-200 mt-6">
      <div className="flex w-full">
        <div className="flex-[1]">
          <Image
            src="/roomimgs/room1.avif"
            width={100}
            height={100}
            alt="room image"
          />
        </div>
        <div className="flex flex-[1]"></div>
      </div>
    </section>
  );
};

export default HomeAboutus;
