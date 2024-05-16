import React from "react";
import Image from "next/image";
const CareerSection = () => {
  return (
    <div className="h-screen w-screen flex flex-col space-y-1 items-center py-5">
      <div className="flex flex-col  items-start px-20">
        <div className="text-orange-400 font-bold text-7xl">CAREER</div>
      </div>
      <div className="flex flex-row space-x-10 w-screen justify-center items-start font-medium">
        <div className="text-orange-400 font-bold active:text-orange-400 hover:text-orange-400 cursor-pointer hover:border-b-2 border-orange-400">
          Misc
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer">
          Siolot
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer">
          GourmetFuel
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer">
          MyHealp
        </div>
        <div className="text-white active:text-orange-400 hover:text-orange-400 cursor-pointer">
          Myoo.io
        </div>
      </div>

      <div className="flex flex-col items-start space-y-5 w-2/5 ">
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
              Chief Technology Officer{" "}
              <div className="text-orange-400"> @ Myoo.io</div>
            </div>
            <div className="">2022-present</div>
          </div>
        </div>

        <ul>
          In charge of building and mantaining the project infraestructure
        </ul>
        <ul>Responsible for building and managing a dev team</ul>
        <ul>Main software developer</ul>
      </div>
    </div>
  );
};

export default CareerSection;
