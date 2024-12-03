import { defineField, defineType } from "sanity";

export default defineType({
  name: "trainingCategory",
  title: "Tipos de Formación",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tipo de Formación",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
