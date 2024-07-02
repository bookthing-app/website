import type { Variants, AnimationProps } from "framer-motion";

export const variants: Variants = {
  enter: (page: number) => ({
    x: page === 1 ? -50 : 50,
    opacity: 0,
  }),
  exit: (page: number) => ({
    x: page === 1 ? -50 : 50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
};

export const emojiVariants: Variants = {
  enter: (page: number) => ({
    x: page === 1 ? -50 : 50,
    scale: 0.4,
    opacity: 0,
  }),
  exit: (page: number) => ({
    x: page === 1 ? -50 : 50,
    opacity: 0,
    scale: 0.4,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
};

export const transition: AnimationProps["transition"] = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};
