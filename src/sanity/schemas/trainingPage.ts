import { defineField, defineType } from "sanity";

export default defineType({
  name: "trainingPage",
  title: "Formación Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Formación Page",
      readOnly: true,
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "banner",
    }),
    defineField({
      name: "filesSection",
      title: "Documentos",
      type: "array",
      of: [
        {
          type: "documentSection",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
