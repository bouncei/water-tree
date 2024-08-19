"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ListMotion } from "./motion/list-motion";
import Link from "next/link";

const LandingHero = () => {
  return (
    <div className=" flex items-center  ">
      {/* Optional overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-black opacity-0 lg:opacity-20"></div> */}
      <div className="h-full lg:h-screen py-4 md:py-20  flex items-center justify-center gap-10  ">
        <div className="relative  w-full  ">
          <ListMotion className="w-full text-left space-y-4 sm:space-y-8 py-8">
            <div className="text-3xl lg:text-8xl font-semibold  relative">
              Investing in Design-Centric{" "}
              <span className="text-primary">Innovations</span>
            </div>
            <p className="  mr-auto">
              We curate ventures based on their: Purpose, Scalability &
              Sustainability leading to the development of products that
              stimulate Well Being.
            </p>

            <Button
              variant="default"
              size="lg"
              // onClick={() => setShowForm(true)}
              asChild
            >
              <Link href="#how-it-works">How It Works</Link>
            </Button>
          </ListMotion>
        </div>

        {/* <div className="">
          <div className=" hidden lg:flex w-full  h-full  relative">
            <Image
              src="/hero1.webp"
              alt="hero image"
              fill
              className="object-cover"
            />
          </div>
        </div> */}
        <div className="hidden lg:flex relative w-[75%]  h-full aspect-square">
          <Image
            src="/hero1.webp"
            alt="approach"
            className=" object-cover"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
