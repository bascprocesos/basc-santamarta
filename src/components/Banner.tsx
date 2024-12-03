import React from "react";

interface BannerProps {
  title: string;
  image?: string;
}

export default function Banner({ title, image }: BannerProps) {
  return (
    <div
      className="bg-slate-700 h-48 md:h-64 lg:h-72 w-full flex justify-start  py-20 md:px-11 px-5 bg-center bg-no-repeat bg-cover items-center"
      style={{
        backgroundImage: image
          ? `url(${image})`
          : "url(https://res.cloudinary.com/do0umhryh/image/upload/v1731012702/bg-lines-circle_q6udyr.png)",
      }}
    >
      <div className="px-4 capitalize max-w-[1114px] w-full mx-auto">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-start md:text-left">
          {title}
        </h1>
      </div>
    </div>
  );
}
