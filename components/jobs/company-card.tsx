import React, { useEffect, useMemo } from "react";
import { Card } from "../ui/card";
import { Job } from "@/lib/types";
import Image from "next/image";
import { urlFor } from "@/sanity";
import Link from "next/link";

interface CompanyCardProps {
  title: string;
  description: string;
  website: string;
  logo: string;
  jobs: Job[];
}

const CompanyCard = ({
  title,
  description,
  website,
  logo,
  jobs,
}: CompanyCardProps) => {
  const companyJobs = useMemo(() => {
    // Filter jobs by company.title with title to to get companjobs
    return jobs.filter((job) => job.company.name === title);
  }, [jobs]);

  const filters = useMemo(() => {
    if (companyJobs.length === 0) return "";

    // get filters from jobs
    const filters = companyJobs
      .map((job) => [...job.industry, job.jobType])
      .flat();

    return filters;
  }, [companyJobs]);

  console.log("All jobs", companyJobs);
  console.log("Filters", filters);
  return (
    <Card className="w-full p-4 gap-3 border-black/5 flex flex-col  hover:shadow-md transition">
      <Link href={website} target="_blank" className="flex items-start gap-2">
        <div className="flex-shrink-0 relative size-14 md:size-20 ">
          <Image
            fill
            src={urlFor(logo).url()}
            alt="Logo"
            className="rounded-md"
          />
        </div>

        <div className="space-y-1">
          <div>{title}</div>
          <div className="font-medium">
            {companyJobs.length} Job{companyJobs.length > 1 && "s"}
          </div>
        </div>
      </Link>

      <div>{description}</div>
    </Card>
  );
};

export default CompanyCard;
