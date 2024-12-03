import React from "react";

interface CardEthicalProps {
  title: string;
  description: string;
  image: string;
}

function CardEthical({ title, description, image }: CardEthicalProps) {
  return (
    <div className="relative px-5 py-5 rounded-lg w-full flex flex-col gap-4 border h-[200px] sm:h-[300px] lg:h-[400px] items-center justify-center">
      <div
        className="absolute inset-0 rounded-lg filter blur-[2px] bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(${image})`,
          zIndex: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 text-center px-3">
        <h1 className="text-2xl sm:text-2xl lg:text-3xl font-extrabold text-white">
          {title}
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-100 font-medium shadow-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CardEthical;
