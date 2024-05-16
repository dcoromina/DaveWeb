import React from "react";
import Image from "next/image";

const LangComp = () => {
  return (
    <div className="w-screen h-screen flex flex-row justify-center ">
      <div className=" bg-[url('https://dcoromina.s-ul.eu/resources/sKlkHFzv')] w-1/3 md:w-[250] lg:w-[340] min-w-min h-[250px] bg-cover bg-center bg-no-repeat md:h-[350px] lg:h-[450px] rounded-xl flex flex-row items-end justify-between shadow-inner shadow-gray-500 hover:bg-red-400">
        <div className="flex flex-col items-end h-2/5 md:h-1/3 lg:h-1/3 px-3 md:px-5 lg:px-10 bg-black bg-opacity-40 rounded-b-xl w-full justify-evenly ">
          <div className="text-4xl font-bold  ">ITALIAN</div>
          <div className="flex flex-row space-x-5">
            <div className="text-3xl font-bold ">C2</div>
            <div className="">
              <Image
                className=" rounded-br-xl rounded-md"
                src="https://dcoromina.s-ul.eu/lang-flags/8xXXWwgt"
                width={70}
                height={70}
                alt="image of author"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangComp;
