import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Team } from "@/lib/types";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface TeamCardProps {
  member: Team;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Card
      className=" group min-h-96 h-full aspect-square text-white relative "
      style={{
        backgroundImage: `url(${urlFor(member.image).url()})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <CardContent className="hidden group-hover:flex delay-200 flex-col transition duration-500 h-full bg-primary/60 ease-in bg-opacity-30 backdrop-blur-sm w-full justify-center items-center gap-2 text-center">
        <div className="text-lg font-medium">{member.name}</div>
        <div className=" text-sm italic">{member.position}</div>
        <div className="text-center">{member.bio}</div>

        <div className="flex items-center gap-2">
          {member.twitter && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:bg-primary/70 hover:text-white"
            >
              <Link href={member.twitter}>
                <Twitter className="size-4 md:size-6" />
              </Link>
            </Button>
          )}

          {member.instagram && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:bg-primary/70 hover:text-white"
            >
              <Link href={member.instagram}>
                <Instagram className="size-4 md:size-6" />
              </Link>
            </Button>
          )}

          {member.facebook && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:bg-primary/70 hover:text-white"
            >
              <Link href={member.facebook}>
                <Facebook className="size-4 md:size-6" />
              </Link>
            </Button>
          )}

          {member.linkedin && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:bg-primary/70 hover:text-white"
            >
              <Link href={member.linkedin}>
                <Linkedin className="size-4 md:size-6" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>

      <CardFooter className="group-hover:hidden bg-opacity-30 backdrop-blur-sm  bg-primary/40 absolute bottom-0 left-0 right-0 w-full gap-1 flex flex-col justify-center items-center p-0 py-3">
        <div className="text-lg font-medium">{member.name}</div>
        <div className=" text-sm italic">{member.position}</div>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
