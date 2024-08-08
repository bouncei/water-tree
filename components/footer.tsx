"use client";

import { useState } from "react";

import { Button } from "./ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Logo from "./logo";
import { Input } from "./ui/input";
import { toast } from "sonner";
import Link from "next/link";

const Footer = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 py-20 border-b border-b-primary/70">
      <div className="space-y-4">
        <Logo />
        <a href="mailto:sounds@those.app">
          <Button variant="ghost">
            <Mail className="size-4 mr-2" />
            help@leaftree.fund
          </Button>
        </a>

        <a
          href="https://wa.me/+447405249625"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost">
            <Phone className="size-4 mr-2" />
            +12 3456 78 9101
          </Button>
        </a>
      </div>

      <div className="space-y-4 flex flex-col justify-end">
        {/* <div className=" text-lg ">Contact Us</div>
        <p>Stay Up To Date</p> */}

        <div className=" flex-col flex items-end justify-end ">
          {/* <div className=" text-lg font-bold">Contat Us:</div> */}

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
              name={steps === 1 ? "fullName" : steps === 2 ? "email" : "where"}
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

          <div className="text-sm">
            Built by{" "}
            <Button
              asChild
              variant="link"
              size="sm"
              className="px-0 transition ease-in hover:scale-105 duration-200 "
            >
              <Link
                href="https://bouncei.vercel.app"
                target="_blank"
                className="font-semibold"
              >
                Bouncey
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
