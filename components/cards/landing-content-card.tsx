import Image from "next/image";
import React from "react";

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
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-7">
        <div className="relative size-[50vh] aspect-square  w-full">
          <Image
            fill
            src={userImg}
            alt="brand image"
            className=" object-cover object-top rounded"
          />
        </div>

        <div className="text-primary text-pretty text-lg">{slogan}</div>
      </div>

      <div className=" tracking-wide leading-loose text-muted-foreground">
        "{quote}"
      </div>

      <div className=" tracking-wide leading-loose text-muted-foreground">
        - {name}, {position}, {brandName}{" "}
      </div>
    </div>
  );
};

export default LandingContentCard;
