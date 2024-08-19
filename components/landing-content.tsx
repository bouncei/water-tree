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
    <div className="py-14 md:py-20 flex flex-col gap-20 border-b-2 border-b-primary/70 ">
      <div className=" flex items-center flex-col-reverse lg:flex-row  gap-10 lg:gap-0 lg:justify-between">
        <ListMotion className="flex w-full lg:w-[50%] flex-col gap-20">
          <div>
            <div className="text-4xl lg:text-9xl font-semibold">
              Our Mission
            </div>
            <br />
            Our Mission is Simple: to Finance Innovation with a Conscience
            <br />
            <br />
            Conscience [&apos;kɒnʃ(ə)ns]: a moral sense of right & wrong, viewed
            as acting as a guide to one&apos;s behavior
          </div>
        </ListMotion>

        <div className="relative w-full lg:w-[45%] lg:-mr-28 -mr-12 md:-mr-16 2xl:p-0 h-full aspect-square">
          <Image src="/9.png" alt="approach" className="" fill />
        </div>
      </div>

      <div className="h-full flex flex-col" id="how-it-works">
        <div className="py-14 md:py-16  flex flex-col items-center justify-center gap-3 md:gap-5  ">
          <div className="text-4xl lg:text-9xl font-semibold">Our Guide</div>

          {/* <div className="lg:w-[80%] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              temporibus dolores inventore dicta, aliquid voluptatibus, sunt
              magni doloremque ullam autem est tempore ex reiciendis iste
              incidunt? Vel numquam doloremque obcaecati incidunt et, dolor sit
              magni recusandae ab delectus consectetur ratione dignissimos
              dolores similique tenetur minus. Blanditiis numquam unde saepe
              dolore?
            </div> */}

          <div className="flex py-12 lg:py-20 xl:py-32 flex-col justify-center gap-20 xl:gap-32 max-w-screen-lg">
            {/* DESIGN */}
            <ListMotion className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-32  items-center">
              <div className="relative flex-shrink-0 size-72 xl:size-[50vh]">
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
                <div className="text-3xl lg:text-6xl text-primary/70 font-medium uppercase">
                  Design
                </div>
                <div className=" font-semibold leading-relaxed">
                  WE PUT STRONG EMPHASIS ON FUNCTIONALITY
                </div>
                <div className="">
                  Water Designs new product & service concepts with
                  sustainability & well-being in focus. The designs by default
                  have high market potential & create a quality of wellness for
                  the end-users of the products
                </div>
              </ListMotion>
            </ListMotion>

            {/* SELECTION */}
            <ListMotion className="w-full flex flex-col md:flex-row-reverse gap-12 lg:gap-20 xl:gap-32  items-center">
              <div className="relative flex-shrink-0 size-72 xl:size-[50vh] ">
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
                <div className="text-3xl lg:text-6xl text-primary/70 font-medium uppercase">
                  Selection
                </div>
                <div className=" font-semibold leading-relaxed">
                  THERE IS A METHOD TO OUR MADNESS
                </div>
                <div className="">
                  We use a proprietary Algorithm to determine Venturable Designs
                  based on things such as Technical Feasibility, Resources
                  Availability, Risk, Revenue Potential, Competitive Advantage &
                  Exit Strategy
                </div>
              </ListMotion>
            </ListMotion>

            {/* ACCESS */}
            <ListMotion className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-32  items-center">
              <div className="relative flex-shrink-0 size-72 xl:size-[50vh] ">
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
                <div className="text-3xl lg:text-6xl text-primary/70 font-medium uppercase">
                  Access
                </div>
                <div className=" font-semibold leading-relaxed">
                  OUR NETWORK IS OUR LIFE FORCE
                </div>
                <div className="">
                  LeafTree Presents the Ventures as investment opportunities to
                  our network of Investors. They receive all the information
                  they require to make an informed investment decision about our
                  ventures.
                </div>
              </ListMotion>
            </ListMotion>

            {/* INVESTMENT */}
            <ListMotion className="w-full flex flex-col md:flex-row-reverse gap-12 lg:gap-20 xl:gap-32  items-center">
              <div className="relative flex-shrink-0 size-72 xl:size-[50vh] ">
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
                <div className="text-3xl lg:text-6xl text-primary/70 font-medium uppercase">
                  Investment
                </div>
                <div className=" font-semibold leading-relaxed">
                  CASH IS MOBILIZED
                </div>
                <div className="">
                  The Investors vet & choose their ventures of interest & deploy
                  the cash needed to support the ventures. The founding team
                  selected to run the venture receives the cash as well as
                  support from the LeafTree team through the foundation of the
                  venture till they successfully get to market.
                </div>
              </ListMotion>
            </ListMotion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
