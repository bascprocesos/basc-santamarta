import { defineField, defineType } from "sanity";

export default defineType({
  name: "categories",
  title: "Categorias",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
