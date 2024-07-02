"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { AnimatedEmoji } from "@/components/animated-emoji";

import { motion } from "framer-motion";
import { X, AlertCircle } from "lucide-react";
import Link from "next/link";

import {
  variants,
  transition,
  emojiVariants,
} from "@/features/signup/animations";

const SignUpErrorPage = () => {
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
              <AnimatedEmoji src="/cross.tgs" className="size-[100px]" />
            </motion.div>
            <motion.h1
              key="auth-title-error"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={transition}
              custom={-1}
              className="text-3xl font-bold text-center"
            >
              Ой, щось пішло не так
            </motion.h1>
            <motion.p
              key="auth-text-error"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={transition}
              custom={-1}
              className="text-muted-foreground text-center"
            >
              Сталася помилка під час авторизації. Спробуйте ще раз або
              звʼяжіться з нами за{" "}
              <Link href="https://bkth.link/support" className="underline">
                посиланням
              </Link>
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
              <X className="size-4" />
              <AlertTitle>Ой, щось пішло не так</AlertTitle>
              <AlertDescription>
                Схоже щось пішло не так з надсиланням вашого запиту на
                реєстрацію. Спробуйте ще раз трішки пізніше. Якщо помилка
                повторюється напишіть нам.
                <div className="flex items-center gap-2 mt-2">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/signup">Спробувати ще раз</Link>
                  </Button>
                  <Button size="lg" asChild>
                    <Link href="https://bkth.link/support">Написати нам</Link>
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

export default SignUpErrorPage;
