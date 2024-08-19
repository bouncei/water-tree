"use client";

import { ListMotion } from "@/components/motion/list-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const PrinciplesPage = () => {
  return (
    <div className="h-full flex flex-col ">
      <div className="py-14 md:py-16    flex  gap-3 lg:gap-32 border-b-2 border-b-primary/70 justify-between ">
        {/* LEFT SIDE: TITLE  */}
        <div
          className="sticky top-0 flex flex-col gap-5 "
          style={{
            position: "sticky",
            top: 0,
          }}
        >
          <div className="text-3xl font-semibold">Principles</div>

          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            pariatur ad in eum officiis ducimus eos, voluptatem laudantium
            vitae! Voluptate.
          </div>

          <div className="">
            Our principles is rooted in three unique parts:
          </div>
        </div>

        {/* RIGHT SIDE: DETAILS */}
        <ListMotion className="flex flex-col gap-10 ">
          {/* TRUTH */}
          <ListMotion className="flex flex-col gap-8">
            <div className="relative  size-52 xl:size-72 ">
              <Image
                fill
                src="/truth.png"
                alt="truth image"
                className=" object-cover object-top "
              />
            </div>

            <div className="text-3xl lg:text-9xl text-primary/70 font-medium">
              TRUTH
            </div>
            <div className="">
              Immutable & validated facts about the industry & other factors
              pertaining to the ventures we are investing in. This essentially
              means we are not attempting to reinvent the wheel.
            </div>
          </ListMotion>

          {/* FAITH */}
          <ListMotion className="flex flex-col gap-8">
            <div className="relative  size-52 xl:size-72 ">
              <Image
                fill
                src="/faith.png"
                alt="faith image"
                className=" object-cover object-top "
              />
            </div>

            <div className="text-3xl lg:text-3xl text-primary/70 font-medium">
              FAITH
            </div>
            <div>
              Strong data-driven confidence in the concept, the business model &
              the team. This entails thorough research, market & design analyses
              including the employment of our proprietary optimality
              calculations & our venture selection algorithm.
            </div>
          </ListMotion>

          {/* AUTONOMY */}
          <ListMotion className="flex flex-col gap-8">
            <div className="relative  size-52 xl:size-72 ">
              <Image
                fill
                src="/anatomy.png"
                alt="anatomy image"
                className=" object-cover object-top "
              />
            </div>

            <div className="text-3xl lg:text-3xl text-primary/70 font-medium">
              AUTONOMY
            </div>
            <div>
              Giving the teams chosen to run the ventures freedom to operate
              with minimal interference. We believe that by recruiting seasoned
              professionals, giving them ownership & allowing them to build on
              our foundation, we will be able to build a diverse &
              self-organizing portfolio of ventures.
            </div>
          </ListMotion>
        </ListMotion>
      </div>
    </div>
  );
};

export default PrinciplesPage;
