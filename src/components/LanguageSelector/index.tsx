"use client";
import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import enFlag from "../../../public/images/i18n/england.png";
import plFlag from "../../../public/images/i18n/poland.png";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string;
    code: string;
    flag: StaticImageData;
  }

  const router = useRouter();
  const pathname = usePathname();

  const lang = pathname.split("/")?.[1];

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);

  const options: Option[] = [
    { country: "English", code: "en", flag: enFlag },
    { country: "Polish", code: "pl", flag: plFlag },
  ];

  const setOption = (option: Option) => {
    setIsOptionsExpanded(false);

    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${option.code}`);

    router.push(newPathname);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative text-lg w-32">
        <button
          className=" justify-between w-full border border-gray-300 bg-gray-100 text-gray-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2 ml-2 text-center inline-flex items-center"
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          Language
          <IoChevronDownOutline
            className={`transition-all ${isOptionsExpanded ? "rotate-180" : "rotate-0"}`}
          />
        </button>
        <div
          className={`transition-transform duration-500 ease-custom ${
            !isOptionsExpanded
              ? "-translate-y-1/2 scale-y-0 opacity-0"
              : "translate-y-0 scale-y-100 opacity-100"
          }`}
        >
          <ul className="absolute left-2 w-full right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-3 py-2 transition-colors text-sm duration-300 hover:bg-gray-200 flex items-center gap-2 cursor-pointer text-gray-800"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setOption(option);
                }}
                onClick={() => setIsOptionsExpanded(false)}
              >
                <Image
                  src={option.flag}
                  width={"20"}
                  height={"20"}
                  alt="logo"
                />
                &nbsp;&nbsp;{option.country}
                {lang === option.code && <IoMdCheckmark />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LangSwitcher;
