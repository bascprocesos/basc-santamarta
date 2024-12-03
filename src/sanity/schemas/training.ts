import { defineField, defineType } from "sanity";

export default defineType({
  name: "training",
  title: "Formación",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .normalize()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]+/g, "")
            .replace(/^-+|-+$/g, "")
            .slice(0, 96),
      },
    }),

    defineField({
      name: "type",
      title: "Tipo",
      type: "string",
      options: {
        list: [
          { title: "Virtual", value: "virtual" },
          { title: "Presencial", value: "presencial" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "place",
      title: "Lugar",
      type: "string",
      hidden: ({ parent }) => parent?.type !== "presencial",
    }),

    defineField({
      name: "description",
      title: "Descripción",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "url",
      title: "Enlace",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      title: "Fecha",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    {
      name: "category",
      title: "Categoría",
      type: "reference",
      to: [{ type: "trainingCategory" }],
      validation: (Rule) => Rule.required(),
    },

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
      name: "banner",
      title: "Banner",
      type: "banner",
    }),
  ],
});
