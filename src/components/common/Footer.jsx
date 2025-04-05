import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#806044] text-white">
      {/* Main Container */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Row 1: Top Logo */}
        <div className="w-full flex justify-center items-center">
          <div className="flex justify-center mb-8 sm:mb-12 w-7 h-7">
            <Image
              src="/svg/temp.svg"
              width={160}
              height={60}
              alt="Company Logo"
              className="w-32 sm:w-40"
            />
          </div>
        </div>

        {/* Row 2: Navigation Links */}
        <div className="flex justify-between w-full mb-8 sm:mb-12">
          {["About", "Services", "Blog", "Careers"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 w-fit hover:text-white text-sm sm:text-base transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Row 3: Three Column Section */}
        <div className="flex w-full justify-between mb-8 sm:mb-12">
          {/* Left: Images Grid */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Certifications
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 7].map((i) => (
                <div
                  key={i}
                  className="aspect-square relative rounded-lg overflow-hidden w-20"
                >
                  <Image
                    src={`/roomimgs/room${i}.avif`}
                    fill
                    alt={`rooms`}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Middle: Logo */}
          <div className="flex items-center justify-cente w-6 h-6">
            <Image
              src="/svg/temp.svg"
              width={120}
              height={120}
              alt="Logo Symbol"
              className="w-20 sm:w-28 opacity-90"
            />
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-3 text-center md:text-right">
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Contact
            </h4>
            <p className="text-gray-300 text-sm sm:text-base">
              123 Luxury Street
              <br />
              New York, NY 10001
            </p>
            <p className="text-gray-300 text-sm sm:text-base mt-2">
              Tel: (555) 123-4567
              <br />
              Email: info@luxury.com
            </p>
          </div>
        </div>

        {/* Row 4: Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Luxury Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
