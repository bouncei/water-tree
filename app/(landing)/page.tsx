import Footer from "@/components/footer";
import LandingHero from "@/components/hero";
import LandingContent from "@/components/landing-content";
import NavBar from "@/components/navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col ">
      <div className="h-full flex flex-col  relative">
        <NavBar />

        <div
          className="relative w-full"
          // style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        >
          <LandingHero />
        </div>

        <LandingContent />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
