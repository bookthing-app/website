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
        <Hero appUrl="https://bookthing.app/u/bookthing-beauty" referrer="homepage" />
        <About />
        <Problems />
        <Advantages />
        <Suspense>
          <Features />
        </Suspense>
        <CTA appUrl="https://bookthing.app/u/bookthing-beauty" referrer="homepage" />
      </main>
      <Footer />
    </>
  );
};

export default Page;
