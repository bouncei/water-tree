"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import { toast } from "sonner";

const LandingHero = () => {
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    where: "", // How did you hear about us field
  });
  const [steps, setSteps] = useState<number>(1);
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const formSteps = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    // if
    if (steps === 1) {
      setSteps(2);
    } else if (steps === 2) {
      setSteps(3);
    } else if (steps === 3) {
      // Handle form submission here
      // toast.success(`Form Submitted: ${JSON.stringify(info)}`);
      toast.success("Form Submitted", {
        description: JSON.stringify(info),
      });
      setSteps(1);
      setShowForm(false);
    }
  };

  return (
    <div className=" flex items-center justify-center ">
      {/* Optional overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-black opacity-0 lg:opacity-20"></div> */}
      <div className="h-[70dvh] py-4 md:py-16  flex items-center justify-center gap-10 border-b-2 border-b-primary/70 ">
        <div className="relative  w-full lg:w-[50%] ">
          <div className="w-full text-left space-y-4 sm:space-y-8 py-8">
            <div className="text-4xl lg:text-5xl xl:text-6xl font-bold relative">
              Investing in Human/Design-Centric{" "}
              <span className="text-primary">Innovations</span>
            </div>
            <p className=" text-sm sm:text-base lg::max-w-2xl mr-auto">
              We curate ventures based on their: Purpose (Design), Scalability,
              Sustainability amounting in/leading to Human-Centric Approach/Well
              Being.
            </p>

            {!showForm ? (
              <Button
                variant="default"
                size="lg"
                onClick={() => setShowForm(true)}
              >
                Request More Info
              </Button>
            ) : (
              <Input
                type={steps === 1 ? "text" : steps === 2 ? "email" : "text"}
                name={
                  steps === 1 ? "fullName" : steps === 2 ? "email" : "where"
                }
                value={
                  steps === 1
                    ? info.fullName
                    : steps === 2
                      ? info.email
                      : info.where
                }
                placeholder={
                  steps === 1
                    ? "Enter your Full Name"
                    : steps === 2
                      ? "Enter your Email"
                      : "Where did you hear about LeafTree?"
                }
                className="items-center text-center"
                onChange={handleInputChange}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    formSteps(event);
                  }
                }}
              />
            )}
          </div>
        </div>

        <div className=" hidden md:flex ml-auto    w-[50%] h-full  relative">
          <Image src="/hero.webp" alt="hero image" fill />
          {/* // TODO: PUT A TREE IMAGE HERE */}
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
