import Banner from "@/components/Banner";
import { getLearning, getTrainingPage } from "@/utils/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LearningProps {
  url: string;
  description: string;
  title: string;
  image: string;
  altimage: string;
  _id?: string;
  category: string;
  slug: string;
}

interface Document {
  fileTitle: string;
  url?: string;
}

interface Section {
  title: string;
  description: string;
  files?: Document[];
}

interface GroupedEvents {
  [key: string]: LearningProps[];
}

export default async function Page() {
  const learning = (await getLearning()) as LearningProps[];
  const data = await getTrainingPage();

  const {
    banner: { title: bannerTitle, image: bannerImage },
    filesSection,
  } = data;

  const groupedEvents = learning.reduce<GroupedEvents>((acc, event) => {
    const category = event.category;

    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(event);

    return acc;
  }, {});

  return (
    <div>
      <Banner title={bannerTitle} image={bannerImage} />

      <section className="mt-16 w-full max-w-[90%] md:max-w-[90%] lg:max-w-[1114px] mx-auto flex flex-col gap-8 md:gap-10 lg:gap-12">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">
            Capacítate con Nosotros
          </h1>
          <p className="text-base md:text-lg font-medium text-gray-500">
            Recibe nuestras últimas noticias y actualizaciones.
          </p>
        </div>

        {Object.keys(groupedEvents).map((category) => (
          <div key={category}>
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {groupedEvents[category].map((event: LearningProps) => (
                <li key={event.title}>
                  <Link
                    href={`/formacion/${event.slug}`}
                    className="shadow-sm cursor-pointer rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                  >
                    <Image
                      src={event.image}
                      alt={event.altimage}
                      width={400}
                      height={400}
                      className="rounded-md h-[300px] w-full object-cover"
                      loading="lazy"
                    />

                    <div className="px-3 py-4 flex flex-col gap-2 md:gap-3">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-md font-medium text-gray-500">
                        {event.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

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

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">
            Descargar Certificado
          </h1>
          <p className="text-base md:text-lg font-medium text-gray-500">
            Descargue su certificado
          </p>

          <button className="bg-blue-500 px-4 py-3 w-full sm:w-[250px] md:w-[300px] mt-4 text-white font-bold text-lg md:text-xl">
            Descargar Certificado
          </button>
        </div>
      </section>
    </div>
  );
}
