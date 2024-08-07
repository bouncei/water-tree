"use client";

import NavBar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <main className="h-full overflow-auto  ">
      {/* FLOATING LEAF */}
      {/* <div className="fixed top-0 z-20 right-0">
        <div
          className=" size-28 sm:size-40 mt-14 "
          style={{
            backgroundImage: `url('/hero_header.webp')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        ></div>
      </div> */}

      <div
        className={cn("mx-auto h-full max-w-screen-xl px-6 xl:p-0 relative")}
      >
        {pathname !== "/" && <NavBar />}
        {children}
      </div>
    </main>
  );
};

export default LandingPageLayout;
