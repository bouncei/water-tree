"use client";

import CustomTitle from "./custom-title";
import { Button } from "./ui/button";
import Image from "next/image";
import LandingContentCard from "./cards/landing-content-card";
import { motion } from "framer-motion";
import { ListMotion } from "./motion/list-motion";

const contentDummyData = [
  {
    name: "John Doe",
    position: "CEO",
    slogan: "We're established",
    brandName: "Brand",
    userImg:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    brandImg:
      "https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ298ZW58MHx8MHx8fDA%3D",
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor magni, ex totam aspernatur eligendi numquam quibusdam quia? Corporis eius, laboriosam neque cumque nam rem? Quae voluptatem deleniti voluptatibus quia mollitia temporibus error obcaecati eum possimus magnam, neque eaque facilis incidunt.",
  },

  {
    name: "Bob Smith",
    position: "CMO",
    slogan: "We're creative",
    brandName: "Brand",
    userImg:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    brandImg:
      "https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ298ZW58MHx8MHx8fDA%3D",
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor magni, ex totam aspernatur eligendi numquam quibusdam quia? Corporis eius, laboriosam neque cumque nam rem? Quae voluptatem deleniti voluptatibus quia mollitia temporibus error obcaec",
  },
];

const LandingContent = () => {
  return (
    <div className="mx-auto     max-w-screen-xl  px-6 xl:p-0">
      <div className="py-14 md:py-20 flex flex-col gap-20 border-b-2 border-b-primary/70 ">
        <CustomTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit " />

        <div className="flex items-center justify-between">
          <ListMotion className="flex w-[50%] flex-col gap-20">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              corrupti laborum accusantium est harum, nam quod sint praesentium
              aut rerum nihil unde odio quasi quia et. Error exercitationem,
              sunt nostrum, similique architecto praesentium iure earum sequi
              est qui eligendi, beatae quos debitis id consequatur voluptates?
            </div>
            <div>
              <Button variant="default" size="lg">
                Our Approach
              </Button>
            </div>
          </ListMotion>

          <div className="relative w-[45%] flex-shrink-0 h-full aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="approach"
              className="rounded-full"
              fill
            />
          </div>
        </div>

        {/* <CustomTitle text="For founders, by founders " />

        <div className="flex justify-between gap-20">
          <ListMotion className="w-full flex flex-col gap-20">
            {contentDummyData.map((item, index) => (
              <LandingContentCard
                key={index}
                name={item.name}
                position={item.position}
                slogan={item.slogan}
                brandName={item.brandName}
                userImg={item.userImg}
                brandImg={item.brandImg}
                quote={item.quote}
              />
            ))}
          </ListMotion>
          <ListMotion className="w-full py-32 flex flex-col gap-20">
            {contentDummyData.map((item, index) => (
              <LandingContentCard
                key={index}
                name={item.name}
                position={item.position}
                slogan={item.slogan}
                brandName={item.brandName}
                userImg={item.userImg}
                brandImg={item.brandImg}
                quote={item.quote}
              />
            ))}
          </ListMotion>
        </div> */}
        <div className="h-full flex flex-col">
          <div className="py-14 md:py-16  flex flex-col items-center justify-center gap-3 md:gap-5  ">
            <div className="text-2xl font-semibold">Our Guide</div>

            <div className="text-center text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              temporibus dolores inventore dicta, aliquid voluptatibus, sunt
              magni doloremque ullam autem est tempore ex reiciendis iste
              incidunt? Vel numquam doloremque obcaecati incidunt et, dolor sit
              magni recusandae ab delectus consectetur ratione dignissimos
              dolores similique tenetur minus. Blanditiis numquam unde saepe
              dolore?
            </div>

            <div className="flex py-12 lg:py-20 xl:py-32 flex-col justify-center gap-20 xl:gap-32 max-w-screen-lg">
              {/* DESIGN */}
              <ListMotion className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-32  items-center">
                <div className="relative flex-shrink-0 size-72 xl:size-96 ">
                  <Image
                    fill
                    src="/DESIGN.png"
                    alt="design image"
                    className=" object-cover object-top "
                  />
                </div>

                <ListMotion
                  delay={0.7}
                  className="flex flex-col gap-3 items-center text-center md:text-left md:items-start"
                >
                  <div className="text-lg lg:text-xl text-primary/70 font-medium">
                    Design
                  </div>
                  <div className="text-xl lg:text-2xl font-semibold leading-relaxed">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci molestiae
                  </div>
                  <div className="text-sm lg:text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Amet harum minima quaerat reiciendis non voluptatum debitis
                    a eum expedita quod quo corrupti quisquam, asperiores ex,
                    fuga dignissimos in quos dolorem.
                  </div>
                </ListMotion>
              </ListMotion>

              {/* SELECTION */}
              <ListMotion className="w-full flex flex-col md:flex-row-reverse gap-12 lg:gap-20 xl:gap-32  items-center">
                <div className="relative flex-shrink-0 size-72 xl:size-96 ">
                  <Image
                    fill
                    src="/SELECTION.png"
                    alt="selection image"
                    className=" object-cover object-top "
                  />
                </div>

                <ListMotion
                  delay={0.7}
                  className="flex flex-col gap-3 items-center text-center md:text-left md:items-start"
                >
                  <div className="text-lg lg:text-xl text-primary/70 font-medium">
                    Selection
                  </div>
                  <div className="text-xl lg:text-2xl font-semibold leading-relaxed">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci molestiae
                  </div>
                  <div className="text-sm lg:text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Amet harum minima quaerat reiciendis non voluptatum debitis
                    a eum expedita quod quo corrupti quisquam, asperiores ex,
                    fuga dignissimos in quos dolorem.
                  </div>
                </ListMotion>
              </ListMotion>

              {/* ACCESS */}
              <ListMotion className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-32  items-center">
                <div className="relative flex-shrink-0 size-72 xl:size-96 ">
                  <Image
                    fill
                    src="/ACCESS.png"
                    alt="investment image"
                    className=" object-cover  "
                  />
                </div>

                <ListMotion
                  delay={0.7}
                  className="flex flex-col gap-3 items-center text-center md:text-left md:items-start"
                >
                  <div className="text-lg lg:text-xl text-primary/70 font-medium">
                    Access
                  </div>
                  <div className="text-xl lg:text-2xl font-semibold leading-relaxed">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci molestiae
                  </div>
                  <div className="text-sm lg:text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Amet harum minima quaerat reiciendis non voluptatum debitis
                    a eum expedita quod quo corrupti quisquam, asperiores ex,
                    fuga dignissimos in quos dolorem.
                  </div>
                </ListMotion>
              </ListMotion>

              {/* INVESTMENT */}
              <ListMotion className="w-full flex flex-col md:flex-row-reverse gap-12 lg:gap-20 xl:gap-32  items-center">
                <div className="relative flex-shrink-0 size-72 xl:size-96 ">
                  <Image
                    fill
                    src="/INVESTMENT.png"
                    alt="investment image"
                    className=" object-cover object-top "
                  />
                </div>

                <ListMotion
                  delay={0.7}
                  className="flex flex-col gap-3 items-center text-center md:text-left md:items-start"
                >
                  <div className="text-lg lg:text-xl text-primary/70 font-medium">
                    Investment
                  </div>
                  <div className="text-xl lg:text-2xl font-semibold leading-relaxed">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci molestiae
                  </div>
                  <div className="text-sm lg:text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Amet harum minima quaerat reiciendis non voluptatum debitis
                    a eum expedita quod quo corrupti quisquam, asperiores ex,
                    fuga dignissimos in quos dolorem.
                  </div>
                </ListMotion>
              </ListMotion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
