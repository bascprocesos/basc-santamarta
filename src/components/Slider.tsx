"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface EmployeeDetails {
  name: string;
  position: string;
  capitulo: string;
}

interface SliderProps {
  data?: {
    type: "image" | "video" | "custom";
    image: string;
    video?: string;
    details?: EmployeeDetails;
    url?: string;
  }[];
  pagination?: boolean;
  slides?: number;
  className: string;
  spaceBetween?: number;
  speed?: number;
  loop?: boolean;
  delay?: number;
  custom?: boolean;
  children?: React.ReactNode;
}

function Slider({
  data,
  pagination,
  slides,
  className,
  spaceBetween,
  speed,
  delay,
  loop,
  children,
  custom = false,
}: SliderProps) {
  return (
    <Swiper
      loop={loop ? loop : true}
      speed={speed ? speed : 2000}
      autoplay={{
        delay: delay ? delay : 2000,
        disableOnInteraction: false,
        stopOnLastSlide: true,
      }}
      spaceBetween={spaceBetween ? spaceBetween : 0}
      pagination={pagination ? { clickable: true } : false}
      modules={[Pagination, Autoplay]}
      className={className}
      slidesPerView={slides ? slides : 1}
    >
      {custom
        ? children
        : data?.map(({ type, image, video, details, url }, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center text-center w-full "
            >
              {type === "image" ? (
                <div>
                  {url?.length ? (
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={image}
                        alt="slide-component"
                        width={800}
                        height={800}
                        quality={100}
                        loading="lazy"
                        className="w-full block rounded-md mb-4"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={image}
                      alt="slide-component"
                      width={800}
                      height={800}
                      quality={100}
                      loading="lazy"
                      className="w-full block rounded-md mb-4  "
                    />
                  )}

                  {details && (
                    <div className="flex flex-col ">
                      <h4 className="font-bold">{details?.name}</h4>
                      <span className="text-xs text-gray-400 my-1">
                        {details?.capitulo}
                      </span>
                      <span className="text-xs text-gray-400">
                        {details?.position}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <video
                  src={video}
                  width="940"
                  height="860"
                  style={{
                    height: "auto",
                    width: "100%",
                    aspectRatio: "640 / 360",
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </SwiperSlide>
          ))}
    </Swiper>
  );
}

export default Slider;
