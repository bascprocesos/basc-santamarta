/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "@/components/Banner";
import { getCertificationPage } from "@/utils/sanity";
import Link from "next/link";
import React from "react";

interface Document {
  fileTitle: string;
  url?: string;
}

export default async function Page() {
  const data = (await getCertificationPage()) as any;

  const {
    banner: { title: bannerTitle, image: bannerImage },
    filesSection,
  } = data;

  return (
    <section className="w-full">
      <Banner title={bannerTitle} image={bannerImage} />

      <div className="max-w-[1114px] w-full mx-auto pt-16 flex flex-col gap-10 px-5 mdpx-0">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl  font-bold text-gray-700">
            Pasos para ser certificado
          </h1>
          <span className="md:text-md text-sm font-medium text-gray-500">
            Obten la certificacion BASC se solicita los siguientes para los
            socios de la empresa aspirante
          </span>
        </div>
        {filesSection.map((section: any) => (
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
                {section.files.map(
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

        <Link
          href={"/contactenos"}
          className="bg-darkBlue text-center w-[250px] hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded text-base md:text-lg transition-all duration-300"
        >
          Contáctanos
        </Link>
      </div>
    </section>
  );
}
