import React from "react";
import Image from "next/image";
import LangComp from "@/app/components/LangComp";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center min-h-min py-5 space-y-10 w-full">
      <div className="text-orange-400 font-bold text-7xl text-center">
        ABOUT ME
      </div>
      <div className=" text-pretty">
        Non aliquip laborum sit minim quis consectetur reprehenderit commodo
        nostrud.<br></br> Aliquip sunt aute duis anim esse amet aliquip do culpa
        amet excepteur ea excepteur consectetur. <br></br>
        <br />
        Anim enim amet amet non laborum laborum exercitation ullamco occaecat
        ipsum laborum nostrud.
      </div>

      <div className="flex flex-row justify-evenly space-y-5 md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row md:justify-evenly lg:justify-evenly w-full items-center ">
        {/* ******************** Hobbies block ******************* */}
        <div className="flex flex-col items-center space-y-5  md:w-1/2 ">
          <h2 className="font-bold text-2xl ">HOBBIES</h2>
          <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-2">
            <div className="w-50 h-50 p-5 rounded-xl border-slate-400 border-2 border-opacity-10 hover:border-opacity-40 hover:shadow-md hover:shadow-orange-400  ">
              <Image
                className=" rounded-br-xl rounded-md"
                src="https://dcoromina.s-ul.eu/icons/lFPl9AWz"
                width={70}
                height={70}
                alt="image of author"
              />
              <p className="text-center text-md">Cooking</p>
            </div>
            <div className="w-50 h-50  p-5 rounded-xl border-slate-400 border-2 border-opacity-10 hover:border-opacity-40 hover:shadow-md hover:shadow-orange-400">
              <Image
                className=" rounded-br-xl rounded-md"
                src="https://dcoromina.s-ul.eu/icons/CEYetTpH"
                width={70}
                height={70}
                alt="image of author"
              />
              <p className="text-center">Reading</p>
            </div>
            <div className="w-50 h-50 p-5  rounded-xl border-slate-400 border-2 border-opacity-10 hover:border-opacity-40 hover:shadow-md hover:shadow-orange-400">
              <Image
                className=" rounded-br-xl rounded-md"
                src="https://dcoromina.s-ul.eu/icons/1rPi3d8L"
                width={70}
                height={70}
                alt="image of author"
              />
              <p className="text-center">Traveling</p>
            </div>
            <div className="w-50 h-50  p-5 rounded-xl border-slate-400 border-2 border-opacity-10 hover:border-opacity-40 hover:shadow-md hover:shadow-orange-400">
              <Image
                className=" rounded-br-xl rounded-md"
                src="https://dcoromina.s-ul.eu/icons/H4kJoUNy"
                width={70}
                height={70}
                alt="image of author"
              />
              <p className="text-center">Sports</p>
            </div>
          </div>
        </div>
        {/* ********************** Languages block ******************* */}
        <div className="flex flex-col items-center space-y-5 w-2/4">
          <h2 className="font-bold text-2xl white">LANGUAGES</h2>
          <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 w-full space-y-10 md:space-y-0 lg:space-y-0">
            <div className=" bg-[url('https://dcoromina.s-ul.eu/pkItsxhG')] w-full md:w-full lg:w-full h-[100px] md:h-[150px] lg:h-[150px] bg-cover bg-center bg-no-repeat  rounded-xl flex items-end justify-end hover:shadow-inner hover:shadow-orange-500">
              <div className="flex flex-col items-end h-full md:h-full lg:h-full px-3 py-3 md:px-5 lg:px-5  rounded-b-xl w-full justify-center rounded-xl bg-gradient-to-l from-black to-70% to-transparent">
                <div className="text-2xl md:text-3xl font-bold  ">ENGLISH</div>
                <div className="flex flex-row items-center space-x-2">
                  <div className="text-xl md:text-2xl font-bold text-orange-500 ">
                    C2
                  </div>
                  <div className="">
                    <Image
                      className=" object-scale-down max-h-full m-auto"
                      src="https://dcoromina.s-ul.eu/lang-flags/DCzGlUyv"
                      width={40}
                      height={40}
                      alt="image of author"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-[url('https://dcoromina.s-ul.eu/9iU9x0hZ')] w-full md:full lg:w-full h-[100px] md:h-[150px] lg:h-[150px] bg-cover bg-center bg-no-repeat  rounded-xl flex items-end justify-end hover:shadow-inner hover:shadow-orange-500">
              <div className="flex flex-col items-end h-full md:h-full lg:h-full px-3 py-3 md:px-5 lg:px-5  rounded-b-xl w-full justify-center rounded-xl bg-gradient-to-l from-black to-70% to-transparent">
                <div className="text-2xl md:text-3xl font-bold  ">SPANISH</div>
                <div className="flex flex-row items-center space-x-2">
                  <div className="text-xl md:text-2xl font-bold text-orange-500 ">
                    NATIVE
                  </div>
                  <div className="">
                    <Image
                      className=" object-scale-down max-h-full m-auto"
                      src="https://dcoromina.s-ul.eu/lang-flags/hFg9OTYb"
                      width={40}
                      height={40}
                      alt="image of author"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-[url('https://dcoromina.s-ul.eu/n7ZQcdUJ')] w-full md:full lg:w-full h-[100px] md:h-[150px] lg:h-[150px] bg-cover bg-center bg-no-repeat  rounded-xl flex items-end justify-end hover:shadow-inner hover:shadow-orange-500">
              <div className="flex flex-col items-end h-full md:h-full lg:h-full px-3 py-3 md:px-5 lg:px-5  rounded-b-xl w-full justify-center rounded-xl bg-gradient-to-l from-black to-70% to-transparent">
                <div className="text-2xl md:text-3xl font-bold  ">CATALAN</div>
                <div className="flex flex-row items-center space-x-2">
                  <div className="text-xl md:text-2xl font-bold text-orange-500">
                    NATIVE
                  </div>
                  <div className="">
                    <Image
                      className=" object-scale-down max-h-full m-auto"
                      src="https://dcoromina.s-ul.eu/lang-flags/pXy52NGf"
                      width={40}
                      height={40}
                      alt="image of author"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-[url('https://dcoromina.s-ul.eu/resources/sKlkHFzv')] w-full md:full lg:w-full h-[100px] md:h-[150px] lg:h-6/6 bg-cover bg-center bg-no-repeat  rounded-xl flex items-end justify-end hover:shadow-inner hover:shadow-orange-500 ">
              <div className="flex flex-col items-end h-full md:h-full lg:h-full px-3 py-3 md:px-5 lg:px-5  rounded-b-xl w-full justify-center rounded-xl bg-gradient-to-l from-black from-0% to-70% to-transparent">
                <div className="text-2xl md:text-3xl font-bold  ">ITALIAN</div>
                <div className="flex flex-row items-center space-x-2">
                  <div className="text-xl md:text-2xl font-bold text-orange-500">
                    A2
                  </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
