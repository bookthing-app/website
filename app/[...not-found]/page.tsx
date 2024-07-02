import { AnimatedEmoji } from "@/components/animated-emoji";

import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <main className="flex flex-col gap-3 items-center justify-center h-screen p-4 relative">
      <AnimatedEmoji src="/eyes.tgs" className="size-[100px]" />
      <h1 className="font-bold text-3xl text-center">404</h1>
      <p className="text-center">
        Ой, такої сторінки не існує. Можливо ви використали невірне посилання.
      </p>
      <Link href="/" className="underline">
        Повернутися на головну
      </Link>
      <Image
        src="/bg-grid.webp"
        alt="Background grid"
        width={2880}
        height={1356}
        className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 opacity-5 -z-[1]"
      />
    </main>
  );
};

export default Page;
