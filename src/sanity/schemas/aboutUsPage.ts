import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "Quienes Somos Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Quienes Somos Page",
      readOnly: true,
    }),
    defineField({
      name: "section",
      title: "Acerca de nosotros",
      type: "section",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
