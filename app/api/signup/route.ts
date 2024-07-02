import { NextRequest, NextResponse } from "next/server";

import { captureException } from "@sentry/nextjs";
import crypto from "crypto";

import { supabase } from "@/utils/supabase";

export const POST = async (req: NextRequest) => {
  const { data } = await req.json();

  // 1. Validate the request is authentic
  const { auth_date, first_name, hash, id, username, photo_url } = data;
  const token = process.env.BOT_TOKEN;

  if (!token) {
    return NextResponse.json(
      {
        error: {
          token: "Token is missing",
        },
      },
      { status: 400 }
    );
  }

  if (!auth_date || !first_name || !hash || !id || !username || !photo_url) {
    return NextResponse.json(
      {
        error: {
          data: "Invalid data provided",
        },
      },
      { status: 400 }
    );
  }

  const checkString = `auth_date=${auth_date}\nfirst_name=${first_name}\nid=${id}\nphoto_url=${photo_url}\nusername=${username}`;
  const secret = crypto.createHash("sha256").update(token);
  const calculatedHash = crypto
    .createHmac("sha256", secret.digest())
    .update(checkString)
    .digest("hex");

  if (calculatedHash !== hash) {
    return NextResponse.json(
      {
        error: {
          hash: "Invalid hash provided",
        },
      },
      { status: 400 }
    );
  }

  // 2. Insert the request into the database
  const request = await supabase
    .from("requests")
    .insert({
      company_name: data.company_name,
      company_slug: data.slug,
      first_name,
      user_id: id,
      user_username: username,
      meta: {
        ...(data.meta || {}),
        source: "web",
      },
    })
    .select()
    .single();

  if (request.error) {
    captureException(request.error);

    return NextResponse.json(
      {
        error: {
          request: request.error,
        },
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
};
