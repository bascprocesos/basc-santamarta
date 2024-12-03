import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-white py-8 w-full bg-gradient-to-r from-white via-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/do0umhryh/image/upload/v1731554573/1._logo-BASC-original_nji0ag.png"
              alt="BASC Colombia Logo"
              className="w-100 h-100 sm:w-100 lg:w-100"
              width={150}
              height={100}
              quality={100}
              loading="lazy"
            />
          </Link>

          <div>
            <h1 className="text-blue-900 font-bold italic text-3xl">
              BASC Santa Marta
            </h1>
            <span className="text-blue-900 font-normal italic text-sm">
            Santa Marta, Colombia
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
