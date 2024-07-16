import React from "react";
import Image from "next/image";
import LangComp from "@/app/components/LangComp";

const AboutSection = () => {
  return (
    <div
      id="AboutSection"
      className="flex flex-col items-center min-h-min py-5 space-y-10 w-full"
    >
      <div className="text-orange-400 font-bold text-3xl text-center">
        ABOUT ME
      </div>
      <div className=" text-pretty text-center px-5 md:w-2/4">
        Welcome to my portfolio! I'm David, a passionate and dedicated [Your
        Profession] with a knack for bringing creative ideas to life.I
        specialize in [mention your key skills or areas of expertise] and I am
        committed to delivering high-quality work that exceeds expectations.{" "}
        <br />
        <br />
        My journey in [Your Profession] has been driven by a love for innovation
        and a desire to continuously learn and grow. Each project I undertake is
        a new opportunity to challenge myself and craft unique solutions
        tailored to my clients needs. Explore my portfolio to see some of my
        latest work, and feel free to reach out if youd like to collaborate or
        learn more about my process.
      </div>

      <div className="flex flex-row justify-evenly  md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row md:justify-evenly lg:justify-evenly w-full  ">
        {/* ******************** Hobbies block ******************* */}
        <div className="flex flex-col items-center space-y-5  md:w-1/2 ">
          <h2 className="font-bold text-2xl ">HOBBIES</h2>
          <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-2">
            <div className="w-50 h-50 p-5 rounded-xl bg-[#18191E] border border-[#33353F] hover:border-opacity-40 hover:shadow-md hover:shadow-orange-400  ">
              <Image
                className=" rounded-br-xl rounded-md"
                src="https://dcoromina.s-ul.eu/icons/lFPl9AWz"
                width={70}
                height={70}
                alt="image of author"
              />
              <p className="text-center text-md">Cooking</p>
            </div>
            <div className="w-50 h-50  p-5 rounded-xl bg-[#18191E] border border-[#33353F] hover:border-opacity-40 hover:shadow-md hover:shadow-orange-400">
              <Image
                className=" rounded-br-xl rounded-md"
                src="https://dcoromina.s-ul.eu/icons/CEYetTpH"
                width={70}
                height={70}
                alt="image of author"
              />
              <p className="text-center">Reading</p>
            </div>
            <div className="w-50 h-50 p-5  rounded-xl bg-[#18191E] border border-[#33353F] hover:border-opacity-40 hover:shadow-md hover:shadow-orange-400">
              <Image
                className=" rounded-br-xl rounded-md"
                src="https://dcoromina.s-ul.eu/icons/1rPi3d8L"
                width={70}
                height={70}
                alt="image of author"
              />
              <p className="text-center">Traveling</p>
            </div>
            <div className="  p-5 rounded-xl bg-[#18191E] border border-[#33353F] hover:border-opacity-40 hover:shadow-md hover:shadow-orange-400">
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
        <div className="flex flex-col items-center space-y-5 w-2/4 ">
          <h2 className="font-bold text-2xl white">LANGUAGES</h2>
          <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 w-full space-y-5 md:space-y-0 lg:space-y-0 ">
            <div className=" relative bg-[url('https://dcoromina.s-ul.eu/pkItsxhG')]  md:w-full lg:w-full h-32 md:h-[150px] lg:h-[150px] bg-cover bg-center bg-no-repeat  rounded-xl flex items-end justify-end hover:h-auto  transition ease-in-out  duration-500 hover:scale-110 ">
              <div className="absolute w-auto  h-auto bg-orange-500 text-white z-10 rounded-badge -top-3 -right-2 animate-pulse transition-none  ">
                <p className="p-1 text-xs">Tap</p>
              </div>
              <div className="flex flex-col items-end h-full md:h-full lg:h-full px-3 py-3 md:px-5 lg:px-5  rounded-b-xl w-full justify-center rounded-xl bg-gradient-to-l from-black to-70% to-transparent hover:backdrop-blur-sm hover:border-orange-500 hover:border-1 hover:bg-black/50 group ">
                <div className="text-2xl md:text-3xl font-bold group-hover:hidden">
                  ENGLISH
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="text-xl md:text-2xl font-bold text-orange-500 ">
                    <p className="uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] group-hover:hidden">
                      C2
                    </p>
                  </div>
                  <div className="">
                    <Image
                      className=" object-scale-down max-h-full m-auto group-hover:hidden"
                      src="https://dcoromina.s-ul.eu/lang-flags/DCzGlUyv"
                      width={40}
                      height={40}
                      alt="image of author"
                    />
                  </div>
                  <div className="group-hover:w-full ">
                    <p className="hidden group-hover:block group-hover:transition ease-in-out">
                      - Studied and worked for 3 months in ireland as part of
                      the Erasmus+ program
                    </p>
                    <p className="hidden group-hover:block group-hover:transition ease-in-out">
                      - Cambridge certificate and title
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-[url('https://dcoromina.s-ul.eu/9iU9x0hZ')] w-full md:full lg:w-full h-32 md:h-[150px] lg:h-[150px] bg-cover bg-center bg-no-repeat  rounded-xl flex items-end justify-end hover:h-auto transition ease-in-out  duration-500 hover:scale-110 ">
              <div className="flex flex-col items-end h-full md:h-full lg:h-full px-3 py-3 md:px-5 lg:px-5  rounded-b-xl w-full justify-center rounded-xl bg-gradient-to-l from-black to-70% to-transparent hover:backdrop-blur-sm hover:border-orange-500 hover:border-1 hover:bg-black/50 group">
                <div className="text-2xl md:text-3xl font-bold group-hover:hidden ">
                  SPANISH
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <div className="text-xl md:text-2xl font-bold text-orange-500 ">
                    <p className="uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] group-hover:hidden">
                      Native
                    </p>
                  </div>
                  <div className="">
                    <Image
                      className=" object-scale-down max-h-full m-auto group-hover:hidden"
                      src="https://dcoromina.s-ul.eu/lang-flags/hFg9OTYb"
                      width={40}
                      height={40}
                      alt="image of author"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="hidden group-hover:block">
                    - Learnt since childhood
                  </p>
                  <p className="hidden group-hover:block">
                    - Used to speak and to comprehend spanish speaking people
                    and content
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-[url('https://dcoromina.s-ul.eu/n7ZQcdUJ')] w-full md:full lg:w-full h-32 md:h-[150px] lg:h-[150px] bg-cover bg-center bg-no-repeat  rounded-xl flex items-end justify-end hover:h-auto transition ease-in-out  duration-500 hover:scale-110 ">
              <div className="flex flex-col items-end h-full md:h-full lg:h-full px-3 py-3 md:px-5 lg:px-5  rounded-b-xl w-full justify-center rounded-xl bg-gradient-to-l from-black to-70% to-transparent hover:backdrop-blur-sm hover:border-orange-500 hover:border-1 hover:bg-black/50 group">
                <div className="text-2xl md:text-3xl font-bold group-hover:hidden ">
                  CATALAN
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <div className="text-xl md:text-2xl font-bold text-orange-500">
                    <p className=" uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] group-hover:hidden">
                      Native
                    </p>
                  </div>
                  <div className="">
                    <Image
                      className=" object-scale-down max-h-full m-auto group-hover:hidden"
                      src="https://dcoromina.s-ul.eu/lang-flags/pXy52NGf"
                      width={40}
                      height={40}
                      alt="image of author"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="hidden group-hover:block">
                    - Learned and spoken since childhood
                  </p>
                  <p className="hidden group-hover:block">
                    - Used daily everywhere in my hometown
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-[url('https://dcoromina.s-ul.eu/resources/sKlkHFzv')] w-full md:full lg:w-full h-32 md:h-[150px] lg:h-6/6 bg-cover bg-center bg-no-repeat  rounded-xl flex items-end justify-end hover:h-auto transition ease-in-out  duration-500 hover:scale-110">
              <div className="flex flex-col items-end h-full md:h-full lg:h-full px-3 py-3 md:px-5 lg:px-5  rounded-b-xl w-full justify-center rounded-xl bg-gradient-to-l from-black from-0% to-70% to-transparent hover:backdrop-blur-sm hover:border-orange-500 hover:border-1 hover:bg-black/50 group">
                <div className="text-2xl md:text-3xl font-bold group-hover:hidden ">
                  ITALIAN
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <div className="text-xl md:text-2xl font-bold text-orange-500">
                    <p className="uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] group-hover:hidden">
                      A2
                    </p>
                  </div>
                  <div className="">
                    <Image
                      className=" object-scale-down max-h-full m-auto group-hover:hidden"
                      src="https://dcoromina.s-ul.eu/lang-flags/7fb3Kohj"
                      width={40}
                      height={40}
                      alt="image of author"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="hidden group-hover:block">
                    - Started learning a short time ago
                  </p>
                  <p className="hidden group-hover:block">
                    - Can speak and understand basic phrases
                  </p>
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
