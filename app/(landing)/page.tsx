import LandingHero from "@/components/hero";
import NavBar from "@/components/navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="h-[90dvh]  flex flex-col lg:h-screen  max-w-screen-xl px-6 xl:p-0 relativer">
        <NavBar />
        <LandingHero />
      </div>
    </div>
  );
};

export default HomePage;
