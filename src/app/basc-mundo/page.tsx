import Banner from "@/components/Banner";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getAfiliates, getBascMundoPage, getChapters } from "@/utils/sanity";

interface ChapterProps {
  country: string;
  _id: string;
}

interface Afiliate {
  name: string;
  image: string;
  url: string;
  contact: string;
}

export default async function page() {
  const chapters = (await getChapters()) as ChapterProps[];
  const data = await getBascMundoPage();

  const {
    banner: { title: bannerTitle, image: bannerImage },
    selectedDepartment: { _id: chapterId },
    image,
  } = data;

  const afiliates = await getAfiliates(chapterId);

  return (
    <div>
      <Banner title={bannerTitle} image={bannerImage} />

      <section className="mt-16 w-full max-w-[90%] md:max-w-[90%] lg:max-w-[1114px] mx-auto flex flex-col gap-8 md:gap-10 lg:gap-12">
        <div className="flex flex-col gap-2 mt-8 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">Presencia BASC</h1>
          <p className="text-base md:text-lg font-medium text-gray-500">
            Conoce las empresas que son certificadas BASC.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center mt-6">
          <Image
            src={image}
            alt="BASC map"
            width={420}
            height={494}
            quality={100}
            loading="lazy"
            className="cursor-pointer w-full sm:w-[80%] md:w-[60%] lg:w-[50%]"
          />

          <div className="w-full lg:w-[350px] flex flex-col gap-3 text-center lg:text-left">
            {chapters.map(({ country, _id }) => (
              <div key={_id}>
                <p className="text-gray-600 font-bold text-lg md:text-xl">
                  {" "}
                  ✹{country}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">
            Empresas Certificadas
          </h1>
          <p className="text-base md:text-lg font-medium text-gray-500">
            Conoce las empresas que son certificadas BASC.
          </p>

          <Link
            className="bg-blue-500 px-4 py-3 w-full md:w-[300px] mt-4 text-white font-bold text-lg md:text-xl text-center rounded-sm"
            href={
              "https://sibasc.wbasco.org/mod_consulta_pag_wbo/consulta_empresas_certificadas.php"
            }
          >
            Ver Certificadas
          </Link>
        </div>

        <div className="flex gap-16  w-full px-3 flex-wrap flex-col ">
          <h3 className="text-3xl font-bold">Afiliados</h3>
          <div className="flex gap-16 flex-wrap">
            {afiliates.map((afiliate: Afiliate) => (
              <div className="flex flex-col" key={afiliate.name}>
                <div className=" flex flex-1 justify-center items-center">
                  <Image
                    src={afiliate.image}
                    alt="slide-component"
                    width={164}
                    height={164}
                    quality={100}
                    loading="lazy"
                    className="block rounded-md mb-4 w-auto h-auto"
                  />
                </div>

                <div>
                  <h3>{afiliate.name}</h3>
                  <Link className="text-blue-900" href={afiliate.url}>
                    web site
                  </Link>
                  {afiliate.contact && <p>{afiliate.contact}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
