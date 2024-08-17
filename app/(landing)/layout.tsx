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

      {/* Background Video */}
      {/* {pathname === "/" && (
        <>
          <video
            ref={videoRef}
            className="absolute top-0 left-0 h-full w-full object-cover filter brightness-75 contrast-125"
            src="/hero.webm"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-primary/30 -z-10 to-[#EBFFEB] pt-32 pb-8 pointer-events-none  absolute"></div>
        </>
      )} */}

      <div
        className={cn(
          "",
          pathname !== "/" &&
            "mx-auto h-full  z-10  max-w-screen-2xl bg-opacity-50 px-6 xl:p-0 relative"
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
