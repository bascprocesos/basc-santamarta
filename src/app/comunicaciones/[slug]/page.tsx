import Banner from "@/components/Banner";

import { getPost } from "@/utils/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface Document {
  fileTitle: string;
  url?: string;
}

interface Section {
  title: string;
  description: string;
  files?: Document[];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getPost(slug);

  const { title, body, type, video, image, filesSection } = data;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
      <Banner title={title} />
      <section className="w-full h-auto max-w-[90%] md:max-w-[90%] lg:max-w-[1114px] mx-auto pb-6 md:pb-8 lg:pb-10 flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 items-center mt-4 md:mt-6">
          <div className="text-justify font-normal text-md">
            <PortableText value={body} />
          </div>

          {type === "image" && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={400}
              loading="lazy"
              className="rounded-md w-full md:w-[50%] lg:w-[45%]"
            />
          )}
          {type === "video" && (
            <video
              src={video}
              width="500"
              height="400"
              style={{
                height: "auto",
                aspectRatio: "640 / 360",
              }}
              loop
              playsInline
              controls
            />
          )}
        </div>
        {filesSection &&
          filesSection.map((section: Section) => (
            <div
              key={section.title}
              className="flex flex-col md:gap-10 gap-4 w-full"
            >
              <div className="flex flex-col gap-1">
                <h2 className="font-bold text-3xl text-gary-700">
                  {section.title}
                </h2>
                <span className="md:text-md text-sm font-medium text-gray-500">
                  {section.description}
                </span>

                <ul className="list-disc list-inside flex flex-col gap-6 md:w-[60%] w-full md:text-justify">
                  {section.files &&
                    section.files.map(
                      ({ fileTitle, url }: Document, index: number) => (
                        <li
                          className="font-medium text-md text-gray-700"
                          key={index}
                        >
                          {url ? (
                            <Link
                              className="text-blue-900"
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {fileTitle}
                            </Link>
                          ) : (
                            <span>{fileTitle}</span>
                          )}
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
