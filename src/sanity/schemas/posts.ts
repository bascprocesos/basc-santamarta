import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Noticias",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .max(100)
          .error("El titulo es demasiado largo o demasiado corto"),
    }),
    defineField({
      name: "description",
      title: "Descripción Corta",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .max(100)
          .error("La descripción es demasiado larga o demasiado corta"),
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
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      validation: (rule) => rule.required().error("Debes proveer una imagen"),
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
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "reference",
      to: [{ type: "categories" }],

      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publicado en",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      validation: (rule) => rule.required(),
      type: "blockContent",
    }),

    defineField({
      name: "type",
      title: "Multimedia",
      type: "string",
      options: {
        list: [
          { title: "Imagen", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "dropdown",
      },
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
          title: "Texto alternativo",
        },
      ],
      hidden: ({ parent }) => parent?.type !== "image",
    }),

    defineField({
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      hidden: ({ parent }) => parent?.type !== "video",
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
      author: "autor.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
