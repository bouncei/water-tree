export interface Company {
  title: string;
  logo: string;
  description: string;
  locations: string;
  website: string;
}

export interface Job {
  jobType: string;
  company: Company;
  title: string;
  description: string;
  postedDate: string;
  industry: string[];
  deadline: string;
}

export type Options = {
  industry?: string;
  company?: string;
};
