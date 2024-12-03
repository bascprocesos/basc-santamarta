"use client";

import { NextStudio } from "next-sanity/studio";

import config from "@sanity";

export default function StudioPage() {
  return (
    <section className="absolute top-0 left-0 w-full h-screen overflow-hidden">
      <div className="w-full h-full">
        <NextStudio config={config} z-index={100} />
      </div>
    </section>
  );
}
