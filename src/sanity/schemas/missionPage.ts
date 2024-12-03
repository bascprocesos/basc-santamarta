import { defineField, defineType } from "sanity";

export default defineType({
  name: "mission",
  title: "Misión Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Misión Page",
      readOnly: true,
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "banner",
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "section",
        },
      ],
      description: "Lista de secciones que aparecerán en la página de inicio",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
