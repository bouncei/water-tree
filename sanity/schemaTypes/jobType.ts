import {defineType} from 'sanity'

export const jobType = defineType({
  name: 'job',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Job Title',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your job posting',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Job Description',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'link',
      type: 'url',
      title: 'Job Link',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: {type: 'company'},
      validation: (Rule: {required: () => any}) => Rule.required(),
    },

    {
      name: 'jobType',
      type: 'string',
      title: 'Job Type',
      options: {
        list: [
          {title: 'Full-time', value: 'Full-time'},
          {title: 'Part-time', value: 'Part-time'},
          {title: 'Freelance', value: 'Freelance'},
          {title: 'Internship', value: 'Internship'},
          {title: 'Contract', value: 'Contract'},
        ],
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },

    {
      name: 'postedDate',
      type: 'datetime',
      title: 'Posted Date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
    },
    {
      name: 'industry',
      type: 'array',
      title: 'Industry',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {value: 'internetServices', title: 'Internet Services'},
              {value: 'music', title: 'Music'},
              {value: 'sustainability', title: 'Sustainability'},
              {value: 'events', title: 'Events'},
              {value: 'legal', title: 'Legal'},
              {value: 'professionalServices', title: 'Professional Services'},
              {value: 'lendingAndInvestments', title: 'Lending and Investments'},
              {value: 'sports', title: 'Sports'},
              {value: 'blockchainAndCrypto', title: 'Blockchain and Crypto'},
              {value: 'hrAndRecruiting', title: 'HR and Recruiting'},
              {value: 'telecommunication', title: 'Telecommunication'},
              {value: 'realEstate', title: 'Real Estate'},
              {value: 'administrativeServices', title: 'Administrative Services'},
              {value: 'software', title: 'Software'},
              {value: 'informationTechnology', title: 'Information Technology'},
              {value: 'deepTech', title: 'DeepTech'},
              {value: 'health', title: 'Health'},
              {value: 'dataAndAnalytics', title: 'Data and Analytics'},
              {value: 'communityAndLifestyle', title: 'Community and Lifestyle'},
              {value: 'media', title: 'Media'},
              {value: 'agricultureAndFarming', title: 'Agriculture and Farming'},
              {value: 'hardware', title: 'Hardware'},
              {value: 'commerceAndShopping', title: 'Commerce and Shopping'},
              {value: 'consumerProducts', title: 'Consumer Products'},
              {value: 'manufacturing', title: 'Manufacturing'},
              {value: 'salesAndMarketing', title: 'Sales and Marketing'},
              {value: 'design', title: 'Design'},
              {value: 'advertising', title: 'Advertising'},
              {value: 'mobilePlatformsApps', title: 'Mobile, Platforms, and Apps'},
              {value: 'construction', title: 'Construction'},
              {value: 'clothingAndApparel', title: 'Clothing and Apparel'},
              {value: 'travelAndTourism', title: 'Travel and Tourism'},
              {value: 'security', title: 'Security'},
              {value: 'finance', title: 'Finance'},
              {value: 'food', title: 'Food'},
              {value: 'gaming', title: 'Gaming'},
              {value: 'biotechnology', title: 'Biotechnology'},
              {value: 'contentAndPublishing', title: 'Content and Publishing'},
              {value: 'education', title: 'Education'},
            ],
          },
        },
      ],
      options: {
        unique: true,
      },
      validation: (Rule: {required: () => any; unique: () => any}) =>
        Rule.required().min(1).unique(),
    },
    {
      name: 'deadline',
      type: 'datetime',
      title: 'Deadline',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
})