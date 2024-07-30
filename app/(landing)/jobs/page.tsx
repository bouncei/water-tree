"use client";

import React, { useEffect, useState } from "react";
import { useMountedState } from "react-use";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { getAllCompanies } from "@/lib/company";
import { getAllJobs } from "@/lib/jobs";
import { Company, Job } from "@/lib/types";
import { Button } from "@/components/ui/button";
import SearchJobs from "@/components/jobs/search-jobs";
import ExploreCompanies from "@/components/jobs/explore-companies";
import TalentNetwork from "@/components/jobs/talent-network";

const components = ["search", "companies", "jobs"];

const JobsPage = () => {
  const isMounted = useMountedState();
  const [jobs, setJobs] = useState<Job[] | undefined>([]);
  const [companies, setCompanies] = useState<Company[] | undefined>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const [companyResponse, jobsResponse] = await Promise.all([
          await getAllCompanies(),
          await getAllJobs(),
        ]);
        setJobs(jobsResponse);
        setCompanies(companyResponse);
      } catch (error) {
        console.error("Error occured on jobs component", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (!isMounted) return null;

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-1 gap-y-3  flex-col">
        <div className="py-14 md:py-20  flex flex-col items-center justify-center gap-10 border-b-2 border-b-primary/70 ">
          <div className="text-2xl">
            Opportunities in the Leaftree Portfolio
          </div>

          <div className="flex items-center gap-7">
            <div className="flex flex-col items-center">
              <div className="text-2xl">{companies?.length}</div>
              <div className="text-sm">COMPANIES</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl">{jobs?.length}</div>
              <div className="text-sm">JOBS</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="search" className="w-full">
          <TabsList className="w-full border-b border-[#C8CFD5] bg-transparent  !justify-start !rounded-none !pb-0 !mb-0 space-x-3">
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
            <TabsTrigger
              value="jobs"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2   data-[state=active]:border-b-primary data-[state=active]:rounded-none rounded-none transition ease-in hover:scale-105 hover:border-b-2 hover:border-b-primary/40"
            >
              Talent network
            </TabsTrigger>
          </TabsList>

          {components.map((component) => (
            <TabsContent
              value={component}
              key={component}
              className="py-10 px-4 bg-slate-100 m-0"
            >
              {component === "search" ? (
                <SearchJobs />
              ) : component === "companies" ? (
                <ExploreCompanies />
              ) : (
                <TalentNetwork />
              )}
            </TabsContent>
          ))}
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default JobsPage;
