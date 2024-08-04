"use client";

import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const dancingSpiritFont = Dancing_Script({ weight: "400", subsets: ["latin"] });

const Logo = () => {
  return (
    <Link href="/" className="flex items-center ">
      <div className="relative size-28 md:size-28 mr-2 -ml-10 ">
        <Image fill src="/logo.webp" alt="Logo" />
      </div>

      <h1
        className={cn("text-4xl -ml-6 font-bold", dancingSpiritFont.className)}
      >
        Leaftree
      </h1>
    </Link>
  );
};

export default Logo;
