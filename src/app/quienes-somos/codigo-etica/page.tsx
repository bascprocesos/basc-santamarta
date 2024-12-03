import Banner from "@/components/Banner";
import { getEticaPage } from "@/utils/sanity";
import Link from "next/link";
import React from "react";

interface BannerProps {
  title: string;
  image: string;
}

interface File {
  fileTitle: string;
  url: string;
}

interface EticaePageProps {
  banner?: BannerProps;
  files: File[];
}

export default async function Page() {
  const data = (await getEticaPage()) as EticaePageProps;

  const { banner: { title: bannerTitle, image: bannerImage } = {}, files } =
    data;

  return (
    <section>
      <Banner title={bannerTitle || ""} image={bannerImage} />

      <div className="max-w-[1114px] w-full mx-auto pt-16 flex flex-col gap-10 px-5 mdpx-0">
        <div className="flex flex-col gap-1">
          <span className="text-md font-medium text-gray-500">
            Con el fin de cumplir con los reglamentos vigentes, damos a conocer
            el código de ética para todas nuestras partes interesadas.
          </span>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 items-center justify-center">
          {files.map((file, index) => (
            <Link
              className="text-blue-900"
              href={file.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.fileTitle}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
