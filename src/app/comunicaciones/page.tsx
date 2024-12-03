import Banner from "@/components/Banner";
import React from "react";
import Slider from "@/components/Slider";
import Blog from "@/components/Blog";
import { getComunicationsPage } from "@/utils/sanity";

export default async function Page() {
  const data = await getComunicationsPage();

  const {
    banner: { title: bannerTitle, image: bannerImage },
  } = data;

  return (
    <section>
      <Banner title={bannerTitle} image={bannerImage} />

      <section className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <Slider
          data={[
            {
              type: "image",
              image:
                "https://res.cloudinary.com/do0umhryh/image/upload/v1731050081/hombre-irreconocible-neon-chaleco-seguridad-traje-negocios-sentado-escritorio-usando-laptop_1098-17504_mfs0ys.jpg",
            },
            {
              type: "image",
              image:
                "https://res.cloudinary.com/do0umhryh/image/upload/v1731041048/industries_t5lgzd.webp",
            },
          ]}
          className="swiper1"
          pagination={false}
          slides={1}
          speed={2000}
          loop={true}
          delay={5000}
        />
      </section>

      <section className="py-8 sm:py-10 md:py-12 lg:py-16 w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[1114px] mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold">
            Comunicaciones BASC
          </h1>
          <p className="text-base sm:text-md md:text-lg font-medium text-gray-500">
            Recibe nuestras últimas noticias y actualizaciones.
          </p>
        </div>
        <Blog />
      </section>
    </section>
  );
}
