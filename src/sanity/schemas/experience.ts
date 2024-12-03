import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experiencia",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título de la Experiencia",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "benefits",
      title: "Beneficios",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
      validation: (Rule) => Rule.required(),
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
