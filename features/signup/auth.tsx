"use client";

import { TelegramLogin } from "@/components/telegram-login";

import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";

import { useFormContext } from "react-hook-form";
import { useSignup } from "@/features/signup/mutations";

import { variants, transition } from "@/features/signup/animations";

import type { Schema } from "./schema";

// TODO: Fix with correct environment check
const botName = "bookthing_dev_bot"

export const Auth = () => {
  const form = useFormContext<Schema>();

  const signupMutation = useSignup();

  const handleAuth = (auth: any) => {
    form.handleSubmit((data) => {
      signupMutation.mutate({
        ...data,
        auth,
      });
    })();
  };

  return (
    <motion.div
      key="auth"
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      transition={transition}
      custom={1}
      className="flex flex-col justify-center items-center rounded-lg border min-h-[125px]"
    >
      <AnimatePresence>
        {!form.formState.isSubmitted && (
          <motion.div
            animate={{
              opacity:
                signupMutation.isPending || signupMutation.submittedAt ? 0 : 1,
            }}
            className="p-4 py-6"
          >
            <TelegramLogin onAuth={handleAuth} botName={botName} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {signupMutation.isPending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Loader2 className="size-6 text-accent-blue animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
