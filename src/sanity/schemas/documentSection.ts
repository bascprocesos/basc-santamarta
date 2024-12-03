import { defineField, defineType } from "sanity";

export default defineType({
  name: "documentSection",
  title: "Sección Documentos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: "El título que representa esta sección",
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "string",
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
