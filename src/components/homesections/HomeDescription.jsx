import Image from "next/image";
import React from "react";

const HomeDescription = () => {
  return (
    <section className="w-full bg-gray-700 min-h-[50vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 2xl:px-12 relative">
      {/* Max-width container */}
      <div className="w-full max-w-[1920px] mx-auto flex flex-col items-center">
        {/* Logo container with responsive sizing */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 mb-4 sm:mb-6 md:mb-8">
          <Image
            src="/svg/temp.svg"
            layout="responsive"
            width={100}
            height={100}
            alt="Company logo"
            className="object-contain"
          />
        </div>

        {/* Text content with responsive typography and spacing */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <p className="text-white text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed sm:leading-loose md:leading-loose font-light tracking-wide max-w-4xl mx-auto [text-align-last:center]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aperiam
            dolorem voluptatibus culpa fugit possimus dignissimos fugiat
            similique? Id reiciendis eaque sed earum delectus atque sapiente
            sequi, sit porro labore?
            {/* Responsive text continuation */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            inventore laboriosam. Mollitia consequuntur tempora recusandae ea a
            quam nemo nisi eaque eveniet laboriosam! Id modi aliquid, omnis
            velit fuga corporis?
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeDescription;
