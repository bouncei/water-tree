import React from "react";

interface CustomTitleProps {
  text: string;
}
const CustomTitle = ({ text }: CustomTitleProps) => {
  return (
    <div className="border-l-4 border-l-primary/70 line-clamp-2 lg:line-clamp-none pl-5 lg:pl-10  text-2xl lg:text-3xl xl:text-4xl font-medium relative xl:max-w-[70%]">
      {text}
    </div>
  );
};

export default CustomTitle;
