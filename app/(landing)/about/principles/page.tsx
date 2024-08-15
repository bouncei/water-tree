"use client";

import PrincipleCard from "@/components/cards/principle-card";
import { ListMotion } from "@/components/motion/list-motion";
import React from "react";

const PrinciplesPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="py-14 md:py-16  flex flex-col items-center justify-center gap-3 md:gap-5 border-b-2 border-b-primary/70 ">
        <div className="text-3xl  tracking-widest font-medium">Principles</div>

        <div className="flex flex-col justify-end gap-10">
          {/* TRUTH */}
          <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-5 justify-end w-full">
            <h3 className="text-xl lg:text-3xl xl:text-4xl font-medium">
              Truth
            </h3>

            <PrincipleCard
              text="Immutable & validated facts about the industry & other factors
                pertaining to the ventures we are investing in. This essentially
                means we are not attempting to reinvent the wheel."
              imgPath="/truth.png"
            />
          </div>

          {/* FAITH */}
          <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-5 justify-end w-full">
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
          </div>

          {/* AUTONOMY */}
          <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-5 justify-end w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesPage;
