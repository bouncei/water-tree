"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const LandingHero = () => {
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    where: "", // How did you hear about us field
  });
  const [steps, setSteps] = useState(1);

  const formSteps = () => {
    // TODO
  };

  return (
    <div className=" flex items-center justify-center ">
      {/* Optional overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-black opacity-0 lg:opacity-20"></div> */}
      <div className="py-4 md:py-16  flex items-center justify-center gap-10 border-b-2 border-b-primary/70 ">
        <div className="relative  w-full lg:w-[50%] ">
          <div className="w-full text-left space-y-4 sm:space-y-8 py-8">
            <div className="text-4xl lg:text-5xl xl:text-6xl font-bold relative">
              Financing <span className="text-primary">Innovation</span>
            </div>
            <p className=" text-sm sm:text-base lg::max-w-2xl mr-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit tenetur perferendis blanditiis autem laudantium
              omnis, eum atque, quis quia corporis officiis quidem. Dicta itaque
              delectus eaque ratione nisi illo at?
            </p>

            <Button variant="default" size="lg">
              Request More Info
            </Button>
          </div>
        </div>

        <div className=" hidden md:flex ml-auto    w-[50%] h-80  relative">
          <Image src="/hero.webp" alt="hero image" fill />
          {/* // TODO: PUT A TREE IMAGE HERE */}
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
