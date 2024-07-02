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
        <Hero title="консультацій" className="from-[#11998e] to-[#38ef7d]" />
        <About />
        <Problems />
        <Advantages />
        <Suspense>
          <Features />
        </Suspense>
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export { metadata } from "./metadata";

export default Page;
