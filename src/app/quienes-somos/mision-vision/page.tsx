import Banner from "@/components/Banner";
import Section from "@/components/Section";
import { getMission } from "@/utils/sanity";
import React from "react";

interface Section {
  video?: string;
  image: string;
  title: string;
  description: string;
  type?: string;
  position: string;
}

interface BannerProps {
  title: string;
  image: string;
}

interface MissionProps {
  title: string;
  description: string;
  position: string;
  image: string;
  banner?: BannerProps;
  sections?: Section[];
}

async function Page() {
  const data = (await getMission()) as MissionProps;

  const {
    banner: { title: bannerTitle, image: bannerImage } = {},
    sections = [],
  } = data;

  return (
    <section>
      <Banner title={bannerTitle || ""} image={bannerImage} />

      <div className="max-w-[1114px] w-full mx-auto">
        {sections.map((item: Section, index: number) => (
          <div key={index}>
            <Section
              title={item.title}
              description={item.description}
              position={item.position}
              mediaSrc={item.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
