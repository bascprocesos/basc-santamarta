import Banner from "@/components/Banner";
import OurTeam from "@/components/OurTeam";
import { getTeamPage } from "@/utils/sanity";
import Link from "next/link";
import React from "react";

async function Page() {
  const data = await getTeamPage();

  const {
    banner: { title: bannerTitle },
    selectedDepartment: { name: teamName, _id: teamId },
  } = data;

  return (
    <section>
      <Banner title={bannerTitle} />
      <div className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-[1114px] mx-auto pt-8 md:pt-12 lg:pt-16 flex flex-col justify-center items-center gap-8 md:gap-10">
        <OurTeam
          title="Nuestro Equipo"
          subtitle={`Colaboradores de ${teamName}`}
          teamId={teamId}
        />

        <Link
          href={"/contactenos"}
          className="bg-darkBlue hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded text-base md:text-lg transition-all duration-300"
        >
          Contáctenos
        </Link>
      </div>
    </section>
  );
}

export default Page;
