import React from "react";
import Image from "next/image";
import { Experience } from "../data";

const LangComp = () => {
  return (
    <div className=" bg-[url('https://dcoromina.s-ul.eu/resources/sKlkHFzv')] w-full md:full lg:w-full h-[100px] md:h-[150px] lg:h-1/6 bg-cover bg-center bg-no-repeat  rounded-xl flex items-end justify-end">
      <div className="flex flex-col items-end h-full md:h-full lg:h-full px-3 py-3 md:px-5 lg:px-5  rounded-b-xl min-w-min justify-center rounded-xl bg-gradient-to-l from-black to-transparent">
        <div className="text-2xl md:text-3xl font-bold  ">ITALIAN</div>
        <div className="flex flex-row items-center space-x-5">
          <div className="text-xl md:text-2xl font-bold ">A2</div>
          <div className="">
            <Image
              className=" object-scale-down max-h-full m-auto"
              src="https://dcoromina.s-ul.eu/lang-flags/7fb3Kohj"
              width={40}
              height={40}
              alt="image of author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangComp;
