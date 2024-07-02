import { z as zod } from "zod";

export const schema = zod
  .object({
    company_name: zod.string().min(3),
    slug: zod
      .string()
      .min(3)
      .max(64)
      .regex(/^[a-zA-Z0-9-_.]+$/, {
        message: "Тільки латинські літери, цифри, тире, підкреслення та крапки",
      }),
    slug_available: zod.boolean().refine((data) => data, {
      message: "Цей ідентифікатор вже зайнятий",
    }),
    employees_amount: zod.enum(["sm", "md", "lg", "xl"]),
    locations_amount: zod.enum(["sm", "md", "lg", "xl"]),
  })
  .refine((data) => data.slug_available, {
    message: "Цей ідентифікатор вже зайнятий",
  });

export type Schema = zod.infer<typeof schema>;
