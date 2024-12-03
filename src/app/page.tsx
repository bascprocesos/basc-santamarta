import InteractiveMap from "@/components/InteractiveMap";
import OurTeam from "@/components/OurTeam";
import Section from "@/components/Section";
import Slider from "@/components/Slider";
import Stats from "@/components/Stats";
import Support from "@/components/Support";

import { getHome } from "@/utils/sanity";

export default async function Home() {
  const home = await getHome();
  

  const {
    heroBanner,
    selectedDepartment: {
      name: teamName,
      _id: teamId,
      details: teamDetails,
      image: departmentImage,
    },
    section: {
      title: sectionTitle,
      description: sectionDescription,
      type: mediaType,
      position,
      video,
      image,
    },
  } = home;

  const sliderData = heroBanner.map(
    ({ type, video }: { type: string; video: string }) => {
      return {
        type: type,
        video: video,
      };
    }
  );

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
      <section className="w-full h-auto">
        <Slider
          data={sliderData}
          className="swiper1"
          pagination={false}
          slides={1}
          speed={2000}
          loop={true}
          delay={5000}
        />
      </section>

      <section className="w-full h-auto max-w-[90%] md:max-w-[90%] lg:max-w-[1114px] mx-auto pb-6 md:pb-8 lg:pb-10 flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-12">
        <InteractiveMap
          title={teamName}
          teamDetails={teamDetails}
          image={departmentImage}
        />
        {/* <AboutUs /> */}
        <Section
          title={sectionTitle}
          description={sectionDescription}
          mediaSrc={mediaType === "image" ? image : video}
          type={mediaType}
          position={position}
        />
      </section>

      <Stats />
      <OurTeam title={`Equipo de ${teamName}`} teamId={teamId} />
      <Support />
    </div>
  );
}
