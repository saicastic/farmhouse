import Image from "next/image";
import React from "react";

const HomeAboutus = ({ title, description, buttonText, imgUrl, bgColor }) => {
  return (
    <section
      className={`w-full text-white ${
        bgColor.startsWith("#") ? "" : `bg-${bgColor}`
      }`}
      style={bgColor.startsWith("#") ? { backgroundColor: bgColor } : {}}
    >
      <div className="flex flex-col md:flex-row w-full max-w-full mx-auto">
        {/* Image Container */}
        <div className="w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] relative overflow-hidden order-2 md:order-1">
          <Image
            src={imgUrl}
            fill
            alt="About us image"
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-12 lg:py-16 order-1 md:order-2">
          <div className="w-[90%] text-center  space-y-4 sm:space-y-6 md:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-one">
              {description}
            </p>

            <button
              aria-label={buttonText}
              className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-full hover:bg-opacity-90 transition-all duration-300"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutus;
