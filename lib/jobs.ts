import { client } from "@/sanity/lib/client";
import { Job, Options } from "./types";

export async function getAllJobs(): Promise<Job[]> {
  try {
    const query = `*[_type == "job"]{
            jobType,
            company->{
              name,
              logo,
              description,
              website,
              locations
            },
            title,
            description,
            link,
            postedDate,
            industry,
            deadline
          }`;

    const jobs = await client.fetch(query);
    return jobs;
  } catch (error) {
    console.log("Error occured while getting all jobs:", error);

    throw error;
  }
}
