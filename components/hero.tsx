"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ListMotion } from "./motion/list-motion";
import Link from "next/link";

const LandingHero = () => {
  return (
    <div className=" flex items-center justify-center mx-auto     max-w-screen-xl  px-6 xl:p-0 ">
      {/* Optional overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-black opacity-0 lg:opacity-20"></div> */}
      <div className="h-screen py-4 md:py-20  flex items-center justify-center gap-10  ">
        <div className="relative  w-full lg:w-[50%] ">
          <ListMotion className="w-full text-left space-y-4 sm:space-y-8 py-8">
            <div className="text-4xl lg:text-5xl xl:text-6xl font-bold relative">
              Investing in Human/Design-Centric{" "}
              <span className="text-primary">Innovations</span>
            </div>
            <p className=" text-sm sm:text-base lg::max-w-2xl mr-auto">
              We curate ventures based on their: Purpose (Design), Scalability,
              Sustainability amounting in/leading to Human-Centric Approach/Well
              Being.
            </p>

            <Button
              variant="default"
              size="lg"
              // onClick={() => setShowForm(true)}
              asChild
            >
              <Link href="/how-it-works">How It Works</Link>
            </Button>
          </ListMotion>
        </div>

        <div className=" hidden lg:flex flex-shrink-0   w-[50%] h-full  relative">
          <Image
            src="/hero1.webp"
            alt="hero image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
