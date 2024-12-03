import { getHome } from "@/utils/sanity";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

async function Footer() {
  const home = await getHome();

  const {
    selectedDepartment: { name: teamName },
  } = home;
  return (
    <footer
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/do0umhryh/image/upload/v1730863521/background-nav_hgdezf.png)",
      }}
    >
      <div className="text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold mb-4">{teamName}</h3>
            <hr className="w-auto mx-auto " />
            <p className="mb-4 my-5">
              BASC - Business Alliance for Secure Commerce, es una alianza
              empresarial internacional que promueve un comercio seguro en
              cooperación con gobiernos y organismos internacionales.
            </p>
            <a
              href="/assets/MANUAL-DE-TRATAMIENTO-Y-POLITICA-DE-MAJEJO-DE-BASES-DE-DATOS.pdf"
              className="underline"
            >
              Política de tratamiento de datos
            </a>
            <div>
              <h2 className="font-bold mt-5">Numeros de Contacto</h2>

              <ul className="flex flex-col gap-1">
                <li>Dirección: 3006806699</li>
                <li>Operaciones: 3002762979</li>
                <li>Contabilidad: 3215593561</li>
                <li>Comunicaciones: 3185415945</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">CONTACTO</h3>
            <hr className="w-auto mx-auto" />
            <p className="my-5">
              Dirección: Bocagrande, Cr. 2 No. 8 -142, Of. 305, Centro Comercial
              Bocagrande
            </p>
            <p className="mt-2">Teléfono: +57 60 (5) 6795315</p>

            <div>
              <h2 className="mt-5 font-bold">Horario de atención:</h2>
              <p>
                Lunes a viernes de 8:00 a.m. a 12:30 m. y de 1:30 p.m. a 5:00
                p.m.
              </p>
            </div>

            <p className="mt-5 font-bold">Departamentos:</p>
            <p>
              Dirección:
              <a href="mailto:direccionctg@basc.org.co" className="underline">
                direccionctg@basc.org.co
              </a>
            </p>
            <p>
              Operaciones:
              <a href="mailto:operacionesctg@basc.org.co" className="underline">
                operacionesctg@basc.org.co
              </a>
            </p>
            <p>
              Contabilidad:
              <a href="mailto:aux.contable@wbasc.org" className="underline">
                aux.contable@wbasc.org
              </a>
            </p>
            <p>
              Comunicaciones:
              <a
                href="mailto:administracionctg@basc.org.co"
                className="underline"
              >
                administracionctg@basc.org.co
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">REDES SOCIALES</h3>
            <hr className="w-auto mx-auto " />
            <p className="mb-4 my-5">
              Conoce nuestras redes sociales, mantente informado sobre nuestras
              últimas actualizaciones.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-gray-500">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-500">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-500">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-500">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-gray-500">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
