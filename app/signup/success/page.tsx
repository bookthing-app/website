"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { AnimatedEmoji } from "@/components/animated-emoji";

import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";
import Link from "next/link";

import {
  variants,
  transition,
  emojiVariants,
} from "@/features/signup/animations";

const SignUpSuccessPage = () => {
  return (
    <div className="flex justify-center p-4 py-16">
      <div className="flex flex-col max-w-[500px]">
        <motion.div
          key="auth"
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={transition}
          custom={1}
          className="flex flex-col justify-center items-center gap-4 min-h-[125px]"
        >
          <div className="flex justify-center">
            <Link href="/">
              <Logo
                className="translate-x-1 w-full"
                pathClassName="fill-black"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              key="auth-emoji-success"
              initial="enter"
              animate="center"
              exit="exit"
              variants={emojiVariants}
              transition={transition}
              custom={-1}
              className="flex flex-col items-center"
            >
              <AnimatedEmoji src="/check.tgs" className="size-[100px]" />
            </motion.div>
            <motion.h1
              key="auth-title-success"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={transition}
              custom={-1}
              className="text-3xl font-bold text-center"
            >
              Готово!
            </motion.h1>
            <motion.p
              key="auth-text-success"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={transition}
              custom={-1}
              className="text-muted-foreground text-center"
            >
              Дякуємо за зацікавленість! Ми повідомимо вас, як тільки ваш
              додаток буде готовий
            </motion.p>
          </div>
          <Alert>
            <AlertCircle className="size-4" />
            <AlertDescription>
              Ми поки що працюємо у тестовому режимі, тому надаємо доступ до
              додатку поступово. Як тільки ми будемо готові, ми повідомимо вас у
              Telegram.
            </AlertDescription>
          </Alert>
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Alert>
              <Check className="size-4" />
              <AlertTitle>Дякуємо за вашу зацікавленість</AlertTitle>
              <AlertDescription>
                Ваш запит на реєстрацію успішно надіслано. Ми звʼяжемося з вами
                як тільки надамо вам доступ до додатку.
                <div>
                  <Button size="lg" className="mt-2" asChild>
                    <Link href="/">Повернутися на головну</Link>
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUpSuccessPage;
