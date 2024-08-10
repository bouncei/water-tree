import { defineType } from "sanity";

export const portfolioType = defineType({
  name: "portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "projectLink",
      type: "url",
      title: "Project Link",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },

    {
      name: "tag",
      type: "string",
      title: "Tag",
      options: {
        list: [
          { title: "Developing", value: "developing" },
          { title: "Funded", value: "funded" },
        ],
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
});
