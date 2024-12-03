"use client";

import React from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";

interface InteractiveMapProps {
  title: string;
  teamDetails?: string[];
  image?: string;
}

function InteractiveMap({
  title,
  teamDetails = [],
  image = "",
}: InteractiveMapProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-4 md:px-8">
      <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          {title}
        </h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-5 justify-center items-center">
        <Image
          src={
            "https://res.cloudinary.com/do0umhryh/image/upload/v1731024687/map_g0x6c3.png"
          }
          alt="BASC map"
          width={420}
          height={594}
          quality={100}
          loading="lazy"
          className="cursor-pointer w-full md:w-[70%] lg:w-[60%] max-w-[420px] h-auto"
        />

        <div className="w-full max-w-[350px] lg:w-[350px]">
          <Dropdown items={teamDetails} image={image} title={title} />
        </div>
      </div>
    </div>
  );
}

export default InteractiveMap;
