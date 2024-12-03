import React from "react";
import Slider from "./Slider";
import { getTeam } from "@/utils/sanity";

interface OurTeamProps {
  title: string;
  subtitle?: string;
  teamId?: string;
}

async function OurTeam({ title, subtitle, teamId = "" }: OurTeamProps) {
  const team = await getTeam(teamId);

  const bascTeam = team.map(
    ({
      image,
      name,
      position,
      capitulo,
    }: {
      image: string;
      name: string;
      position: string;
      capitulo: string;
    }) => {
      return {
        type: "image",
        image: image,
        details: {
          name,
          position,
          capitulo,
        },
      };
    }
  );

  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full px-3 md:px-0">
      <div>
        <p className="text-md font-medium text-gray-600">{subtitle}</p>
        <h1 className="md:text-6xl text-4xl font-bold">{title}</h1>
      </div>

      <div className="w-full h-auto">
        <Slider
          data={bascTeam}
          className="ourTeam"
          spaceBetween={20}
          pagination={false}
          slides={3}
        />
      </div>
    </div>
  );
}

export default OurTeam;
