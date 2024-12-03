import React from "react";
import Image from "next/image";

interface SectionProps {
  title: string;
  description: string;
  position?: "rigth" | "left" | string;
  mediaSrc: string;
  type?: string;
}

function Section({
  title,
  description,
  position = "left",
  mediaSrc,
  type = "image",
}: SectionProps) {
  return (
    <section
      className={`md:flex-row md:p-0 px-[20px] flex w-full items-center justify-center gap-[30px] md:pt-[50px] pt-[40px] md:pb-[30px] pb-[20px] flex-col-reverse ${
        position === "left" && "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-1/2 w-full flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <p className="font-normal text-lg text-gray-800">{description}</p>
      </div>

      <div className="md:w-1/2 w-full cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-90">
        {type === "image" ? (
          <Image
            src={mediaSrc}
            alt="icon image"
            width={600}
            height={400}
            quality={100}
            loading={"lazy"}
            className="w-[600px] h-[400px] object-cover rounded-lg"
          />
        ) : (
          <video
            src={mediaSrc}
            width="600"
            height="400"
            style={{
              height: "auto",
              width: "100%",
              aspectRatio: "640 / 360",
            }}
            loop
            playsInline
            controls
          />
        )}
      </div>
    </section>
  );
}

export default Section;
