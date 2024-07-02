import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const CTA = ({
  appUrl,
  referrer,
}: {
  appUrl?: string;
  referrer?: string;
}) => (
  <div id="cta" className="flex justify-center p-4 sm:p-16">
    <div className="flex flex-col justify-center items-center gap-8 p-12 py-24 rounded-3xl max-w-[1200px] w-full relative bg-gradient-to-br from-[#2e89c7] to-[#96cfeb]">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-5xl text-center font-bold text-white">
          Надайте найзручніший спосіб бронювання для ваших клієнтів
        </h2>
        <p className="text-lg tracking-tight text-white text-center max-w-[600px]">
          Створіть додаток з bookthing вже сьогодні.
        </p>
      </div>
      <Button size="lg" variant="secondary" asChild>
        <Link
          href={{
            pathname: "/signup",
            query: {
              ref: referrer,
            },
          }}
        >
          Почати безкоштовно
        </Link>
      </Button>
      <Link href={appUrl || "https://bkth.link/lWv4asq"} className="group">
        <span className="flex items-center gap-2 font-medium cursor-pointer text-white">
          Демонстраційний додаток
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </div>
  </div>
);
