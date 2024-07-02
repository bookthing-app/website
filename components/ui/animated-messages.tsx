"use client";

import { useRef } from "react";

import Image from "next/image";
import { motion, useInView } from "framer-motion";

import type { Variants } from "framer-motion";

const animate: Variants = {
  initial: (i: number) => {
    const y = 10 + i * 10;

    return {
      opacity: 0,
      y,
    };
  },
  visible: (i: number) => {
    const delay = 0.3 + i * 0.3;
    const mid = (i - 1) * 10;

    return {
      opacity: 1,
      y: -mid,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay,
      },
    };
  },
};

export const AnimatedMessages = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref);

  return (
    <div ref={ref}>
      <motion.div
        initial="initial"
        animate={inView ? "visible" : "initial"}
        variants={animate}
        custom={1}
      >
        <Image
          src="/message-bubble-1.png"
          alt="Message bubble 1"
          width={990}
          height={215}
          className="-rotate-3"
        />
      </motion.div>
      <motion.div
        initial="initial"
        animate={inView ? "visible" : "initial"}
        variants={animate}
        custom={2}
      >
        <Image
          src="/message-bubble-2.png"
          alt="Message bubble 2"
          width={990}
          height={215}
          className="rotate-3"
        />
      </motion.div>
      <motion.div
        initial="initial"
        animate={inView ? "visible" : "initial"}
        variants={animate}
        custom={3}
      >
        <Image
          src="/message-bubble-3.png"
          alt="Message bubble 3"
          width={990}
          height={215}
          className="rotate-1"
        />
      </motion.div>
      <motion.div
        initial="initial"
        animate={inView ? "visible" : "initial"}
        variants={animate}
        custom={4}
      >
        <Image
          src="/message-bubble-4.png"
          alt="Message bubble 4"
          width={990}
          height={215}
          className="-rotate-2"
        />
      </motion.div>
      <motion.div
        initial="initial"
        animate={inView ? "visible" : "initial"}
        variants={animate}
        custom={5}
      >
        <Image
          src="/message-bubble-5.png"
          alt="Message bubble 5"
          width={990}
          height={215}
          className="-rotate-1"
        />
      </motion.div>
    </div>
  );
};
