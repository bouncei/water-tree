import { cn } from "@/lib/utils";
import React from "react";

interface CustomTitleProps {
  text: string;
  className?: string;
}
const CustomTitle = ({ text, className }: CustomTitleProps) => {
  return (
    <div
      className={cn(
        "border-l-4 border-l-primary/70 line-clamp-2 lg:line-clamp-none pl-5 lg:pl-10  text-2xl lg:text-3xl xl:text-4xl font-medium relative xl:max-w-[70%]",
        className
      )}
    >
      {text}
    </div>
  );
};

export default CustomTitle;
