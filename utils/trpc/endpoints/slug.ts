import { z as zod } from "zod";
import { captureException } from "@sentry/nextjs";

import { supabase } from "@/utils/supabase";
import { publicProcedure } from "@/utils/trpc";

export const slug = publicProcedure
  .input((values) => {
    const schema = zod.object({
      slug: zod
        .string()
        .min(3, { message: "Мінімум 3 символи" })
        .max(64, { message: "Максимум 64 символи" })
        .regex(/^[a-zA-Z0-9-_.]+$/, {
          message:
            "Тільки латинські літери, цифри, тире, підкреслення та крапки",
        }),
    });

    const result = schema.safeParse(values);

    if (!result.success) {
      throw result.error.errors[0].message;
    }

    return result.data;
  })
  .query(async ({ input }) => {
    const companies = supabase
      .from("companies")
      .select("", { count: "exact", head: true })
      .eq("slug", input.slug)
      .throwOnError();
    const requests = supabase
      .from("requests")
      .select("", { count: "exact", head: true })
      .eq("company_slug", input.slug)
      .throwOnError();

    try {
      const [existing, requested] = await Promise.all([companies, requests]);

      if (existing.error || requested.error) {
        captureException({
          existing: existing.error,
          requested: requested.error,
        });

        throw new Error("Виникла помилка");
      }

      if ((existing?.count || 0) > 0 || (requested?.count || 0) > 0) {
        throw new Error("Цей ідентифікатор вже зайнятий");
      }

      return { success: true, slug: input.slug };
    } catch (error: any) {
      captureException(error);

      throw new Error(error.message);
    }
  });
