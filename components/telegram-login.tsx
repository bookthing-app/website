"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/utils/cn";

export const TelegramLogin = ({
  className,
  lang = "uk",
  onAuth,
  botName,
}: {
  className?: string;
  lang?: "uk" | "en";
  onAuth: (data: any) => void;
  botName: string;
}) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = innerRef.current;

    // @ts-ignore
    window.TelegramLoginWidget = {
      onAuth,
    };

    const script = document.createElement("script");

    script.src = "https://telegram.org/js/telegram-widget.js?"; // + widgetVersion;

    script.setAttribute("data-telegram-login", botName);
    script.setAttribute("data-size", "large");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-userpic", "true");
    script.setAttribute("data-lang", lang);
    script.setAttribute("data-onauth", "TelegramLoginWidget.onAuth(user)");

    script.async = true;
    ref?.appendChild(script);

    return () => {
      ref?.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={innerRef} className={cn("telegram-auth", className)} />;
};
