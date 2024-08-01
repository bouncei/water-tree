"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Search, Wifi } from "lucide-react";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Job } from "@/lib/types";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface SearchJobsProps {
  parentJobsData: Job[] | [];
  handleSavingFilteredJobs: (type: string, data: Job[]) => void;
}

const SearchJobs = ({
  parentJobsData,
  handleSavingFilteredJobs,
}: SearchJobsProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [remoteFilter, setRemoteFilter] = React.useState<Checked>(true);
  const [onsiteFilter, setOnsiteFilter] = React.useState<Checked>(false);

  const handleSearch = () => {
    // TODO: ADD debounding to this search handler
    const filteredJobs = parentJobsData.filter((job) => {
      const jobTitle = job.title.toLowerCase();
      const jobDescription = job.description.toLowerCase();
      const searchQuery = searchInput.toLowerCase();
      return (
        jobTitle.includes(searchQuery) || jobDescription.includes(searchQuery)
      );
    });
    handleSavingFilteredJobs("search", filteredJobs);
  };

  const handleJobTypeFilter = () => {
    // TODO
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 500); // Debounce for 500ms

    return () => clearTimeout(timer);
  }, [searchInput]);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="bg-white w-full p-5 rounded-md flex items center gap-3">
        {/* SEARCH INPUT */}
        <div className="w-[70%]  relative rounded-md border flex items-center gap-2 px-3">
          <Search className="size-4 " />

          <Input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full border-none focus-visible:ring-offset-0 focus-visible:ring-0"
          />
        </div>

        {/* JOB TYPE TOGGLE */}
        <div className="w-[30%]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full">
                <Wifi className="size-5 rotate-45 mr-2" />
                {!remoteFilter && !onsiteFilter && "Remote & On-site"}
                {remoteFilter && onsiteFilter && "Remote & On-site"}
                {remoteFilter && onsiteFilter === false && "Remote"}
                {remoteFilter === false && onsiteFilter && "On-site"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Job Types</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={remoteFilter}
                onCheckedChange={setRemoteFilter}
              >
                Remote
              </DropdownMenuCheckboxItem>

              <DropdownMenuCheckboxItem
                checked={onsiteFilter}
                onCheckedChange={setOnsiteFilter}
              >
                On-site
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SearchJobs;
