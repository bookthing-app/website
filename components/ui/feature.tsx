"use client";

import { useEffect, useRef } from "react";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

import { cn } from "@/utils/cn";

import type { LucideIcon } from "lucide-react";
import type { HTMLAttributes } from "react";

interface FeatureProps extends HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  color?:
    | "bg-accent-red"
    | "bg-accent-orange"
    | "bg-accent-yellow"
    | "bg-accent-green"
    | "bg-accent-mint"
    | "bg-accent-teal"
    | "bg-accent-cyan"
    | "bg-accent-blue"
    | "bg-accent-indigo"
    | "bg-accent-purple"
    | "bg-accent-pink";
  newTill?: string;
  containerRef?: React.RefObject<HTMLDivElement>;
}

export const Feature = ({
  containerRef,
  children,
  icon: Icon,
  color = "bg-accent-red",
  newTill,
  ...props
}: FeatureProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();

  const isSelected =
    searchParams.get("feature") === props.id ||
    (!searchParams.has("feature") && props.id === "analytics");

  // useEffect(() => {
  //   console.log({ id: props.id, left: ref.current?.offsetLeft, width: ref?.current?.offsetWidth })
  //   if (isSelected) {
  //     containerRef?.current?.scrollTo({
  //       left: (ref.current?.offsetLeft || 0) - (ref.current?.offsetWidth || 0) / 2,
  //       behavior: "smooth",
  //     })
  //   }
  // }, [isSelected, containerRef]);

  return (
    <div
      ref={ref}
      {...props}
      className="grid grid-cols-[min-content_1fr] md:grid-cols-[min-content_1fr_min-content] items-center gap-3 px-4 py-2 rounded-lg cursor-pointer relative group"
    >
      <div className={cn("w-[35px] h-[35px] p-1.5 rounded-md relative", color)}>
        <Icon className="w-full h-full text-white" />
      </div>
      <div className="flex">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-lg cursor-pointer text-nowrap md:text-wrap">
            {children}
          </h3>
          {newTill && new Date() < new Date(newTill) && (
            <div className="px-2 py-1.5 bg-accent-blue rounded-xl uppercase text-white text-xs font-medium">
              Нове
            </div>
          )}
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-1 hidden md:block" />
      {isSelected && (
        <motion.div
          layoutId="feature"
          className="absolute w-full h-full rounded-lg shadow-hover"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
};
