"use client";

import { useState } from "react";
import Link from "next/link";

export interface NavbarProps {
  menuItems: {
    title: string;
    href: string;
    submenu?: {
      title: string;
      href: string;
    }[];
  }[];
}

const Navbar = ({ menuItems }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className="text-white flex flex-col w-full justify-center items-center mx-auto"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/do0umhryh/image/upload/v1730863521/background-nav_hgdezf.png)",
      }}
    >
      <div className="container mx-auto flex justify-center w-full items-center p-6 text-xl">
        <ul className="hidden md:flex space-x-6 font-bold gap-3  h-full">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.href}
                className="hover:text-gray-300 text-[16px] xl:text-md flex items-center"
              >
                {item.title}
                {item.submenu && (
                  <svg
                    className="w-5 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>

              {item.submenu && (
                <ul className="absolute bg-white text-black rounded-md shadow-lg   w-52 text-sm font-thin z-50 hidden group-hover:block">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-500 hover:text-black transition-all duration-[3m] hover:font-medium"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed top-0 right-0 w-3/4 max-w-xs bg-white h-full z-50 shadow-lg p-4">
            <button
              className="text-black text-2xl mb-5"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-black flex items-center"
                      >
                        {item.title}
                        <svg
                          className="w-5 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {dropdownOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block text-gray-700"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} className="block text-black">
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
