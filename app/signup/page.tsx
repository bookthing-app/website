"use client";

import { useState } from "react";

import { Form } from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { Information } from "@/features/signup/info";
import { Auth } from "@/features/signup/auth";
import { InfoHeader, AuthHeader } from "@/features/signup/header";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

import { useForm } from "react-hook-form";

import { schema, type Schema } from "@/features/signup/schema";
import { Logo } from "@/components/ui/logo";

import type { Viewport } from "next";

export type SignupState = "information" | "auth";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

const SignUpPage = () => {
  const [state, setState] = useState<SignupState>("information");

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      company_name: "",
      slug: "",
      employees_amount: "sm",
      locations_amount: "sm",
    },
  });

  const handleNavigate = (step: SignupState) => {
    setState(step);
  };

  return (
    <div className="flex justify-center p-4 py-16">
      <div className="flex flex-col gap-4 max-w-[500px]">
        <Form {...form}>
          <div className="flex justify-center">
            <Link href="/">
              <Logo
                className="translate-x-1 w-full"
                pathClassName="fill-black"
              />
            </Link>
          </div>
          <AnimatePresence initial={false} mode="wait">
            {state === "information" && <InfoHeader />}
            {state === "auth" && <AuthHeader />}
          </AnimatePresence>
          <Alert>
            <AlertCircle className="size-4" />
            <AlertDescription>
              Ми поки що працюємо у тестовому режимі, тому надаємо доступ до
              додатку поступово. Як тільки ми будемо готові, ми повідомимо вас у
              Telegram.
            </AlertDescription>
          </Alert>
          <AnimatePresence initial={false} mode="wait">
            {state === "information" && (
              <Information key="information" navigate={handleNavigate} />
            )}
            {state === "auth" && <Auth />}
          </AnimatePresence>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
