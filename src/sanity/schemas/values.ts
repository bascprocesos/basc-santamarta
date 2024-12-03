import { defineType, defineField } from "sanity";

export default defineType({
  name: "values",
  title: "Valores",
  description: "Introduce el valor que deseas mostrar",
  type: "document",
  fields: [
    defineField({
      name: "value",
      title: "Valor",
      description: "Introduce el valor que deseas mostrar",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      description: "Introduce una descripción del valor",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "background_image",
      title: "Imagen de fondo",
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
  ],
});
