"use client";

import { ListMotion } from "@/components/motion/list-motion";
import Image from "next/image";
import React from "react";

const OrganizationPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="py-14 md:py-16  flex flex-col items-center justify-center gap-3 md:gap-5 border-b-2 border-b-primary/70 ">
        <div className="text-2xl font-semibold">Organization</div>

        <div className="text-center">
          <b className="text-primary/70">WATER</b> is the parent company of
          LeafTree. It is a design innovation company with a focus on designing
          sustainable products & services that stimulate a general state of
          well-being. Water has curated a library of over 100 futuristic designs
          & aims to be at the forefront of innovation by bringing some of these
          designs to life through LeafTree. <br /> <br />
          We have set up the{" "}
          <b className="text-primary/70">
            Founder-In-Training (FIT) PROGRAM
          </b>{" "}
          as our channel for recruiting the founders that will run our ventures.
          Through the program we transfer our knowledge & research to the
          respective ventures, equipping the founders for the road ahead.
        </div>

        <div className="flex mt-16  flex-col justify-center gap-20 xl:gap-32 max-w-screen-lg">
          {/* DESIGN */}
          <ListMotion className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-32  items-start">
            <div className="relative flex-shrink-0 size-72 xl:size-96 ">
              <Image
                fill
                src="https://plus.unsplash.com/premium_photo-1700670283974-712d61ab372b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="design image"
                className=" object-cover object-top rounded-full"
              />
            </div>

            <ListMotion
              delay={0.7}
              className="flex flex-col gap-2 items-center text-center md:text-left md:items-start"
            >
              <div className="text-base lg:text-lg text-primary/70 font-medium">
                Design
              </div>
              <div className="text-lg lg:text-xl font-semibold leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci molestiae
              </div>
              <div className="text-xs lg:text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                harum minima quaerat reiciendis non voluptatum debitis a eum
                expedita quod quo corrupti quisquam, asperiores ex, fuga
                dignissimos in quos dolorem.
              </div>
            </ListMotion>
          </ListMotion>
        </div>
      </div>
    </div>
  );
};

export default OrganizationPage;
