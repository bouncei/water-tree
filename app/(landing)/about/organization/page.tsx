"use client";

import { ListMotion } from "@/components/motion/list-motion";
import Image from "next/image";
import React from "react";

const OrganizationPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="py-14 md:py-16  flex flex-col items-center justify-center gap-3 md:gap-5 border-b-2 border-b-primary/70 ">
        <div className="text-3xl lg:text-9xl font-semibold">Organization</div>

        <div className="text-center  lg:w-[80%]">
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

        <div className="flex flex-col gap-32 py-20">
          {/* WATER */}
          <ListMotion className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-32  items-center">
            <div className="relative flex-shrink-0 size-80 lg:size-[80vh] ">
              <Image
                fill
                src="https://images.unsplash.com/photo-1446608943998-cbd52b140335?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhdGVyJTIwbGVhZnxlbnwwfHwwfHx8MA%3D%3D"
                alt="truth image"
                className=" object-cover object-top rounded-full "
              />
            </div>

            <ListMotion
              delay={0.6}
              className="flex flex-col gap-5 items-center text-center md:text-left md:items-start"
            >
              <div className="text-3xl lg:text-9xl text-primary/70 font-medium">
                WATER
              </div>
              <div className="  leading-relaxed">
                <ListMotion
                  delay={0.8}
                  className="list-disc flex flex-col gap-5"
                >
                  <li>
                    <b className="text-primary/70">Design:</b> Water takes a
                    unique approach to design, leveraging Artificial
                    Intelligence to create products & services of the future.
                  </li>
                  <li>
                    <b className="text-primary/70">Exploration:</b> Water
                    approaches design research as a journey into the unknown,
                    developing designs to the point of execution through their
                    own exploration methodology.
                  </li>
                  <li>
                    <b className="text-primary/70">Propagation:</b> Water
                    believes in a Utilitarian Well-Being, that is creating a
                    state of well-being for more people than not. To do this the
                    designs must reach the mass market & this is done through
                    the propagation of the results of their exploration work.
                  </li>

                  <li>
                    <b className="text-primary/70">Consulting:</b> Water offers
                    additional consulting services to clients interested in our
                    designs to assist with product diversification, distribution
                    & manufacturing. the propagation of the results of their
                    exploration work.
                  </li>
                </ListMotion>
              </div>
            </ListMotion>
          </ListMotion>

          {/* LEAFTREE */}
          <ListMotion className="w-full flex flex-col md:flex-row-reverse gap-12 lg:gap-20 xl:gap-32  items-center">
            <div className="relative flex-shrink-0 size-80 lg:size-[80vh] ">
              <Image
                fill
                src="https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhZnxlbnwwfHwwfHx8MA%3D%3D"
                alt="leaf tree image"
                className=" object-cover object-top rounded-full "
              />
            </div>

            <ListMotion
              delay={0.6}
              className="flex flex-col gap-5 items-center text-center md:text-left md:items-start"
            >
              <div className="text-3xl lg:text-9xl text-primary/70 font-medium">
                LEAFTREE
              </div>
              <div className="  leading-relaxed">
                <ListMotion
                  delay={0.8}
                  className="list-disc flex flex-col gap-5"
                >
                  <li>
                    <b className="text-primary/70">Venture Innovation:</b>{" "}
                    LeafTree is tasked with bringing to life some of the designs
                    Water deems as venturable with the aid of a proprietary
                    algorithm that takes things like the technical feasibility,
                    resource availability, risk assessment, revenue potential &
                    more into consideration.
                  </li>
                  <li>
                    <b className="text-primary/70">Financing/Investment:</b> By
                    providing the initial startup capital needed for the venture
                    to get to market, LeafTree supports the founding team to
                    overcome startup inertia. LeafTree is also raising funds to
                    support the company through subsequent fundraising rounds.
                  </li>
                </ListMotion>
              </div>
            </ListMotion>
          </ListMotion>

          {/* FIT PROGRAM */}
          <ListMotion className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-32  items-center">
            <div className="relative flex-shrink-0 size-80 lg:size-[80vh] ">
              <Image
                fill
                src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="truth image"
                className=" object-cover object-top rounded-full "
              />
            </div>

            <ListMotion
              delay={0.6}
              className="flex flex-col gap-5 items-center text-center md:text-left md:items-start"
            >
              <div className="text-3xl lg:text-9xl text-primary/70 font-medium">
                FIT PROGRAM
              </div>
              <div className="  leading-relaxed">
                <ListMotion
                  delay={0.8}
                  className="list-disc flex flex-col gap-5"
                >
                  <li>
                    <b className="text-primary/70">Team Building:</b> The FIT
                    program is designed as a platform to build the founding team
                    of the ventures that LeafTree is backing. In our approach,
                    the team is the most essential piece & can make or break the
                    venture. We spend time & resources recruiting the best
                    people based on skill, experience & education to lead our
                    ventures.
                  </li>
                  <li>
                    <b className="text-primary/70">Knowledge Exchange:</b> The
                    program is also an avenue via which we transfer all the
                    exploration knowledge that Water has gathered during the
                    design phase to the founding team. It is a period of
                    assimilation & bonding through learning.
                  </li>
                  <li>
                    <b className="text-primary/70">Mentorship:</b> The program
                    is also designed to tap into Water & LeafTree&apos;s rich
                    network of leaders & professionals to offer support through
                    mentorship to the founders we have selected.
                  </li>

                  <li>
                    <b className="text-primary/70">Get-To-Market:</b> The main
                    goal of the program is to offer guidance or act as “training
                    wheels” till the venture gets a product to the market. Our
                    standard GTM target is 6 to 8 months maximum*. This is
                    because Water has already done the heavy research & design
                    work, all that is left is the execution.
                  </li>
                </ListMotion>
              </div>
            </ListMotion>
          </ListMotion>

          {/* TRUTH */}
          {/* <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-5 justify-end w-full">
            <h3 className="text-2xl lg:text-4xl xl:text-4xl font-medium">
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
            <h3 className="text-2xl lg:text-4xl xl:text-4xl font-medium">
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
            <h3 className="text-2xl lg:text-4xl xl:text-4xl font-medium">
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

export default OrganizationPage;
