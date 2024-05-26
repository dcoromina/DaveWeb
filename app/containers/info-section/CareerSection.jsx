import React from "react";
import Image from "next/image";
const CareerSection = () => {
  return (
    <div className="h-screen w-screen flex flex-col space-y-7 items-center py-5">
      <div className="flex flex-col  items-start px-20">
        <div className="text-orange-400 font-bold text-4xl md:text-7xl lg:text-7xl">
          EXPERIENCE
        </div>
      </div>

      <div className="flex flex-row w-screen justify-evenly items-start font-medium px-5  ">
        <div className="text-orange-400 font-bold active:text-orange-400 hover:text-orange-400 cursor-pointer hover:border-b-2 border-orange-400">
          Myoo.io
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer">
          MyHealp
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer">
          GourmetFuel
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer">
          Siolot
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer">
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
      <div className="flex flex-col w-4/5 h-2/5 justify-evenly">
        <div className="flex flex-row items-center justify-start border-solid border-white border-opacity-20 hover:cursor-pointer hover:border-opacity-60 border-2 rounded-lg bg-gradient-to-r from-orange-500 to-black  p-2">
          <Image
            className=" object-scale-down max-h-full m-auto"
            src="https://dcoromina.s-ul.eu/language-logos/aWJsz0n9"
            width={40}
            height={40}
            alt="image of author"
          />
          <p>Flutter</p>
        </div>
        <div className="flex flex-row items-center justify-start border-solid border-white border-opacity-20 hover:cursor-pointer hover:border-opacity-60 border-2 rounded-lg bg-gradient-to-r from-orange-500 to-black  p-2">
          <Image
            className=" object-scale-down max-h-full m-auto"
            src="https://dcoromina.s-ul.eu/language-logos/aWJsz0n9"
            width={40}
            height={40}
            alt="image of author"
          />
          <p>Flutter</p>
        </div>
        <div className="flex flex-row items-center justify-start border-solid border-white border-opacity-20 hover:cursor-pointer hover:border-opacity-60 border-2 rounded-lg bg-gradient-to-r from-orange-500 to-black p-2">
          <Image
            className=" object-scale-down max-h-full m-auto"
            src="https://dcoromina.s-ul.eu/language-logos/aWJsz0n9"
            width={40}
            height={40}
            alt="image of author"
          />
          <p>Flutter</p>
        </div>
        <div className="flex flex-row items-center justify-start border-solid border-white border-opacity-20 hover:cursor-pointer hover:border-opacity-60 border-2 rounded-lg bg-gradient-to-r from-orange-500 to-black  p-2">
          <Image
            className=" object-scale-down max-h-full m-auto"
            src="https://dcoromina.s-ul.eu/language-logos/aWJsz0n9"
            width={40}
            height={40}
            alt="image of author"
          />
          <p>Flutter</p>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
