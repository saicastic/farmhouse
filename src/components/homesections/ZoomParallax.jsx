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

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        <div className={styles.el}>
          <motion.div
            style={{ scale: scale4 }}
            className={styles.imageContainer}
          >
            <Image
              src="/roomimgs/room1.avif"
              unoptimized
              width={100}
              height={100}
              alt="room"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ZoomParallax;
