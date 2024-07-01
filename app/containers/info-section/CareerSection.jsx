import React from "react";
import Image from "next/image";
const CareerSection = () => {
  return (
    <div className=" w-screen flex flex-col space-y-7 items-center py-5">
      <div className="flex flex-col  items-start px-20">
        <div className="text-orange-400 font-bold text-4xl md:text-7xl lg:text-7xl">
          EXPERIENCE
        </div>
      </div>

      <div className="flex flex-wrap w-screen justify-evenly items-start font-medium px-5 group-hover:bg-white ">
        <div className=" font-bold active:text-orange-400 hover:text-orange-400 cursor-pointer active:border-b-2 border-orange-400  p-4 ">
          Myoo.io
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer p-4 ">
          MyHealp
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer  p-4 ">
          GourmetFuel
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer p-4 ">
          Siolot
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer p-4 ">
          Misc.
        </div>
      </div>

      <div className="flex flex-col items-start space-y-5 w-4/5 ">
        <div className="flex flex-row justify-start space-x-5">
          <Image
            className=" object-scale-down max-h-full m-auto "
            src="https://dcoromina.s-ul.eu/career/UaOSuGDu"
            width={50}
            height={50}
            alt="image of author"
          />
          <div className="flex flex-col w-96 ">
            <div className="flex flex-row">
              Chief Technology Officer
              <div className="text-orange-400"> @ Myoo.io</div>
            </div>
            <div className="">2022-present</div>
          </div>
        </div>

        <ol>
          - In charge of building and mantaining the project infraestructure
        </ol>
        <ul>- Responsible for building and managing a dev team</ul>
        <ul>- Main software developer</ul>
      </div>
      <div className="flex flex-col w-4/5 space-y-5 justify-evenly">
        <div className="flex flex-row w-full items-center hover:cursor-pointer hover:border-opacity-60  rounded-lg bg-gradient-to-r from-orange-500 to-black  p-2">
          <Image
            className=" object-scale-down max-h-full m-auto"
            src="https://dcoromina.s-ul.eu/language-logos/aWJsz0n9"
            width={40}
            height={40}
            alt="image of author"
          />
          <p>Flutter</p>
        </div>
        <div className="flex flex-row w-3/4 items-center hover:cursor-pointer hover:border-opacity-60  rounded-lg bg-gradient-to-r from-orange-900 to-black  p-2">
          <Image
            className=" object-scale-down max-h-full m-auto"
            src="https://dcoromina.s-ul.eu/language-logos/aWJsz0n9"
            width={40}
            height={40}
            alt="image of author"
          />
          <p>React</p>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
