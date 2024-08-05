import {defineType} from 'sanity'

export const companyType =  defineType({
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },

    {
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule: {required: () => any; uri: () => any}) => Rule.required().uri(),
      // validation: (Rule: { required: () => any; uri: (options: { scheme: string[] }) => any; }) => Rule.required().uri({ scheme: ['http', 'https'] }),
    },
    {name: 'locations', type: 'array', title: 'Locations', of: [{type: 'string'}]},
  ],
})

// You can then use the Sanity API to retrieve the company information for the job, like this:
// const job = await client.fetch('*[_id == "job-123"]');
// const company = await client.fetch('*[_id == job.company._ref]');

// console.log(company); // Output: { _id: "company-abc", name: "ABC Corporation", ... }