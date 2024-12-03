import { defineField, defineType } from "sanity";

export default defineType({
  name: "bascMundoPage",
  title: "BASC en el Mundo Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "BASC en el Mundo",
      readOnly: true,
    }),

    defineField({
      name: "banner",
      title: "Banner",
      type: "banner",
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
      description: "BASC en el mundo image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "selectedDepartment",
      title: "Selecione Capítulo",
      type: "reference",
      to: [{ type: "chapters" }],
      description: "Selecione un Capítulo para mostrar sus afilados",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
