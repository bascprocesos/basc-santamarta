import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10 px-4 lg:px-0">
      <div className="w-full lg:w-1/2">
        <Image
          src={
            "https://res.cloudinary.com/do0umhryh/image/upload/v1730865664/pexels-fauxels-3182773_vmo2on.jpg"
          }
          alt="BASC map"
          width={420}
          height={594}
          quality={100}
          loading="lazy"
          className="cursor-pointer rounded-md w-full"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-start gap-4 lg:gap-6">
        <div>
          <span className="text-xs sm:text-sm font-medium text-gray-600">
            Conoce más de BASC Cartagena
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            ¿Quiénes Somos?
          </h1>
        </div>

        <p className="text-sm sm:text-md font-normal text-gray-800">
          BASC es una alianza empresarial que promueve el cumplimiento de
          estándares internacionales de seguridad para la generación de
          confianza y gestión del riesgo en el comercio, en cooperación con el
          sector público y privado, buscando siempre ser líderes en la
          generación de cultura de seguridad, sostenibilidad y confianza en los
          negocios, para hacer del mundo un lugar confiable y seguro.
        </p>

        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-base sm:text-lg">
          Conoce más
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
