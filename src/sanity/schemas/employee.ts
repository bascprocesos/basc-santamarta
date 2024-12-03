import { defineField, defineType } from "sanity";

export default defineType({
  name: "employee",
  title: "Colaborador",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
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
      name: "position",
      title: "Puesto",
      type: "string",
      description: "El puesto o cargo del empleado",
    }),

    defineField({
      name: "capitulo",
      title: "Capítulo",
      type: "reference",
      to: [{ type: "chapters" }],
      description: "Capítulo al que pertenece el empleado",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
