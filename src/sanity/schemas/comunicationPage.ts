import { defineField, defineType } from "sanity";

export default defineType({
  name: "comunicationPage",
  title: "Comunicaciones Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Comunicaciones Page",
      readOnly: true,
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "banner",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
