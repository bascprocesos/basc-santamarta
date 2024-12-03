import { defineField, defineType } from "sanity";

export default defineType({
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
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
      name: "position",
      title: "Posición",
      type: "string",
      options: {
        list: [
          { title: "Izquierda", value: "left" },
          { title: "Derecha", value: "right" },
        ],
        layout: "radio",
      },
      description: "Posición del contenedio multimedia",
    }),
  ],
});
