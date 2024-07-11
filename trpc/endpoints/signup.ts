import { captureException } from "@sentry/nextjs";
import crypto from "crypto";
import { z as zod } from "zod";

import { baseSchema } from "@/features/signup/schema";

import { supabase } from "@/utils/supabase";
import { publicProcedure } from "@/trpc";

export const signup = publicProcedure
  .input((values) => {
    const schema = baseSchema.extend({
      meta: zod
        .object({
          ref: zod.string().optional().nullable(),
        })
        .optional(),
      auth: zod.object({
        id: zod.number(),
        first_name: zod.string(),
        auth_date: zod.number(),
        hash: zod.string(),
        photo_url: zod.string(),
        username: zod.string(),
      }),
    });

    const result = schema.safeParse(values);

    if (!result.success) {
      throw result.error;
    }

    return result.data;
  })
  .mutation(async ({ input }) => {
    // 1. Validate the request is authentic
    const { auth_date, first_name, hash, id, username, photo_url } = input.auth;
    const token = process.env.BOT_TOKEN;

    if (!token) {
      throw new Error("Token is missing");
    }

    if (!auth_date || !first_name || !hash || !id || !username || !photo_url) {
      throw new Error("Invalid data provided");
    }

    const checkString = `auth_date=${auth_date}\nfirst_name=${first_name}\nid=${id}\nphoto_url=${photo_url}\nusername=${username}`;
    const secret = crypto.createHash("sha256").update(token);
    const calculatedHash = crypto
      .createHmac("sha256", secret.digest())
      .update(checkString)
      .digest("hex");

    if (calculatedHash !== hash) {
      throw new Error("Invalid hash provided");
    }

    // 2. Insert the request into the database
    const request = await supabase
      .from("requests")
      .insert({
        company_name: input.company_name,
        company_slug: input.slug,
        first_name,
        user_id: id,
        user_username: username,
        meta: {
          ...(input.meta || {}),
          source: "web",
        },
      })
      .select()
      .single();

    if (request.error) {
      captureException(request.error);

      throw new Error("Error inserting request");
    }

    return { success: true };
  });
