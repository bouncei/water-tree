import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface PrincipleCardProps {
  text: string;
  imgPath: string;
}

// max-w-[50vw] lg:max-w-screen-md
const PrincipleCard = ({ text, imgPath }: PrincipleCardProps) => {
  return (
    <div
      className={cn(
        "bg-primary/80  rounded-t-xl lg:rounded-t-full lg:rounded-tr-none lg:rounded-l-full w-full  p-5 lg:py-0 lg:pr-0 flex flex-col-reverse lg:flex-row gap-5 lg:gap-0  items-center text-sm"
        // imgPath === "/faith.png" && "max-w-[70vw] lg:max-w-screen-lg",
        // imgPath === "/anatomy.png" && "max-w-screen lg:max-w-screen-xl "
      )}
    >
      <div className="text-white text-xs  md:text-sm lg:pr-5">{text}</div>
      <div className=" flex-shrink-0 z-10 relative size-44  lg:size-48">
        <Image
          fill
          alt={imgPath}
          className=" object-cover lg:bg-[#EBFFEB]"
          src={imgPath}
        />
      </div>
    </div>
  );
};

export default PrincipleCard;
