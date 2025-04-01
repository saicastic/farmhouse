import Image from "next/image";
import React from "react";

const HomeDescription = () => {
  return (
    <section className="w-full bg-gray-700 overflow-hidden h-[50vh] flex flex-col items-center py-6 relative">
      <div className="w-6 h-6">
        <Image
          src="/svg/temp.svg"
          height={100}
          width={100}
          alt="temp svg logo"
        />
      </div>
      <div className="absolute w-[70%] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aperiam
          dolorem voluptatibus culpa fugit possimus dignissimos fugiat
          similique? Id reiciendis eaque sed earum delectus atque sapiente
          sequi, sit porro labore?
        </p>
      </div>
    </section>
  );
};

export default HomeDescription;
