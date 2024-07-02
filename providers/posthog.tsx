"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "always",
    capture_pageview: false,
    capture_pageleave: true,
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
}

export const PosthogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <PostHogProvider client={posthog}>{children}</PostHogProvider>;
