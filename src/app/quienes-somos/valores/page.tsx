import Banner from "@/components/Banner";
import CardEthical from "@/components/CardEthical";
import { getValues } from "@/utils/sanity";
import React from "react";

interface Value {
  value: string;
  description: string;
  image: string;
}

interface BannerProps {
  title: string;
  image: string;
}

interface ValuePageProps {
  banner?: BannerProps;
  values: Value[];
}

export default async function Page() {
  const data = (await getValues()) as ValuePageProps;

  const { banner: { title: bannerTitle } = {}, values } = data;
  return (
    <section>
      <Banner title={bannerTitle || ""} />

      <div className="max-w-[1114px] w-full mx-auto pt-16 flex flex-col gap-10 px-5 mdpx-0">
        <div className="flex flex-col gap-1">
          <h1 className="md:text-3xl text-2xl font-bold text-gray-700">
            Valores
          </h1>
          <span className="text-md font-medium text-gray-500">
            Conoce nuestros valores
          </span>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 items-center justify-center">
          {values.map(({ value, description, image }, index) => (
            <div key={index}>
              <CardEthical
                title={value}
                description={description}
                image={image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
