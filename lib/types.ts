export interface Company {
  name: string;
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
  link: string;
  postedDate: string;
  industry: string[];
  deadline: string;
}

export type Options = {
  industry?: string;
  company?: string;
};
