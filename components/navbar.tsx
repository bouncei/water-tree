"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import Logo from "./logo";
import { aboutSublinks, routes } from "@/constants";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const pathname = usePathname();
  console.log("path", pathname);

  return (
    <div
      className={cn(
        "sticky top-0  bg-transparent  flex items-center justify-between  z-20  bg-opacity-30 backdrop-blur-sm ",
        pathname === "/" && "mx-auto     max-w-screen-xl  px-6 xl:p-0 "
      )}
    >
      <Logo />
      <div className="hidden lg:flex gap-x-8  items-center">
        {routes.map((route) => {
          if (route.title.toLowerCase() === "about") {
            return (
              <NavigationMenu key={route.href}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-10">
                      <ul className=" gap-3 md:w-[200px]  ">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <div
                              className="flex h-full w-full select-none flex-col  justify-end rounded-md no-underline outline-none focus:shadow-md"
                              // href="/"
                            >
                              {/* <Icons.logo className="h-6 w-6" /> */}
                              {aboutSublinks.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className={cn(
                                    "text-sm border-b hover:bg-primary/40 hover:border-b-2  transition duration-300 py-3 px-6 ease-in",
                                    pathname === route.href
                                      ? "border-b-2 border-b-primary/70  "
                                      : "hover:border-b-2 hover:border-b-primary/40 "
                                  )}
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            );
          } else {
            return (
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
            );
          }
        })}
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
