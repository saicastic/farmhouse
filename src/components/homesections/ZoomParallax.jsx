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
    { src: "/roomimgs/room1.avif", scale: scale4 },
    { src: "/roomimgs/room2.avif", scale: scale5 },
    { src: "/roomimgs/room3.avif", scale: scale6 },
    { src: "/roomimgs/room4.avif", scale: scale5 },
    { src: "/roomimgs/room5.webp", scale: scale6 },
  ];

  return (
    <div ref={container} className={styles.container}>
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
