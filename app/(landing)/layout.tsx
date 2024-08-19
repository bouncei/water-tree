"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow down the video playback to half speed
    }
  }, []);

  return (
    <main className="h-full overflow-auto  ">
      <div
        className={cn(
          "mx-auto h-full  z-10  max-w-screen-2xl bg-opacity-50 px-6 md:px-12 2xl:p-0 relative"
        )}
      >
        {pathname !== "/" && <NavBar />}
        {children}
        {pathname !== "/" && <Footer />}
      </div>
    </main>
  );
};

export default LandingPageLayout;
