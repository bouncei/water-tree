import { Company } from "@/lib/types";
import React, { useMemo } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

import { formatPostedDate } from "@/lib/dateUtils";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface JobCardProps {
  title: string;
  postedDate: string;
  company: Company;
  filters: string[];
  link: string;
}

const JobCard = ({
  title,
  postedDate,
  company,
  filters,
  link,
}: JobCardProps) => {
  return (
    <Card className="w-full p-4 border-black/5 cursor-pointer hover:shadow-md transition">
      <Link
        href={link}
        target="_blank"
        className="flex  items-center justify-between "
      >
        <div className="flex items-start gap-3">
          <div className="relative size-28 md:size-28 ">
            <Image
              fill
              src={urlFor(company.logo).url()}
              alt="Logo"
              className="rounded-md"
            />
          </div>

          <div className="space-y-2 flex-1">
            <div className="text-lg font-medium"> {title}</div>
            <div className="font-medium text-foreground">{company.name}</div>

            <div className="flex items-center gap-1 text-base text-gray-500">
              <div>{company.locations}</div>
              <div className="">{formatPostedDate(postedDate)}</div>
            </div>

            {/* FILTERS */}
            <div className="flex items-center gap-3 flex-wrap">
              {filters.map((filter) => (
                <Badge
                  key={filter}
                  variant="outline"
                  className=" font-normal  "
                >
                  {filter}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Button className="text-primary" variant="link">
          Read more <ChevronRight className="size-4 ml-2" />
        </Button>
      </Link>
    </Card>
  );
};

export default JobCard;
