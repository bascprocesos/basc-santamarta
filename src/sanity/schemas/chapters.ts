import { defineField, defineType } from "sanity";

export default defineType({
  name: "chapters",
  title: "Capítulo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
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
    }),
    defineField({
      name: "details",
      title: "Detalles del Capitulo",
      type: "array",
      of: [
        {
          type: "string",
          validation: (Rule) => Rule.required().min(1),
        },
      ],
      description:
        "Añade información adicional como correo, teléfono, jefe, etc.",
    }),
  ],
});
