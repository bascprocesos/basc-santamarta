import { defineField, defineType } from "sanity";

export default defineType({
  name: "valuesPage",
  title: "Valores Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Valores Page",
      readOnly: true,
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "banner",
    }),
    defineField({
      name: "values",
      title: "Valores",
      type: "array",
      of: [
        {
          type: "values",
        },
      ],
      description: "Lista de valores que aparecerán en la página",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
