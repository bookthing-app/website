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
          title="послуг краси"
          className="from-[#ee9ca7] to-[#ffdde1]"
          appUrl="https://bookthing.app/u/bookthing-beauty"
          referrer="beauty-page"
        />
        <About />
        <Problems />
        <Advantages />
        <Suspense>
          <Features />
        </Suspense>
        <CTA appUrl="https://bookthing.app/u/bookthing-beauty" referrer="beauty-page" />
      </main>
      <Footer />
    </>
  );
};

export { metadata } from "./metadata";

export default Page;
