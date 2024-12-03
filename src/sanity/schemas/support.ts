import { defineField, defineType } from "sanity";

export default defineType({
  name: "support",
  title: "Soporte",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Entidades de apoyo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "La URL del sitio web ",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
