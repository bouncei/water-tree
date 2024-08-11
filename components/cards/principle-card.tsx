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
        "bg-primary/80  rounded-t-xl sm:rounded-t-full sm:rounded-tr-none sm:rounded-l-full w-full  p-5 flex flex-col-reverse sm:flex-row  items-center text-sm"
        // imgPath === "/faith.png" && "max-w-[70vw] lg:max-w-screen-lg",
        // imgPath === "/anatomy.png" && "max-w-screen lg:max-w-screen-xl "
      )}
    >
      <div className="text-white text-xs  md:text-sm">{text}</div>
      <div className=" flex-shrink-0 relative size-32 lg:size-48">
        <Image fill alt={imgPath} className=" object-cover" src={imgPath} />
      </div>
    </div>
  );
};

export default PrincipleCard;
