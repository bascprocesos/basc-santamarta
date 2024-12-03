import Banner from "@/components/Banner";
import Section from "@/components/Section";

import { getEvent } from "@/utils/sanity";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getEvent(slug);

  const { title, description, banner, image, type, url, date } = data;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
      <Banner title={title} image={banner && banner.image} />
      <section className="w-full h-auto max-w-[90%] md:max-w-[90%] lg:max-w-[1114px] mx-auto pb-6 md:pb-8 lg:pb-10 flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-12">
        <Section
          title={title}
          description={description}
          mediaSrc={image}
          type="image"
          position="rigth"
        />
        <div className="flex flex-col w-full">
          <span>
            <strong>Fecha: </strong>
            {date}
          </span>
          <span>
            <strong>Modalidad: </strong>
            {type}
          </span>
          <span>
            <strong>Enlcace: </strong>
            <Link className="text-blue-900" href={url}>
              {url}
            </Link>
          </span>
        </div>
      </section>
    </div>
  );
}
