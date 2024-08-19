"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useMountedState } from "react-use";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { getAllCompanies } from "@/lib/company";
import { getAllJobs } from "@/lib/jobs";
import { Company, Job } from "@/lib/types";
import { Button } from "@/components/ui/button";
import SearchJobs from "@/components/jobs/search-jobs";
import ExploreCompanies from "@/components/jobs/explore-companies";
import TalentNetwork from "@/components/jobs/talent-network";
import JobCard from "@/components/jobs/job-card";
import { industries } from "@/constants";
import CompanyCard from "@/components/jobs/company-card";
import { ListMotion } from "@/components/motion/list-motion";

const components = ["search", "companies", "jobs"];
const initialFiltersState = {
  search: [],
  companies: [],
  jobType: [],
};

const JobsPage = () => {
  const isMounted = useMountedState();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(initialFiltersState);

  const handleFilterArrays = (type: string, data: Job[]) => {
    setFilters({ ...initialFiltersState, [type]: data });
  };

  // const displayJobs = useMemo(() => {
  //   if (!jobs) return [];

  //   const displayjobs =
  //     filters.search.length !== 0
  //       ? filters.search
  //       : filters.jobType.length !== 0
  //         ? filters.jobType
  //         : filters.companies.length !== 0
  //           ? filters.companies
  //           : jobs;

  //   return displayjobs;
  // }, [jobs, filters]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const [companyResponse, jobsResponse] = await Promise.all([
          getAllCompanies(),
          getAllJobs(),
        ]);
        setJobs(jobsResponse);
        setCompanies(companyResponse);
      } catch (error) {
        console.error("Error occured on jobs component", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!isMounted) return null;

  return (
    <div className="h-full flex flex-col border-b-2 border-b-primary/70 pb-10">
      <div className="flex flex-1 gap-y-3  flex-col">
        <div className="py-14 md:py-16 flex flex-col items-center justify-center gap-10  ">
          <div className="text-3xl font-medium ">
            Opportunities in the Leaftree Portfolio
          </div>

          <div className="flex items-center gap-7">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-medium">{companies?.length}</div>
              <div className="text-base">COMPANIES</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl font-medium">{jobs?.length}</div>
              <div className="text-base">JOBS</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="search" className="w-full">
          <TabsList className="w-full rounde border-b border-[#C8CFD5] bg-transparent  !justify-start !rounded-none !pb-0 !mb-0 space-x-3">
            <TabsTrigger
              value="search"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2   data-[state=active]:border-b-primary data-[state=active]:rounded-none rounded-none transition ease-in hover:scale-105 hover:border-b-2 hover:border-b-primary/40"
            >
              Search jobs
            </TabsTrigger>
            <TabsTrigger
              value="companies"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2   data-[state=active]:border-b-primary data-[state=active]:rounded-none rounded-none transition ease-in hover:scale-105 hover:border-b-2 hover:border-b-primary/40"
            >
              Explore companies
            </TabsTrigger>
          </TabsList>

          <div>
            {components.map((component) => (
              <TabsContent
                value={component}
                key={component}
                className="m-0 rounded-md"
              >
                {component === "search" ? (
                  // Search content
                  <>
                    <div
                      className="py-8 px-4 rounded-md  w-full
          "
                    >
                      <SearchJobs
                        handleSavingFilteredJobs={handleFilterArrays}
                        parentJobsData={jobs || []}
                      />
                    </div>

                    <div className="py-3">
                      Showing <b>{jobs.length}</b> Jobs
                    </div>

                    <div className="flex flex-col gap-5 items-center !w-full ">
                      {jobs.map((job, index) => (
                        <JobCard
                          key={index}
                          title={job.title}
                          postedDate={job.postedDate}
                          company={job.company}
                          filters={[...job.industry, job.jobType]}
                          link={job.link}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  // Companies content
                  <>
                    {/* <div
                      className="py-8 px-4 rou 
                  "
                    >
                      <ExploreCompanies
                      // handleSavingFilteredJobs={handleFilterArrays}
                      // parentJobsData={jobs || []}
                      />
                    </div> */}

                    <div className="py-3">
                      Showing <b>{companies.length}</b> Companies
                    </div>

                    <div className="grid text-base grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
                      {companies.map((company, index) => (
                        <CompanyCard
                          key={index}
                          title={company.name}
                          description={company.description}
                          website={company.website}
                          logo={company.logo}
                          jobs={jobs || []}
                        />
                      ))}
                    </div>
                  </>
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default JobsPage;
