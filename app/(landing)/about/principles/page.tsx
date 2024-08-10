import CustomTitle from "@/components/custom-title";
import Image from "next/image";
import React from "react";

const PrinciplesPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="py-14 md:py-16  flex flex-col items-center justify-center gap-3 md:gap-5 border-b-2 border-b-primary/70 ">
        <div className="text-3xl  tracking-widest font-medium">Principles</div>

        <div className="flex flex-col gap-10">
          {/* TRUTH */}
          <div className="">
            <CustomTitle
              text="TRUTH"
              className="text-lg lg:text-xl xl:text-xl"
            />
            <div className="flex flex-col-reverse md:flex-row items-center py-3 w-full gap-20 justify-between">
              <div>
                Immutable & validated facts about the industry & other factors
                pertaining to the ventures we are investing in. This essentially
                means we are not attempting to reinvent the wheel.
              </div>
              <div className=" flex-shrink-0 relative size-72">
                <Image
                  fill
                  alt="truth"
                  className=" rounded-full bg-background object-cover"
                  src="/truth.jpg"
                />
              </div>
            </div>
          </div>

          {/* FAITH */}
          <div className="">
            <CustomTitle
              text="FAITH"
              className="text-lg lg:text-xl xl:text-xl"
            />
            <div className="flex flex-col-reverse md:flex-row items-center py-3 w-full gap-20 justify-between">
              <div>
                Strong data-driven confidence in the concept, the business model
                & the team. This entails thorough research, market & design
                analyses including the employment of our proprietary optimality
                calculations & our venture selection algorithm.
              </div>
              <div className=" flex-shrink-0 relative size-72">
                <Image
                  fill
                  alt="faith"
                  className=" rounded-full bg-background object-cover"
                  src="/faith.jpg"
                />
              </div>
            </div>
          </div>

          {/* ANATOMY */}
          <div className="">
            <CustomTitle
              text="ANATOMY"
              className="text-lg lg:text-xl xl:text-xl"
            />
            <div className="flex flex-col-reverse md:flex-row items-center py-3 w-full gap-20 justify-between">
              <div>
                Giving the teams chosen to run the ventures freedom to operate
                with minimal interference. We believe that by recruiting
                seasoned professionals, giving them ownership & allowing them to
                build on our foundation, we will be able to build a diverse &
                self-organizing portfolio of ventures.
              </div>
              <div className=" flex-shrink-0 relative size-72">
                <Image
                  fill
                  alt="anatomy"
                  className=" rounded-full bg-background object-cover"
                  src="/anatomy.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesPage;
