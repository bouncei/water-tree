import React from "react";
import CustomTitle from "./custom-title";
import { Button } from "./ui/button";
import Image from "next/image";
import LandingContentCard from "./cards/landing-content-card";

const contentDummyData = [
  {
    left: [],
    right: [],
  },
];

const LandingContent = () => {
  return (
    <div className="py-14 md:py-20 flex flex-col gap-20 ">
      <CustomTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit " />

      <div className="flex items-start justify-between">
        <div className="flex w-[50%] flex-col gap-20">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            corrupti laborum accusantium est harum, nam quod sint praesentium
            aut rerum nihil unde odio quasi quia et. Error exercitationem, sunt
            nostrum, similique architecto praesentium iure earum sequi est qui
            eligendi, beatae quos debitis id consequatur voluptates?
          </div>
          <div>
            <Button variant="default" size="lg">
              Our Approach
            </Button>
          </div>
        </div>

        <div className="relative w-[45%] h-full aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="approach"
            className="rounded"
            fill
          />
        </div>
      </div>

      <CustomTitle text="For founders, by founders " />

      <div className="flex justify-between ">
        <div className="w-[40%] flex flex-col gap-20">
          {[0, 0, 0].map((user, index) => (
            <LandingContentCard
              key={index}
              name="John Doe"
              position="CEO"
              slogan="We're established"
              brandName="Brand"
              userImg="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
              brandImg="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ298ZW58MHx8MHx8fDA%3D"
              quote="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor magni, ex totam aspernatur eligendi numquam quibusdam quia? Corporis eius, laboriosam neque cumque nam rem? Quae voluptatem deleniti voluptatibus quia mollitia temporibus error obcaecati eum possimus magnam, neque eaque facilis incidunt."
            />
          ))}
        </div>
        <div className="w-[40%] py-32 flex flex-col gap-20">
          {[0, 0, 0].map((user, index) => (
            <LandingContentCard
              key={index}
              name="John Doe"
              position="CEO"
              slogan="We're established"
              brandName="Brand"
              userImg="https://images.unsplash.com/photo-1600878459138-e1123b37cb30?q=80&w=3406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              brandImg="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ298ZW58MHx8MHx8fDA%3D"
              quote="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor magni, ex totam aspernatur eligendi numquam quibusdam quia? Corporis eius, laboriosam neque cumque nam rem? Quae voluptatem deleniti voluptatibus quia mollitia temporibus error obcaecati eum possimus magnam, neque eaque facilis incidunt."
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
