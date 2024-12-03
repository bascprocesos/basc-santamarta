import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamPage",
  title: "Equipo Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Equipo Page",
      readOnly: true,
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "banner",
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
