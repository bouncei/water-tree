"use client";

import PrincipleCard from "@/components/cards/principle-card";
import { ListMotion } from "@/components/motion/list-motion";
import Image from "next/image";
import React from "react";

const PrinciplesPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="py-14 md:py-16  flex flex-col items-center justify-center gap-3 md:gap-5 border-b-2 border-b-primary/70 ">
        <div className="text-2xl font-medium">Principles</div>

        <div className="flex flex-col justify-end gap-10">
          {/* TRUTH */}
          <ListMotion className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-32  items-center">
            <div className="relative flex-shrink-0 size-72 xl:size-96 ">
              <Image
                fill
                src="/truth.png"
                alt="truth image"
                className=" object-cover object-top "
              />
            </div>

            <ListMotion
              delay={0.7}
              className="flex flex-col gap-2 items-center text-center md:text-left md:items-start"
            >
              <div className="text-xl lg:text-2xl text-primary/70 font-medium">
                Truth
              </div>
              <div className="text-lg lg:text-xl font-medium leading-relaxed">
                Immutable & validated facts about the industry & other factors
                pertaining to the ventures we are investing in. This essentially
                means we are not attempting to reinvent the wheel.
              </div>
            </ListMotion>
          </ListMotion>

          {/* TRUTH */}
          <ListMotion className="w-full flex flex-col md:flex-row-reverse gap-12 lg:gap-20 xl:gap-32  items-center">
            <div className="relative flex-shrink-0 size-72 xl:size-96 ">
              <Image
                fill
                src="/faith.png"
                alt="faith image"
                className=" object-cover object-top "
              />
            </div>

            <ListMotion
              delay={0.7}
              className="flex flex-col gap-2 items-center text-center md:text-left md:items-start"
            >
              <div className="text-xl lg:text-2xl text-primary/70 font-medium">
                Faith
              </div>
              <div className="text-lg lg:text-xl font-medium leading-relaxed">
                Strong data-driven confidence in the concept, the business model
                & the team. This entails thorough research, market & design
                analyses including the employment of our proprietary optimality
                calculations & our venture selection algorithm.
              </div>
            </ListMotion>
          </ListMotion>

          {/* AUTONOMY */}
          <ListMotion className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-32  items-center">
            <div className="relative flex-shrink-0 size-72 xl:size-96 ">
              <Image
                fill
                src="/anatomy.png"
                alt="anatomy image"
                className=" object-cover object-top "
              />
            </div>

            <ListMotion
              delay={0.7}
              className="flex flex-col gap-2 items-center text-center md:text-left md:items-start"
            >
              <div className="text-xl lg:text-2xl text-primary/70 font-medium">
                Autonomy
              </div>
              <div className="text-lg lg:text-xl font-medium leading-relaxed">
                Giving the teams chosen to run the ventures freedom to operate
                with minimal interference. We believe that by recruiting
                seasoned professionals, giving them ownership & allowing them to
                build on our foundation, we will be able to build a diverse &
                self-organizing portfolio of ventures.
              </div>
            </ListMotion>
          </ListMotion>

          {/* TRUTH */}
          {/* <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-5 justify-end w-full">
            <h3 className="text-xl lg:text-3xl xl:text-4xl font-medium">
              Truth
            </h3>

            <PrincipleCard
              text="Immutable & validated facts about the industry & other factors
                pertaining to the ventures we are investing in. This essentially
                means we are not attempting to reinvent the wheel."
              imgPath="/truth.png"
            />
          </div> */}

          {/* FAITH */}
          {/* <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-5 justify-end w-full">
            <h3 className="text-xl lg:text-3xl xl:text-4xl font-medium">
              Faith
            </h3>

            <PrincipleCard
              text="Strong data-driven confidence in the concept, the business model
                & the team. This entails thorough research, market & design
                analyses including the employment of our proprietary optimality
                calculations & our venture selection algorithm."
              imgPath="/faith.png"
            />
          </div> */}

          {/* AUTONOMY */}
          {/* <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-5 justify-end w-full">
            <h3 className="text-xl lg:text-3xl xl:text-4xl font-medium">
              Autonomy
            </h3>

            <PrincipleCard
              text="Giving the teams chosen to run the ventures freedom to operate
                with minimal interference. We believe that by recruiting
                seasoned professionals, giving them ownership & allowing them to
                build on our foundation, we will be able to build a diverse &
                self-organizing portfolio of ventures."
              imgPath="/anatomy.png"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PrinciplesPage;
