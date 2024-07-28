"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "./ui/button";
import Logo from "./logo";
import { routes } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0  bg-transparent    flex items-center justify-between  z-20">
      <Logo />
      <div className="hidden lg:flex gap-x-8  items-center">
        {routes.map((route) => (
          <Button
            asChild
            size="sm"
            variant="link"
            key={route.href}
            className={cn(
              "text-black rounded-none hover:no-underline transition ease-in hover:scale-105",
              pathname === route.href
                ? "border-b-2 border-b-primary/70 "
                : "hover:border-b-2 hover:border-b-primary/40 "
            )}
          >
            <Link href={route.href}>{route.title}</Link>
          </Button>
        ))}
      </div>

      {/* Hanburger menu */}
      <Button
        className=" lg:hidden hover:bg-primary/40 "
        variant="ghost"
        size="icon"
      >
        <Menu className="size-6" color="#000" />
      </Button>
    </div>
  );
};

export default NavBar;
