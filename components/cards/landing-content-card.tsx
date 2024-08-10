import Image from "next/image";
import React from "react";
import { ListMotion } from "../motion/list-motion";

interface LandingContentCardProps {
  name: string;
  userImg: string;
  position: string;
  slogan: string;
  brandName: string;
  brandImg: string;
  quote: string;
}

const LandingContentCard = ({
  name,
  position,
  slogan,
  userImg,
  brandImg,
  brandName,
  quote,
}: LandingContentCardProps) => {
  return (
    <ListMotion className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-7">
        <div className="relative flex-shrink-0 size-96 ">
          <Image
            fill
            src={userImg}
            alt="brand image"
            className=" object-cover object-top rounded-full"
          />
        </div>

        <div className="text-primary text-pretty text-lg">{slogan}</div>
      </div>

      <div className=" tracking-wide leading-loose text-muted-foreground">
        &quot;{quote}&quot;
      </div>

      <div className=" tracking-wide leading-loose text-muted-foreground">
        - {name}, {position}, {brandName}{" "}
      </div>
    </ListMotion>
  );
};

export default LandingContentCard;
