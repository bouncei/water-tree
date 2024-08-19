"use client";

import { useState } from "react";

import { Button } from "./ui/button";
import { LoaderCircle, Mail, Phone } from "lucide-react";
import Logo from "./logo";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { sendEnquiry } from "@/lib/contact";
import Link from "next/link";
import { addToNewLetter } from "@/lib/newsletter";

const links = [
  {
    title: "Principles",
    href: "/about/principles",
  },
  {
    title: "Organization",
    href: "/about/organization",
  },
  {
    title: "Team",
    href: "/about/team",
  },

  {
    title: "Portfolio",
    href: "/portfolio",
  },

  {
    title: "Jobs",
    href: "/jobs",
  },
];

const Footer = () => {
  const pathname = usePathname();
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    where: "", // How did you hear about us field
  });
  const [steps, setSteps] = useState<number>(1);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [newsMail, setNewsLetter] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleNewsLetter = async () => {
    // VALIDATE newsMail with email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(newsMail)) {
      toast.error("Invalid email address");
      return;
    }

    try {
      await addToNewLetter(newsMail);
      toast.success("Subscription Successful! 😃");
      setNewsLetter("");
    } catch (error) {
      console.log("Error occurred while adding email to newsletter:", error);
      toast.error("Error occurred while adding email to newsletter:");
    }
  };

  const formSteps = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (steps === 1) {
      setSteps(2);
    } else if (steps === 2) {
      setSteps(3);
    } else if (steps === 3) {
      setLoading(true); // Set loading state to true
      try {
        await sendEnquiry(info.fullName, info.email, info.where);
        toast.success("Thanks! 😃", {
          description: "We will reach out to you soon.",
        });
        setSteps(1);
        setShowForm(false);
      } catch (error) {
        console.log("Error occurred while sending enquiry:", error);
        toast.error("Error occurred while sending enquiry");
      } finally {
        setLoading(false); // Set loading state to false
      }
    }
  };

  return (
    <div
      className={
        pathname === "/" ? "mx-auto     max-w-screen-2xl  px-6 xl:p-0" : ""
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 xl:gap-10 w-full py-20 ">
        <div className="space-y-4">
          <Logo />
        </div>

        <div className="flex flex-col gap-5">
          {[links[0], links[1], links[2]].map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="hover:text-primary/90 hover:underline transition ease-in"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          {[links[3], links[4]].map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="hover:text-primary/90 hover:underline transition ease-in"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>

        {/* <div className="space-y-4 flex flex-col justify-end"> */}
        <div className=" flex-col flex items-center gap-5 ">
          {/* <div className=" text-lg font-bold">Contat Us:</div> */}
          <div className=" flex items-center gap-2    w-full">
            <Input
              type="email"
              onChange={(e) => {
                setNewsLetter(e.target.value);
              }}
              value={newsMail}
              className="!py-4"
              placeholder="Your email"
            />
            <Button size="sm" onClick={handleNewsLetter}>
              Subscribe
            </Button>
          </div>
          {!showForm ? (
            <Button
              variant="default"
              size="lg"
              className="w-full"
              onClick={() => setShowForm(true)}
            >
              CONTACT US
            </Button>
          ) : (
            <div className="relative w-full">
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
                className="items-center text-center "
                onChange={handleInputChange}
                disabled={loading}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    formSteps(event);
                  }
                }}
              />

              {loading && (
                <div className="absolute  top-2 right-5 animate-spin">
                  <LoaderCircle className="size-6 text-primary/90" />
                </div>
              )}
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
