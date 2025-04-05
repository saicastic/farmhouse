import Image from "next/image";
import React from "react";

const HeroFeatures = ({ items }) => {
  return (
    <section
      className="w-full min-h-[90vh] relative py-12 flex items-center flex-row px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
      style={{
        backgroundColor: "#F3F3F3",
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, #E1E1E1 25%, #E1E1E1 26%, transparent 27%, transparent 74%, #E1E1E1 75%, #E1E1E1 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, #E1E1E1 25%, #E1E1E1 26%, transparent 27%, transparent 74%, #E1E1E1 75%, #E1E1E1 76%, transparent 77%, transparent)
        `,
        backgroundSize: "40px 40px",
        backgroundPosition: "0 0, 20px 20px",
      }}
    >
      <div className="max-w-[1920px] mx-auto my-auto relative">
        <div className="w-full text-center py-4 md:py-8 px-4 sm:px-6">
          <h3 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-black tracking-tighter md:tracking-wider transition-all duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-black to-stone-950 bg-clip-text text-transparent">
              FACILITIES
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-1 sm:gap-3"
            >
              {/* Image Container */}
              <div className="w-full aspect-[9/14] relative overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  fill
                  alt={item.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Box */}
              <div className="w-full p-4 sm:p-6 text-center ">
                <h3 className="text-sm sm:text-base uppercase md:text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroFeatures;
