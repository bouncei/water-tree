"use client";
import NavBar from "@/components/navbar";
import { getAllCompanies } from "@/lib/company";
import { getAllJobs } from "@/lib/jobs";
import { Company, Job } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { useMountedState } from "react-use";

const JobsPage = () => {
  const isMounted = useMountedState();
  const [jobs, setJobs] = useState<Job[] | undefined>([]);
  const [companies, setCompanies] = useState<Company[] | undefined>([]);

  const getJobsPageData = async () => {
    try {
      const [companyResponse, jobsResponse] = await Promise.all([
        await getAllCompanies(),
        await getAllJobs(),
      ]);
      setJobs(jobsResponse);
      setCompanies(companyResponse);
    } catch (error) {
      console.error("Error occured on jobs component", error);
    }
  };

  useEffect(() => {
    (async () => {
      await getJobsPageData();
    })();
  }, []);

  if (!isMounted) return null;

  console.log("jons data", companies, jobs);

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-1  flex-col">
        <div className="py-32 flex items-center justify-center gap-10"></div>
      </div>
    </div>
  );
};

export default JobsPage;
