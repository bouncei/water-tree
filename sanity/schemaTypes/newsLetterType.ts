import { defineType } from "sanity";

export const contactType = defineType({
  name: "newsletter",
  type: "document",
  fields: [
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.required(),
    },
  ],
});
