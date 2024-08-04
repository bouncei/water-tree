import React from "react";

const OrganizationPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="py-14 md:py-16  flex flex-col items-center justify-center gap-3 md:gap-5 border-b-2 border-b-primary/70 ">
        <div className="text-2xl font-meduim">Organization</div>

        <div className="text-center">
          <b className="text-primary/70">WATER</b> is the parent company of
          Leaftree. It is a design innovation company with a focus on designing
          sustainable products & services that stimulate a general state of
          well-being.Water has curated a library of over 100 futuristic designs
          & aims to be at the forefront of innovation. We have set up the{" "}
          <b className="text-primary/70">Founder-In-Training (FIT) PROGRAM</b>{" "}
          as our channel for recruiting the founders that will run our ventures.
          Through the program we transfer our knowledge & research to the
          respective ventures, equipping the founders for the road ahead.
        </div>
      </div>
    </div>
  );
};

export default OrganizationPage;
