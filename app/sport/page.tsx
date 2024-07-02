import { Suspense } from "react";

import { Hero } from "@/features/home/hero";
import { About } from "@/features/home/about";
import { Problems } from "@/features/home/problems";
import { Advantages } from "@/features/home/advantages";
import { Features } from "@/features/home/features";
import { CTA } from "@/features/home/cta";
import { Footer } from "@/features/home/footer";

const Page = () => {
  return (
    <>
      <main>
        <Hero
          title="тренувань"
          className="from-[#00B4DB] to-[#0083B0]"
          appUrl="https://bkth.link/xFzE2vg"
          referrer="sport-page"
        />
        <About />
        <Problems />
        <Advantages />
        <Suspense>
          <Features />
        </Suspense>
        <CTA appUrl="https://bkth.link/xFzE2vg" referrer="sport-page" />
      </main>
      <Footer />
    </>
  );
};

export { metadata } from "./metadata";

export default Page;
