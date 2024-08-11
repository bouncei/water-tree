"use client";

import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Footer from "@/components/footer";
import LandingHero from "@/components/hero";
import LandingContent from "@/components/landing-content";
import NavBar from "@/components/navbar";

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down the video playback to half speed
    }
  }, []);

  return (
    <div>
      {/* <div className="parllax__background" /> */}
      <video
        ref={videoRef}
        // className="absolute top-0 left-0 h-full w-full object-cover filter brightness-75 contrast-125"
        className="parllax__background w-full object-cover filter brightness-75 contrast-125"
        src="/hero.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <Parallax pages={3.5} className=" ">
        <ParallaxLayer sticky={{ start: 0, end: 3.5 }} offset={0} speed={0.5}>
          <NavBar />
        </ParallaxLayer>

        <ParallaxLayer speed={0.5}>
          <LandingHero />
          <LandingContent />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default HomePage;
