"use client";

import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Footer from "@/components/footer";
import LandingHero from "@/components/hero";
import LandingContent from "@/components/landing-content";
import NavBar from "@/components/navbar";

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: any | null = null;

    const handleScroll = () => {
      setIsScrolling(true);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 500); // adjust the timeout value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isScrolling) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isScrolling]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down the video playback to half speed
    }
  }, []);

  return (
    <div className="relative h-full">
      {/* <div className="parllax__background" /> */}

      <div className="fixed top-0 left-0 -z-20  h-full w-full">
        <video
          ref={videoRef}
          // className="absolute top-0 left-0 h-full w-full object-cover filter brightness-75 contrast-125"
          // className="parllax__background w-full object-cover filter brightness-75 contrast-125"
          className="w-full h-full object-contain  filter brightness-75 contrast-125"
          src="/hero.webm"
          muted
          loop
          playsInline
        />
      </div>

      <div className=" z-20 ">
        <NavBar />
        <LandingHero />
        <LandingContent />
        <Footer />
      </div>
      {/* <Parallax pages={4} className="h-full z-20">
        <ParallaxLayer sticky={{ start: 0, end: 3.5 }} offset={0} speed={0.5}>
          <NavBar />
        </ParallaxLayer>

        <ParallaxLayer speed={0.5}>
          <LandingHero />
          <LandingContent />
          <Footer />
        </ParallaxLayer>
      </Parallax> */}
    </div>
  );
};

export default HomePage;
