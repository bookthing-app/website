"use client";

import { useEffect } from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

import { useFormContext } from "react-hook-form";
import { useDebounce } from "@uidotdev/usehooks";
import { useQuery } from "@tanstack/react-query";
import { useSlug } from "./queries";

import { variants, transition } from "@/features/signup/animations";

import { event } from "@/lib/pixel";

import type { Schema } from "./schema";
import type { SignupState } from "@/app/signup/page";

export const Information = ({
  navigate,
}: {
  navigate: (step: SignupState) => void;
}) => {
  const form = useFormContext<Schema>();
  const [name, slug, isAvailable] = form.getValues([
    "company_name",
    "slug",
    "slug_available",
  ]);

  const debouncedSlug = useDebounce(slug, 750);

  const slugQuery = useQuery(useSlug(debouncedSlug));

  useEffect(() => {
    if (slugQuery.error) {
      form.setError("slug", {
        type: "custom",
        message: "Цей ідентифікатор вже зайнятий",
      });
      form.setValue("slug_available", false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugQuery.error]);

  const handleGoForward = async () => {
    const valid = await form.trigger([
      "company_name",
      "slug",
      "slug_available",
    ]);

    if (valid) {
      event("SignUpNavigate", {
        from_step: "information",
        to_step: "auth",
        company_name: name,
        company_slug: slug,
      });

      navigate("auth");
    }
  };

  return (
    <motion.div
      key="information"
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      transition={transition}
      custom={1}
      className="flex flex-col gap-4 p-4 rounded-lg border"
    >
      <div className="flex flex-col gap-1">
        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Назва *</FormLabel>
              <FormControl>
                <Input placeholder="Назва" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ідентифікатор компанії *</FormLabel>
              <FormControl>
                <Input className="pl-[100px] font-monospace" {...field}>
                  <div className="inline-flex border items-center rounded-l-md absolute l-0 h-full bg-muted px-2">
                    <code className="text-sm text-muted-foreground ">
                      bkth.app/
                    </code>
                  </div>
                  {slugQuery.isLoading && (
                    <div className="inline-flex justify-center items-center absolute right-2 top-0 h-full">
                      <Loader2 className="size-4 text-muted-foreground animate-spin" />
                    </div>
                  )}
                </Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <FormField
          control={form.control}
          name="employees_amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Кількість працівників</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={String(field.value)}
              >
                <FormControl>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Кількість" />
                  </SelectTrigger>
                </FormControl>
                <FormMessage />
                <SelectContent>
                  <SelectItem value="sm">1-2</SelectItem>
                  <SelectItem value="md">3-5</SelectItem>
                  <SelectItem value="lg">5-10</SelectItem>
                  <SelectItem value="xl">11 або більше</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="locations_amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Кількість філій</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={String(field.value)}
              >
                <FormControl>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Кількість" />
                  </SelectTrigger>
                </FormControl>
                <FormMessage />
                <SelectContent>
                  <SelectItem value="sm">1</SelectItem>
                  <SelectItem value="md">2</SelectItem>
                  <SelectItem value="lg">3</SelectItem>
                  <SelectItem value="xs">4 або більше</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </div>
      <span className="block text-sm text-muted-foreground">
        * Поля позначені зірочкою обовʼязкові для заповнення
      </span>
      <div className="flex justify-end mt-6">
        <Button
          size="lg"
          onClick={handleGoForward}
          disabled={!name || !slug || !isAvailable || slugQuery.isLoading}
        >
          Далі
        </Button>
      </div>
    </motion.div>
  );
};
