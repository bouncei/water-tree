import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PortfolioCardProps {
  img: string;
  title: string;
  description: string;
  link: string;
}
const PortfolioCard = ({
  img,
  title,
  description,
  link,
}: PortfolioCardProps) => {
  return (
    <Link
      href={link}
      className="relative h-full cursor-pointer aspect-square w-full group  transition ease-in duration-200   "
    >
      <Image
        src={img}
        fill
        alt="brand"
        className="object-contain group-hover:opacity-15"
      />

      <div className=" group-hover:absolute w-full h-full group-hover:bg-primary/60 inset-0 transition ease-in duration-200 ">
        <div className="flex flex-col items-center h-full text-white justify-center gap-5 lg:gap-8">
          <h2 className="text-2xl font-bold tracking-wider ">{title}</h2>
          <p className="">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
