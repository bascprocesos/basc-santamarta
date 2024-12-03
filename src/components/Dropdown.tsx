import Image from "next/image";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

function Dropdown({
  items,
  image,
  title,
}: {
  items: string[];
  image: string;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full border rounded-lg py-2 px-3 cursor-pointer gap-3 flex flex-col"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between  items-center">
        <h1 className="text-lg font-bold text-gray-900">{title}</h1>
        <CiCirclePlus size={24} />
      </div>

      {isOpen && (
        <div className="flex flex-col gap-2">
          {image.length && (
            <Image
              src={image}
              alt="slide-component"
              width={800}
              height={800}
              quality={100}
              loading="lazy"
              className="w-full block rounded-md mb-4"
            />
          )}
          {items &&
            items.map((item, index) => (
              <span className="text-md font-normaltext-gray-600" key={index}>
                {item}
              </span>
            ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
