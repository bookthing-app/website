"use client";

import { useEffect, useState } from "react";

import Script from "next/script";

import { usePathname } from "next/navigation";

import * as pixel from "@/lib/pixel";

export const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;

    pixel.pageview();
  }, [pathname, loaded]);

  return (
    <Script
      id="fb-pixel"
      src="/pixel.js"
      strategy="afterInteractive"
      onLoad={() => setLoaded(true)}
      data-pixel-id={pixel.FB_PIXEL_ID}
    />
  );
};
