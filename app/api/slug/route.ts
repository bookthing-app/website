import { NextRequest, NextResponse } from "next/server";

import { captureException } from "@sentry/nextjs";

import { supabase } from "@/utils/supabase";

export const POST = async (req: NextRequest) => {
  const { slug } = await req.json();

  if (!slug) {
    captureException({
      error: "Slug missing",
    });

    return NextResponse.json(
      {
        error: {
          slug: "Обов'язкове поле",
        },
      },
      { status: 400 }
    );
  }

  if (slug.length < 3) {
    return NextResponse.json(
      {
        error: {
          slug: "Мінімум 3 символи",
        },
      },
      { status: 400 }
    );
  }

  if (slug.length > 64) {
    return NextResponse.json(
      {
        error: {
          slug: "Максимум 64 символи",
        },
      },
      { status: 400 }
    );
  }

  const companies = supabase
    .from("companies")
    .select("", { count: "exact", head: true })
    .eq("slug", slug)
    .throwOnError();
  const requests = supabase
    .from("requests")
    .select("", { count: "exact", head: true })
    .eq("company_slug", slug)
    .throwOnError();

  try {
    const [existing, requested] = await Promise.all([companies, requests]);

    if (existing.error || requested.error) {
      captureException({
        existing: existing.error,
        requested: requested.error,
      });

      return NextResponse.json(
        {
          error: {
            existing: existing.error,
            requested: requested.error,
          },
        },
        { status: 500 }
      );
    }

    if ((existing?.count || 0) > 0 || (requested?.count || 0) > 0) {
      return NextResponse.json(
        {
          error: {
            slug: "Цей ідентифікатор вже зайнятий",
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ data: "ok" }, { status: 200 });
  } catch (error) {
    captureException(error);

    return NextResponse.json(
      {
        error: {
          slug: error,
        },
      },
      { status: 500 }
    );
  }
};
