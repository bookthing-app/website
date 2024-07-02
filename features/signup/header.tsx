"use client";

import { AnimatedEmoji } from "@/components/animated-emoji";

import { motion, AnimatePresence } from "framer-motion";

import {
  variants,
  emojiVariants,
  transition,
} from "@/features/signup/animations";

export const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key="auth-emoji"
          initial="enter"
          animate="center"
          exit="exit"
          variants={emojiVariants}
          transition={transition}
          custom={-1}
          className="flex flex-col items-center"
        >
          <AnimatedEmoji src="/telegram-plane.tgs" className="size-[100px]" />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.h1
          key="auth-title"
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={transition}
          custom={-1}
          className="text-3xl font-bold text-center"
        >
          Крок 2
        </motion.h1>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.p
          key="auth-text"
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={transition}
          custom={-1}
          className="text-muted-foreground text-center"
        >
          Авторизуйтесь за допомогою Telegram, щоб ми могли повідомити коли ваш
          додаток буде готовий
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export const InfoHeader = () => (
  <div className="flex flex-col items-center">
    <motion.div
      key="information-emoji"
      initial="enter"
      animate="center"
      exit="exit"
      variants={emojiVariants}
      transition={transition}
      custom={1}
    >
      <AnimatedEmoji src="/eyes.tgs" className="size-[100px]" />
    </motion.div>
    <motion.h1
      key="information-title"
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      transition={transition}
      custom={1}
      className="text-3xl font-bold text-center"
    >
      Крок 1
    </motion.h1>
    <motion.p
      key="information-text"
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      transition={transition}
      custom={1}
      className="text-muted-foreground text-center"
    >
      Розкажіть нам про вашу компанію
    </motion.p>
  </div>
);
