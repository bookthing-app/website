"use client";

import { Link } from "lucide-react";

import { useSearchParams } from "next/navigation";

export const PersonalLink = () => {
  const searchParams = useSearchParams();

  return (
    <div className="flex items-center gap-2 rounded-[10rem] px-9 py-3 bg-white shadow-none group-hover:shadow-xl group-hover:scale-110 transition-transform">
      <Link className="size-6" />
      <span className="font-medium text-xl">
        bookthing.app/u/
        <span className="text-[#2A72D9]">
          {searchParams.get("slug") || "you"}
        </span>
      </span>
    </div>
  );
};
