import { defineField, defineType } from "sanity";

export default defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Nav Bar",
      readOnly: true,
    }),
    defineField({
      name: "items",
      title: "Enlaces del Navbar",
      type: "array",
      of: [
        {
          type: "object",
          title: "Enlace",
          fields: [
            {
              name: "title",
              title: "Título del Enlace",
              type: "string",
              description: "El texto que aparece en el enlace",
            },
            {
              name: "href",
              title: "URL del Enlace",
              type: "string",
              description: "La URL a la que llevará este enlace",
            },
            {
              name: "submenu",
              title: "Submenú",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Título del Subenlace",
                      type: "string",
                    },
                    {
                      name: "href",
                      title: "URL del Subenlace",
                      type: "string",
                    },
                  ],
                },
              ],
              description: "Submenú opcional para este enlace.",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
