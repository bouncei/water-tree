import NavBar from "@/components/navbar";
import { cn } from "@/lib/utils";
import React from "react";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  // TODO: GET ALL JOBS
  // TODO: GET ALL COMPANIES

  return (
    <main className="h-full overflow-auto ">
      {/* FLOATING LEAF */}
      <div className="fixed top-0  right-0">
        <div
          className=" size-64 z-10 bg-white"
          style={{
            backgroundImage: `url('/hero_header.webp')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        ></div>
      </div>

      <div
        className={cn("mx-auto h-full max-w-screen-xl px-6 xl:p-0 relative")}
      >
        <NavBar />
        {children}
      </div>
    </main>
  );
};

export default LandingPageLayout;
