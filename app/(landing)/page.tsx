import LandingHero from "@/components/hero";
import NavBar from "@/components/navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="h-[90dvh]  flex flex-col lg:h-screen   relative">
        <NavBar />
        <LandingHero />
      </div>
    </div>
  );
};

export default HomePage;
