"use client";

import Image from "next/image";
import React from "react";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";

interface TestimonialsProps {
  data: {
    testimonial: string;
    image: string;
    author: string;
    position: string;
  }[];
}

function Testimonials({ data }: TestimonialsProps) {
  return (
    <div
      className="w-full flex flex-col items-center justify-center bg-gray-200 md:py-36 py-16 mt-16"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/do0umhryh/image/upload/v1731053880/bg-map_dloxgq.png)`,
      }}
    >
      <Slider
        custom
        pagination={false}
        slides={1}
        className={"testimonial-swiper"}
      >
        {data.map(({ testimonial, image, author, position }, index) => (
          <SwiperSlide className="w-full" key={index}>
            <div className="w-full">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-[100px] h-[100px]">
                  <Image
                    src={image}
                    alt="Slider"
                    width={100}
                    height={100}
                    quality={100}
                    loading="lazy"
                    className="block rounded-full w-[50px] h-[50px]"
                  />
                </div>
                <p className="md:text-xl text-sm font-medium text-gray-800 w-[550px]">
                  {testimonial}
                </p>
                <div className="flex flex-col items-center justify-center gap-1">
                  <h3 className="font-bold text-gray-800 md:text-xl text-lg">
                    {author}
                  </h3>
                  <p className="text-gray-800 text-sm">{position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
