import { defineField, defineType } from "sanity";

export default defineType({
  name: "afiliates",
  title: "Afiliados",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "nombre",
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
    defineField({
      name: "capitulo",
      title: "Capítulo",
      type: "reference",
      to: [{ type: "chapters" }],
      description: "Capítulo al que pertenece el afiliado",
    }),
    defineField({
      name: "contact",
      title: "Contacto",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
