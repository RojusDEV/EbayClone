import Image from "next/image";
import React from "react";
import logo from "@/_assets/images/logo.svg";

export default function Header({screenDimention = "normal"}: {screenDimention?: 'fullScreen' | 'normal'}) {
  const variants = {
    fullScreen: 'max-w-[92rem]',
    normal: 'max-w-7xl'
  }
  return (
    <div className="border-b-2 border-gray-200 ">
      <div className={`mx-auto flex ${variants[screenDimention]} items-center gap-2 px-4 xl:px-0`}>
        <Image src={logo} alt="logo" height={100} />
        <div className="flex w-full items-center border-2 border-black px-4 py-2">
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Search for anything"
          />
          <select
            name="All categories"
            id="categoriesId"
            className="border-l-2 border-black hidden sm:block"
            defaultValue={"DEFAULT"}
            aria-label="select"
          >
            <option value="DEFAULT">All categories</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <button className="bg-blue-600 px-6 py-2 text-white md:px-16">
          Search
        </button>
        <button className="hidden lg:block">
          <span className="text-xs text-gray-600 underline">Advanced</span>
        </button>
      </div>
    </div>
  );
}
