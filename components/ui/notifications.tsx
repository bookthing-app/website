"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";
import Image from "next/image";

import type { Variants } from "framer-motion";

const animate: Variants = {
  staggered: {
    position: "absolute",
    width: "100%",
    y: -75,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  spreaded: (i: number) => {
    const payload = {
      position: "absolute",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 1,
      },
    };

    switch (i) {
      case 1:
        return {
          ...payload,
          y: -170,
        };
      case 2:
        return {
          ...payload,
          y: -90,
        };
      case 3:
        return {
          ...payload,
          y: -20,
        };
      case 4:
        return {
          ...payload,
          y: 80,
        };
      default:
        return {};
    }
  },
};

export const Notifications = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center gap-2 h-full w-full"
    >
      <motion.div
        variants={animate}
        animate={inView ? "spreaded" : "staggered"}
        custom={1}
      >
        <Image
          src="/notification-bubble-1.png"
          alt="Notification bubble"
          width={974}
          height={150}
          className="rotate-3"
        />
      </motion.div>
      <motion.div
        variants={animate}
        animate={inView ? "spreaded" : "staggered"}
        custom={2}
      >
        <Image
          src="/notification-bubble-2.png"
          alt="Notification bubble"
          width={974}
          height={150}
          className="-rotate-2"
        />
      </motion.div>
      <motion.div
        variants={animate}
        animate={inView ? "spreaded" : "staggered"}
        custom={3}
      >
        <Image
          src="/notification-bubble-3.png"
          alt="Notification bubble"
          width={974}
          height={150}
          className="rotate-1"
        />
      </motion.div>
      <motion.div
        variants={animate}
        animate={inView ? "spreaded" : "staggered"}
        custom={4}
      >
        <Image
          src="/notification-bubble-4.png"
          alt="Notification bubble"
          width={974}
          height={150}
          className="rotate-2"
        />
      </motion.div>
    </div>
  );
};
