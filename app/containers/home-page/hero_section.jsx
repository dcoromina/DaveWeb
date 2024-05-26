import React from "react";
import Image from "next/image";
import ScrollDownIndicator from "../../components/ScrollDown";
import NavSection from "../../components/NavSection/NavSection";

const HeroSection = () => {
  return (
    <section>
      {/* body */}
      <div className="text-white flex flex-col w-full h-[calc(100vh-64px)] lg:justify-between md:justify-between md:flex-row lg:flex-row md:text-left lg:text-left items-center text-center relative">
        <div className="flex flex-col justify-center lg:space-y-10 lg:max-w-fit  w-full items-center text-pretty  ">
          <div className="w-3/4 space-y-5 md:space-y-10 lg:space-y-15 ">
            <div className="font-bold text-3xl md:text-6xl lg:text-7xl  text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400">
              Hi There!
            </div>
            <div className="font-bold text-4xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-black">
              I&apos;M DAVID
            </div>
            <div className="lg:w-1/2 text-xl justify-center ">
              Developer entrepenour athlete dreamer and all-around lunatic
            </div>
            <div className="flex flex-row justify-center md:justify-start lg:justify-start space-x-4">
              <button className="border border-solid border-white rounded-xl px-2 py-1 shadow-md hover:shadow-orange-400">
                Contact me
              </button>
              <button className="border border-solid border-white rounded-xl px-2 py-1 shadow-md hover:shadow-orange-400">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end  w-3/4 h-3/6 md:h-5/6   ">
          <Image
            className=" object-scale-down max-h-full m-auto "
            src="https://dcoromina.s-ul.eu/image/ZqNI27Hv"
            width={697}
            height={958}
            alt="image of author"
          />
        </div>
        {/* Scroll down indicator */}
        <div className=" flex flex-row w-full justify-center items-center  animate-bounce animate-infinite animate-normal animate-fill-forwards absolute z-0 bottom-10 left1/2">
          <div class="border-solid border-white justify-items-end w-6 h-6 border-b-4 border-l-4 rounded-sm -rotate-45 cursor-pointer">
            <button className="" type="submit"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
