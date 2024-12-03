import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Home Page",
      readOnly: true,
    }),
    defineField({
      name: "heroBanner",
      title: "Hero Banner",
      type: "array",
      of: [
        {
          type: "object",
          name: "banner item",
          fields: [
            defineField({
              name: "type",
              title: "Tipo",
              type: "string",
              options: {
                list: [
                  { title: "Imagen", value: "image" },
                  { title: "Video", value: "video" },
                ],
                layout: "dropdown",
              },
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
        },
      ],
      description:
        "Banner con imágenes o videos, puedes agregar varios elementos.",
    }),

    defineField({
      name: "section",
      title: "Quienes Somos?",
      type: "section",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "selectedDepartment",
      title: "Selecione Capítulo",
      type: "reference",
      to: [{ type: "chapters" }],
      description: "Selecione un Capítulo para mostrar sus empleados",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
