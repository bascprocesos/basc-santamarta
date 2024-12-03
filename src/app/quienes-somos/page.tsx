import Section from "@/components/Section";

import { getAbout } from "@/utils/sanity";

export default async function About() {
  const about = await getAbout();

  const {
    section: {
      title: sectionTitle,
      description: sectionDescription,
      type: mediaType,
      position,
      video,
      image,
    },
  } = about;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
      <section className="w-full h-auto max-w-[90%] md:max-w-[90%] lg:max-w-[1114px] mx-auto pb-6 md:pb-8 lg:pb-10 flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-12">
        <Section
          title={sectionTitle}
          description={sectionDescription}
          mediaSrc={mediaType === "image" ? image : video}
          type={mediaType}
          position={position}
        />
      </section>
    </div>
  );
}
