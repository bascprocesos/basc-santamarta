import { getBlogs } from "@/utils/sanity";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/valores`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/basc-mundo`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/experiencia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.2,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/formacion`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/mision-vision`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/equipo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contactenos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/comunicaciones`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/certificarse`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    ...blogs,
  ];
}
