"use client";

import React, { useRef } from "react";
import styles from "./styles/zoomparallax.module.css";
import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";

const ZoomParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: "/roomimgs/room7.avif", scale: scale4 },
    { src: "/roomimgs/room2.avif", scale: scale5 },
    { src: "/roomimgs/room3.avif", scale: scale6 },
    { src: "/roomimgs/room6.avif", scale: scale5 },
    { src: "/roomimgs/room5.avif", scale: scale6 },
    { src: "/roomimgs/room4.avif", scale: scale8 },
    { src: "/roomimgs/room1.avif", scale: scale9 },
  ];

  return (
    <div ref={container} className={styles.container}>
      {/* <div className="w-full text-center py-4 md:py-8 px-4 sm:px-6">
        <h3 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-black tracking-tighter md:tracking-wider transition-all duration-300 hover:scale-105">
          <span className="bg-gradient-to-r from-black to-stone-950 bg-clip-text text-transparent">
            ROOMS EXPERIENCE
          </span>
        </h3>
      </div> */}
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              style={{ scale: scale }}
              key={index}
              className={styles.el}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={src}
                  unoptimized
                  width={100}
                  height={100}
                  alt="room"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ZoomParallax;
