"use client";
import React from "react";
import Image from "next/image";
import GradientText from "/app/components/GradientText";

const HeroSection = () => {
  return (
    <section>
      {/* body */}
      <div className=" md:relative text-white flex flex-col  justify-evenly w-full h-[calc(100vh-64px)] lg:justify-between md:justify-between md:flex-row lg:flex-row md:text-left lg:text-left items-center text-center">
        <div className="flex flex-col justify-center lg:space-y-10 lg:max-w-fit  w-full items-center text-pretty  ">
          <div className="w-3/4 space-y-5 md:space-y-10 lg:space-y-15 animate-fade-right duration-200">
            {/*      <GradientText /> ---------------------------------------------------------gradient text------------------------------------------------ */}
            <div className="font-bold text-3xl md:text-6xl lg:text-7xl  text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500">
              Hi There!
            </div>
            <div className="font-bold text-4xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black ">
              I&apos;M DAVID
            </div>
            <div className="lg:w-1/2 text-xl justify-center ">
              Developer entrepenour athlete dreamer and all-around lunatic
            </div>
            <div className="flex flex-row justify-center md:justify-start lg:justify-start space-x-4 text-center">
              <a
                href="#ContactSection"
                className="bg-[#18191E] border border-[#33353F]  text-gray-100 text-sm rounded-lg block w-full p-2.5 hover:border-orange-500/50"
              >
                Contact me
              </a>
              <a
                className="bg-[#18191E] border border-[#33353F]  text-gray-100 text-sm rounded-lg block w-full p-2.5 hover:border-orange-500/50"
                href="https://dcoromina.s-ul.eu/assets/4qlJdzK6"
                download="ubicacio"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end  w-3/4 h-3/6 md:h-5/6   ">
          <Image
            className=" object-scale-down max-h-full m-auto animate-fade-left duration-200"
            src="https://dcoromina.s-ul.eu/UXusnDpS"
            width={697}
            height={958}
            alt="image of author"
          />
        </div>
        {/* Scroll down indicator */}
        <div className=" md:absolute flex flex-row w-full justify-center items-center  animate-bounce animate-infinite animate-normal animate-fill-forwards  z-0 bottom-10 left1/2">
          <div className="border-solid border-white justify-items-end w-6 h-6 border-b-4 border-l-4 rounded-sm -rotate-45 cursor-pointer">
            <a
              href="#AboutSection"
              className="bg-transparent block w-full p-2.5 "
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
