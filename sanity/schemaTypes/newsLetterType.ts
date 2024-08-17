import { defineType } from "sanity";

export const newsLetterType = defineType({
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
