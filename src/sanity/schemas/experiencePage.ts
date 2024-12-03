import { defineField, defineType } from "sanity";

export default defineType({
  name: "experiencePage",
  title: "Experiencia BASC Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Experiencia BASC Page",
      readOnly: true,
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "banner",
    }),
    defineField({
      name: "experiences",
      title: "Experiencias",
      type: "array",
      of: [
        {
          type: "experience",
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
