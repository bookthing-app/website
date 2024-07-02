"use client";

import { useRef } from "react";

import { Feature } from "@/components/ui/feature";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useSearchParams } from "next/navigation";

import { features } from "@/constants/features";

export const Features = () => {
  const ref = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const { scrollYProgress, scrollXProgress } = useScroll({
    container: ref,
  });

  const featureKey = searchParams.get("feature") || "analytics";
  const feature = features[featureKey];

  const topOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const bottomOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const leftOpacity = useTransform(scrollXProgress, [0, 0.1], [0, 1]);
  const rightOpacity = useTransform(scrollXProgress, [0.9, 1], [1, 0]);

  return (
    <div className="flex flex-col gap-8 justify-center items-center p-4 sm:p-16 py-24">
      <h2 className="font-bold text-5xl tracking-tight leading-none text-center">
        Функціонал додатку
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 max-w-[1200px] w-full">
        <div className="relative">
          <motion.div
            className="hidden md:absolute left-0 right-0 top-0 bg-gradient-to-b from-[#f2f0ef] to-[#f2f0ef]/[0] h-20 z-10 rounded-t-3xl pointer-events-none"
            style={{ opacity: topOpacity }}
          />
          <motion.div
            className="absolute md:hidden left-0 top-0 bottom-0 bg-gradient-to-r from-[#f2f0ef] to-[#f2f0ef]/[0] w-20 z-10 rounded-l-3xl pointer-events-none"
            style={{ opacity: leftOpacity }}
          />
          <div
            ref={ref}
            className="flex md:flex-col md:gap-2 h-auto md:h-[450px] rounded-3xl bg-[#f2f0ef] p-4 overflow-x-auto md:overflow-y-auto relative"
          >
            {Object.entries(features).map(([id, feature]) => (
              <Link key={id} href={{ query: { feature: id } }} scroll={false}>
                <Feature
                  id={id}
                  icon={feature.icon}
                  // @ts-ignore
                  color={feature.color}
                  containerRef={ref}
                >
                  {feature.label}
                </Feature>
              </Link>
            ))}
          </div>
          <motion.div
            className="absolute md:hidden right-0 top-0 bottom-0 bg-gradient-to-l from-[#f2f0ef] to-[#f2f0ef]/[0] w-20 z-10 rounded-r-3xl pointer-events-none"
            style={{ opacity: rightOpacity }}
          />
          <motion.div
            className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-[#f2f0ef] to-[#f2f0ef]/[0] h-20 z-10 rounded-b-3xl pointer-events-none"
            style={{ opacity: bottomOpacity }}
          />
        </div>
        <div className="h-[450px] rounded-3xl overflow-hidden bg-[#f2f0ef] relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={`container-${featureKey}`}
              className="h-full p-4"
              animate={{ backgroundColor: feature.background || "#a0ccbc" }}
            >
              {feature.image && (
                <motion.div
                  key={`image-${featureKey}`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{
                    y: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="flex justify-center items-center h-full"
                >
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    width={feature.image.width}
                    height={feature.image.height}
                    className="max-h-full max-w-1/2 w-auto"
                  />
                </motion.div>
              )}
            </motion.div>
            <motion.div
              key={featureKey}
              className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/[.1] backdrop-blur-md text-background"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              {feature.description}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
