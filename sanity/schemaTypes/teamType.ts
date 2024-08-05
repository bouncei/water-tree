import {defineType} from 'sanity'

export const teamType = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
      validation: (Rule) => Rule.min(2).max(50),
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
      validation: (Rule) => Rule.min(2).max(50),
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      validation: (Rule) => Rule.min(2).max(50),
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
      validation: (Rule) => Rule.min(2).max(50),
    },
  ],
})