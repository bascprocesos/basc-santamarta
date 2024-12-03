import React from "react";
import { getBlogs } from "@/utils/sanity";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

interface BlogProps {
  slug: string;
  title: string;
  mainImage: string;
  description: string;
  altimage?: string;
  category: string;
}

interface GroupedBlogs {
  [key: string]: BlogProps[];
}

export default async function Blog() {
  const blogs = (await getBlogs()) as BlogProps[];

  const groupedBlogs = blogs.reduce<GroupedBlogs>((acc, event) => {
    const category = event.category;

    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(event);

    return acc;
  }, {});

  return (
    <section className="bg-white ">
      <div>
        {Object.keys(groupedBlogs).map((category) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {groupedBlogs[category].map(
                ({
                  title,
                  slug,
                  mainImage,
                  altimage,
                  description,
                }: BlogProps) => (
                  <li
                    key={title}
                    className="shadow-sm cursor-pointer rounded-md bg-gray-100  hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                  >
                    <Link href={`/comunicaciones/${slug}`}>
                      <Image
                        src={mainImage}
                        alt={altimage || "image"}
                        width={400}
                        height={400}
                        className="rounded-md h-[300px] w-full object-cover"
                        loading="lazy"
                      />

                      <div className="px-3 py-4 flex flex-col gap-2 md:gap-3">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold">
                            {title}
                          </h3>
                        </div>
                        <p className="text-sm md:text-md font-medium text-gray-500">
                          {description}
                        </p>
                      </div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}

        <div className="flex justify-around space-x-4 ">
          <a href="#" className="hover:text-gray-500">
            <FaFacebook size={40} />
          </a>
          <a href="#" className="hover:text-gray-500">
            <FaTwitter size={40} />
          </a>
          <a href="#" className="hover:text-gray-500">
            <FaInstagram size={40} />
          </a>
          <a href="#" className="hover:text-gray-500">
            <FaLinkedinIn size={40} />
          </a>
          <a href="#" className="hover:text-gray-500">
            <FaWhatsapp size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}
