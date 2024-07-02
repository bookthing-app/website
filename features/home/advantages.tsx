import { Suspense } from "react";

import { Notifications } from "@/components/ui/notifications";
import { PersonalLink } from "@/components/ui/personal-link";

import Image from "next/image";

export const Advantages = () => (
  <div className="flex flex-col justify-center items-center p-4 sm:p-16 py-16">
    <h2 className="font-bold text-5xl tracking-tight leading-none text-center">
      Основні{" "}
      <div className="relative">
        <span className="relative z-[1]">переваги</span>
        <svg
          viewBox="0 0 367 152"
          className="absoute top-full left-0 w-3/4 -rotate-12 translate-x-8 -translate-y-8 -z-[1] fill-[#41bdf6]"
        >
          <path d="M0.632211905,3.47949782 C6.43221191,8.47949782 12.4322119,13.2794978 18.4322119,18.0794978 C33.3322119,29.9794978 48.5322119,41.3794978 64.1322119,52.2794978 C83.8322119,66.1794978 104.132212,79.3794978 125.232212,91.0794978 C145.932212,102.679498 167.532212,113.179498 190.332212,120.179498 C200.332212,123.279498 210.532212,125.579498 220.932212,126.579498 C230.332212,127.479498 240.632212,127.479498 249.632212,124.479498 C256.632212,122.079498 262.732212,117.679498 267.132212,111.779498 C271.632212,105.779498 273.932212,98.7794978 274.532212,91.3794978 C275.832212,76.5794978 272.432212,61.6794978 265.032212,48.6794978 C257.432212,35.3794978 245.932212,22.4794978 230.032212,20.2794978 C224.832212,19.5794978 218.832212,20.3794978 216.832212,25.9794978 C215.632212,29.2794978 216.232212,33.0794978 217.132212,36.3794978 C218.732212,42.5794978 221.632212,48.4794978 224.632212,54.1794978 C232.032212,68.0794978 240.932212,80.8794978 252.032212,92.0794978 C270.532212,110.779498 293.332212,124.979498 317.332212,135.479498 C331.732212,141.779498 346.632212,147.179498 361.932212,150.679498 C362.632212,150.879498 363.432212,150.979498 364.132212,151.179498 C366.632212,151.679498 367.732212,147.879498 365.232212,147.279498 C354.832212,145.179498 344.532212,141.779498 334.532212,138.079498 C312.332212,129.879498 290.832212,118.879498 272.132212,104.379498 C261.232212,95.9794978 251.132212,86.2794978 242.732212,75.2794978 C237.832212,68.8794978 233.632212,62.0794978 229.732212,55.0794978 C226.532212,49.3794978 223.432212,43.3794978 221.532212,37.0794978 C220.932212,35.1794978 220.432212,33.1794978 220.332212,31.1794978 C220.232212,29.5794978 220.232212,28.6794978 220.632212,27.2794978 C220.832212,26.4794978 221.332212,25.7794978 221.932212,25.1794978 C222.332212,24.7794978 222.032212,25.0794978 222.132212,24.9794978 C222.332212,24.8794978 222.532212,24.6794978 222.832212,24.5794978 C222.932212,24.4794978 223.032212,24.4794978 223.132212,24.3794978 C223.532212,24.1794978 222.732212,24.5794978 223.132212,24.3794978 C223.432212,24.2794978 223.632212,24.1794978 223.932212,24.0794978 C225.632212,23.5794978 228.432212,23.7794978 230.232212,24.0794978 C237.232212,25.2794978 243.532212,28.7794978 248.732212,33.5794978 C260.732212,44.8794978 268.832212,61.3794978 270.532212,77.6794978 C271.132212,83.7794978 271.232212,90.3794978 269.832212,96.3794978 C268.232212,103.379498 264.432212,109.679498 258.932212,114.379498 C250.532212,121.579498 239.232212,122.879498 228.532212,122.679498 C219.032212,122.479498 209.532212,120.879498 200.332212,118.579498 C178.432212,112.979498 157.632212,103.579498 137.732212,93.0794978 C116.732212,81.9794978 96.5322119,69.3794978 76.8322119,55.9794978 C60.4322119,44.7794978 44.5322119,33.0794978 28.9322119,20.9794978 C20.7322119,14.5794978 12.6322119,8.07949782 4.63221191,1.27949782 C4.23221191,0.979497821 3.93221191,0.679497821 3.53221191,0.379497821 C1.53221191,-1.02050218 -1.26778809,1.77949782 0.632211905,3.47949782 L0.632211905,3.47949782 Z"></path>
        </svg>
      </div>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1200px]">
      <div className="grid grid-rows-[2fr_0.5fr] group row-span-2 h-auto sm:h-full relative">
        <div className="flex justify-center items-center bg-[#fbde8f] h-full overflow-hidden rounded-t-3xl">
          <div className="w-1/2">
            <Image
              src="/phone-all-in-one.png"
              alt="All in one place"
              height={872}
              width={428}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-[#f2f0ef] h-full rounded-b-3xl">
          <h3 className="text-2xl font-bold tracking-tight">
            Вся інформація на одному екрані
          </h3>
          <p className="text-lg text-muted-foreground tracking-tight">
            Більше ніякого хаосу в хайлайтсах або в сторісах. Вся інформація
            про доступні послуги, ціни, розташування філії та все інше в одному
            місці.
          </p>
        </div>
      </div>
      <div className="grid grid-rows-[1.5fr_0.5fr] group">
        <div className="flex justify-center items-center bg-[#a4c9fa] h-full rounded-t-3xl">
          <Suspense>
            <PersonalLink />
          </Suspense>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-[#f2f0ef] h-full rounded-b-3xl">
          <h3 className="text-2xl font-bold tracking-tight">
            Персональне посилання
          </h3>
          <p className="text-lg text-muted-foreground tracking-tight">
            Ваші клієнти завжди зможуть знайти вас в мережі та забронювати
            послугу.
          </p>
        </div>
      </div>
      <div className="grid grid-rows-[1.5fr_0.5fr] group">
        <div className="flex justify-center items-center bg-[#ffd3d3] h-full overflow-hidden rounded-t-3xl">
          <Image
            src="/available-timeslots.png"
            alt="Available timeslots"
            height={807}
            width={718}
            className="w-3/4"
          />
        </div>
        <div className="flex flex-col gap-4 p-6 bg-[#f2f0ef] h-full rounded-b-3xl">
          <h3 className="text-2xl font-bold tracking-tight">
            Автоматичне генерування вільного часу
          </h3>
          <p className="text-lg text-muted-foreground tracking-tight">
            Ви вказуєте ваш робочий розклад, а ми автоматично генеруємо вільні
            віконця для запису на ваші послуги.
          </p>
        </div>
      </div>
      <div className="grid grid-rows-[1.5fr_0.5fr] rounded-3xl h-full group">
        <div className="flex justify-center items-center bg-[#a0ccbc] overflow-hidden h-full rounded-t-3xl">
          <div className="w-1/2">
            <Image
              src="/calendars.png"
              alt="Calendars"
              height={800}
              width={523}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-[#f2f0ef] h-full rounded-b-3xl">
          <h3 className="text-2xl font-bold tracking-tight">
            Зручний календар бронюваннь
          </h3>
          <p className="text-lg text-muted-foreground tracking-tight">
            Уся інформація про бронювання в одному місці. Ви і ваші клієнти
            завжди зможете побачити бронювання на будь-яку дату у зручному
            форматі.
          </p>
        </div>
      </div>
      <div className="grid grid-rows-[2fr_1fr] group h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] lg:px-4 gap-2 justify-center items-center bg-[#9fe5fb] h-full overflow-hidden rounded-t-3xl">
          <div className="hidden lg:block py-8">
            <Image
              src="/reminders.png"
              alt="Reminders"
              height={730}
              width={292}
            />
          </div>
          <div className="relative h-full px-4">
            <Notifications />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-[#f2f0ef] h-full rounded-b-3xl">
          <h3 className="text-2xl font-bold tracking-tight">
            Автоматичні нагадування за вашими правилами
          </h3>
          <p className="text-lg text-muted-foreground tracking-tight">
            Налаштовуйте розклад автоматичних нагадувань, обирайте за скільки
            хвилин, годин або днів до початку події вони мають приходити, а
            додаток автоматично надішле їх вашим клієнтам у зазначений час.
          </p>
        </div>
      </div>
    </div>
  </div>
);
