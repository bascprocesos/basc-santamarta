import Banner from "@/components/Banner";
import Form from "@/components/Form";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-8 md:gap-10 h-auto md:h-screen">
      <Banner title="Contáctanos" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative overflow-hidden px-6 rounded-3xl max-w-[90%] lg:max-w-6xl mx-auto bg-white mt-4 font-[sans-serif]">
        <div>
          <h2 className="text-gray-800 text-2xl md:text-3xl font-bold text-center md:text-left">
            FORMULARIO DE CONTACTO
          </h2>
          <Form />
        </div>

        <div className="relative h-full w-full md:min-h-[350px] rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.217726601715!2d-75.55656312396918!3d10.404274765945837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f148a9c97cb%3A0xbc7c7f7234986d4b!2sCra.%202%20%238-142%2C%20Cartagena%20de%20Indias%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1732845855124!5m2!1ses!2sco"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default page;
