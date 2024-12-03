import { defineField, defineType } from "sanity";

export default defineType({
  name: "etica",
  title: "Código de Ética Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Ética Page",
      readOnly: true,
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "banner",
    }),
    defineField({
      name: "files",
      title: "Archivos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "fileTitle",
              title: "Titulo",
              type: "string",
              description: "El título para este archivo PDF",
            },
            {
              name: "file",
              title: "PDF File",
              type: "file",
              options: {
                accept: ".pdf",
              },
              description: "Sube un archivo PDF",
            },
          ],
        },
      ],
      description: "Sube los archivos PDF con sus respectivos títulos",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
