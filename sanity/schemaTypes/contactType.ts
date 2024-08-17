import { defineType } from "sanity";

export const contactType = defineType({
  name: "contact",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "enquiry",
      type: "text",
      title: "Enquiry",
      validation: (Rule) => Rule.required(),
    },
  ],
});
