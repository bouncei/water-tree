import LandingHero from "@/components/hero";
import LandingContent from "@/components/landing-content";
import NavBar from "@/components/navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col border-b-2 border-b-primary/70">
      <div className="h-full flex flex-col lg:h-screen   relative">
        <NavBar />
        <LandingHero />

        <LandingContent />
      </div>
    </div>
  );
};

export default HomePage;
