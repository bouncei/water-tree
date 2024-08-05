import { type SchemaTypeDefinition } from 'sanity'

import { jobType } from './schemaTypes/jobType'
import { companyType } from './schemaTypes/companyType'
import { teamType } from './schemaTypes/teamType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [jobType, companyType, teamType],
}
