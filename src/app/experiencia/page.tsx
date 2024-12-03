import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";
import { getExperience, getTestimonials } from "@/utils/sanity";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import React from "react";

interface TestimonialProps {
  image: string;
  name: string;
  description: string;
  position: string;
}
interface Experience {
  image?: string;
  video?: string;
  type?: string;
  title: string;
  benefits: PortableTextBlock[];
}

async function Page() {
  const experiencesData = await getExperience();

  const {
    banner: { title: bannerTitle, image: bannerImage },
    experiences,
  } = experiencesData;

  const testimonials = await getTestimonials();

  const data = testimonials.map(
    ({ image, name, description, position }: TestimonialProps) => {
      return {
        testimonial: description,
        image: image,
        author: name,
        position: position,
      };
    }
  );

  return (
    <section>
      <Banner title={bannerTitle} image={bannerImage} />

      <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[1114px] pt-8 md:pt-12 lg:pt-16 w-full mx-auto">
        {experiences.map((experience: Experience, index: number) => (
          <div key={index} className="mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-gray-800">
              {experience.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 items-center mt-4 md:mt-6">
              <div className="text-justify font-normal text-md">
                <PortableText value={experience.benefits} />
              </div>
              {experience.type === "image" && (
                <Image
                  src={experience.image || ""}
                  alt={experience.title}
                  width={500}
                  height={400}
                  loading="lazy"
                  className="rounded-md w-full md:w-[50%] lg:w-[45%]"
                />
              )}
              {experience.type === "video" && (
                <video
                  src={experience.video}
                  width="500"
                  height="400"
                  style={{
                    height: "auto",
                    aspectRatio: "640 / 360",
                  }}
                  loop
                  playsInline
                  controls
                />
              )}
            </div>
          </div>
        ))}

        <Testimonials data={data} />
      </div>
    </section>
  );
}

export default Page;
