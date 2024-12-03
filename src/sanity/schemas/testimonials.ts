import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonios",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del Testimonio",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Descripcion del Testimonio",
      type: "string",
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: "position",
      title: "Posición Organizacional",
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
  ],
});
