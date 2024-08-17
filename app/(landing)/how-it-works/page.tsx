"use client";

import { ListMotion } from "@/components/motion/list-motion";
import Image from "next/image";
import React from "react";

const HowPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="py-14 md:py-16  flex flex-col items-center justify-center gap-3 md:gap-5 border-b-2 border-b-primary/70 ">
        <div className="text-3xl font-semibold">Our Guide</div>

        <div className="text-center text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          temporibus dolores inventore dicta, aliquid voluptatibus, sunt magni
          doloremque ullam autem est tempore ex reiciendis iste incidunt? Vel
          numquam doloremque obcaecati incidunt et, dolor sit magni recusandae
          ab delectus consectetur ratione dignissimos dolores similique tenetur
          minus. Blanditiis numquam unde saepe dolore?
        </div>

        <div className="flex py-12 lg:py-20 xl:py-32 flex-col justify-center gap-20 xl:gap-32 max-w-screen-lg">
          {/* DESIGN */}
          <ListMotion className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-32  items-center">
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
              className="flex flex-col gap-3 items-center text-center md:text-left md:items-start"
            >
              <div className="text-lg lg:text-2xl text-primary/70 font-medium">
                Design
              </div>
              <div className="text-2xl lg:text-3xl font-semibold leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci molestiae
              </div>
              <div className="text-base lg:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                harum minima quaerat reiciendis non voluptatum debitis a eum
                expedita quod quo corrupti quisquam, asperiores ex, fuga
                dignissimos in quos dolorem.
              </div>
            </ListMotion>
          </ListMotion>

          {/* SELECTION */}
          <ListMotion className="w-full flex flex-col md:flex-row-reverse gap-12 lg:gap-20 xl:gap-32  items-center">
            <div className="relative flex-shrink-0 size-72 xl:size-96 ">
              <Image
                fill
                src="https://plus.unsplash.com/premium_photo-1700670283974-712d61ab372b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="selection image"
                className=" object-cover object-top rounded-full"
              />
            </div>

            <ListMotion
              delay={0.7}
              className="flex flex-col gap-3 items-center text-center md:text-left md:items-start"
            >
              <div className="text-lg lg:text-2xl text-primary/70 font-medium">
                Selection
              </div>
              <div className="text-2xl lg:text-3xl font-semibold leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci molestiae
              </div>
              <div className="text-base lg:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                harum minima quaerat reiciendis non voluptatum debitis a eum
                expedita quod quo corrupti quisquam, asperiores ex, fuga
                dignissimos in quos dolorem.
              </div>
            </ListMotion>
          </ListMotion>

          {/* ACCESS */}
          <ListMotion className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-32  items-center">
            <div className="relative flex-shrink-0 size-72 xl:size-96 ">
              <Image
                fill
                src="https://plus.unsplash.com/premium_photo-1700670283974-712d61ab372b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="access image"
                className=" object-cover object-top rounded-full"
              />
            </div>

            <ListMotion
              delay={0.7}
              className="flex flex-col gap-3 items-center text-center md:text-left md:items-start"
            >
              <div className="text-lg lg:text-2xl text-primary/70 font-medium">
                Access
              </div>
              <div className="text-2xl lg:text-3xl font-semibold leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci molestiae
              </div>
              <div className="text-base lg:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                harum minima quaerat reiciendis non voluptatum debitis a eum
                expedita quod quo corrupti quisquam, asperiores ex, fuga
                dignissimos in quos dolorem.
              </div>
            </ListMotion>
          </ListMotion>

          {/* INVESTMENT */}
          <ListMotion className="w-full flex flex-col md:flex-row-reverse gap-12 lg:gap-20 xl:gap-32  items-center">
            <div className="relative flex-shrink-0 size-72 xl:size-96 ">
              <Image
                fill
                src="https://plus.unsplash.com/premium_photo-1700670283974-712d61ab372b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="investment image"
                className=" object-cover object-top rounded-full"
              />
            </div>

            <ListMotion
              delay={0.7}
              className="flex flex-col gap-3 items-center text-center md:text-left md:items-start"
            >
              <div className="text-lg lg:text-2xl text-primary/70 font-medium">
                Investment
              </div>
              <div className="text-2xl lg:text-3xl font-semibold leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci molestiae
              </div>
              <div className="text-base lg:text-lg">
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

export default HowPage;
