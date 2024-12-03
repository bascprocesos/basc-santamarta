import React from "react";
import Slider from "./Slider";
import { getSupport } from "@/utils/sanity";

async function Support() {
  const support = await getSupport();

  const data = support.map(({ image, url }: { image: string; url: string }) => {
    return {
      type: "image",
      image: image,
      url,
    };
  });

  return (
    <div className="flex flex-col gap-16 items-center justify-center w-full px-3">
      <div>
        <h1 className="md:text-6xl font-bold text-4xl">
          Trabajando en Cooperación con:
        </h1>
      </div>

      <Slider
        data={data}
        className="my-custom-swiper2"
        pagination={false}
        slides={3}
        spaceBetween={30}
      />
    </div>
  );
}

export default Support;
