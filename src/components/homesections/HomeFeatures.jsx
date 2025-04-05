import Image from "next/image";
import React from "react";

const HeroFeatures = ({ items }) => {
  return (
    <section
      className="w-full min-h-[90vh] relative py-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-4 sm:gap-6"
            >
              {/* Image Container */}
              <div className="w-full aspect-square relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  fill
                  alt={item.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Box */}
              <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-2">
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
