import { type SchemaTypeDefinition } from "sanity";

import { jobType } from "./schemaTypes/jobType";
import { companyType } from "./schemaTypes/companyType";
import { teamType } from "./schemaTypes/teamType";
import { portfolioType } from "./schemaTypes/portfolioType";
import { contactType } from "./schemaTypes/contactType";
import { newsLetterType } from "./schemaTypes/newsLetterType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    jobType,
    companyType,
    teamType,
    portfolioType,
    contactType,
    newsLetterType,
  ],
};
