"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./buttons/TabButtons.jsx";
import TabContent from "./buttons/TabContent.jsx";
const expData = [
  {
    id: 1,
    company: "Myoo.io",
    years: "2022 - present",
    logo: "https://dcoromina.s-ul.eu/career/UaOSuGDu",
    position: "Chief Technology Officer",
    tech1: "Flutter",
    tech2: "Supabase",
    tech3: "Python",
    item1: "- In charge of building and mantaining the project infraestructure",
    item2: "- Responsible for building and managing a dev team",
    item3: "- Main software developer",
  },
  {
    id: 2,
    company: "MyHealp",
    years: "2020 - 2022",
    logo: "https://dcoromina.s-ul.eu/career/vuc1n8GY",
    position: "Developer ",
    tech1: "Flutter",
    tech2: "PHP",
    tech3: "MySQL",
    item1: "- Backend development using PHP and SQL of a GPS tracking project",
    item2: "- Developer of a health and fitness chatbot",
    item3: "- Full-stack developer",
  },
  {
    id: 3,
    company: "GourmetFuel",
    years: "2019",
    logo: "https://dcoromina.s-ul.eu/career/rU1aDGKh",
    position: "Web Developer",
    tech1: "Flutter",
    tech2: "Supabase",
    tech3: "Python",
    item1: "- Updated the website from an old architecture to a new one",
    item2: "- Developed multiple features to help improve the site",
    item3: "- Part of my Erasmus+ project",
  },
  {
    id: 4,
    company: "SiOlot",
    years: "2017",
    logo: "https://dcoromina.s-ul.eu/career/ZJpdRc5J",
    position: "SysAdmin",
    tech1: "Flutter",
    tech2: "Supabase",
    tech3: "Python",
    item1: "- Mounted and repaired different systems",
    item2: "- Helped installing multiple servers",
    item3: "- Developed basic webs",
  },
  {
    id: 5,
    company: "Misc.",

    logo: "https://dcoromina.s-ul.eu/career/N8jd9elH",

    image1: "https://dcoromina.s-ul.eu/icons/LpQOjNk5",
    image2: "https://dcoromina.s-ul.eu/icons/z6GliilD",
    image3: "https://dcoromina.s-ul.eu/icons/5xZakCk5",

    item1: "Basketball coach",
    item2: "Worked for Non Profit orgs against Leukemia",
    item3: "Other odd and summer jobs",
  },
];

const ExpMenu = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      id="CareerSection"
      className="flex flex-col items-center gap-5  w-full"
    >
      <p className="text-3xl lg:text-6xl font-bold text-orange-500 uppercase">
        Career
      </p>
      <div className="flex flex-col items-center gap-5">
        <TabButton
          expData={expData}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <TabContent activeTab={activeTab} expData={expData} />
      </div>

      {/* <div className="flex items-center justify-center bg-red-500">
        <div
          role="tablist"
          className="tabs tabs-sm sm:tabs-sm md:tabs-md lg:tabs-lg xl:tabs-lg "
        >

          <input
            type="radio"
            name="my_tabs"
            role="tab"
            className="tab checked:text-orange-500 checked:font-bold hover:text-orange-500 checked:border-b-2 font-bold "
            aria-label="Myoo.io"
            defaultChecked
          />

          <div role="tabpanel" className="tab-content p-5 ">
            <div className="flex flex-col items-start gap-5 w-full text-small">
              <div className="flex flex-row  gap-5">
                <Image
                  className=" object-scale-down max-h-full m-auto "
                  src="https://dcoromina.s-ul.eu/career/UaOSuGDu"
                  width={40}
                  height={40}
                  alt="image of author"
                />
                <div className="flex flex-col ">
                  <div className="flex flex-row ">
                    <p>Chief Technology Officer @ </p>{" "}
                    <p className="text-orange-400 font-bold">Myoo.io</p>
                  </div>
                  <div className="">2022-present</div>
                </div>
              </div>
              <div className=" w-full ">
                <ul>
                  - In charge of building and mantaining the project
                  infraestructure
                </ul>
                <ul>- Responsible for building and managing a dev team</ul>
                <ul>- Main software developer</ul>
              </div>
            </div>
          </div>
      
          <input
            type="radio"
            name="my_tabs"
            role="tab"
            className="tab checked:text-orange-500 checked:font-bold hover:text-orange-500 checked:border-b-2 font-bold "
            aria-label="MyHealp"
          />
          <div role="tabpanel" className="tab-content p-5">
            <div className="flex flex-col items-start gap-5 w-full text-small">
              <div className="flex flex-row justify-start space-x-5">
                <Image
                  className=" object-scale-down max-h-full m-auto "
                  src="https://dcoromina.s-ul.eu/career/vuc1n8GY"
                  width={50}
                  height={50}
                  alt="image of author"
                />
                <div className="flex flex-col  ">
                  <div className="flex flex-row text-wrap">
                    <p>Developer @ </p>{" "}
                    <a
                      href="https://www.myhealp.com"
                      className="text-orange-400 font-bold"
                    >
                      MyHealp
                    </a>
                  </div>
                  <div className="">2020-2022</div>
                </div>
              </div>
              <div className=" w-full ">
                <ul>- Backend development of a GPS tracking project</ul>
                <ul>- Developer of a health and fitness chatbot</ul>
                <ul>- Full-stack developer</ul>
              </div>
            </div>
          </div>

          
          <input
            type="radio"
            name="my_tabs"
            role="tab"
            className="tab checked:text-orange-500 checked:font-bold hover:text-orange-500 checked:border-b-2 font-bold "
            aria-label="GourmetFuel"
          />
          <div role="tabpanel" className="tab-content p-5">
            <div className="flex flex-col items-start gap-5 w-full text-small">
              <div className="flex flex-row justify-start space-x-5">
                <Image
                  className=" object-scale-down max-h-full m-auto "
                  src="https://dcoromina.s-ul.eu/career/rU1aDGKh"
                  width={50}
                  height={50}
                  alt="image of author"
                />
                <div className="flex flex-col  ">
                  <div className="flex flex-row text-wrap">
                    <p>Web Developer @ </p>{" "}
                    <a
                      className="text-orange-400 font-bold"
                      href="https://www.gourmetfuel.com"
                    >
                      GourmetFuel
                    </a>
                  </div>
                  <div className="">2019</div>
                </div>
              </div>
              <div className=" w-3/7">
                <ul>
                  - Updated the website from an old architecture to a new one
                </ul>
                <ul>- Developed multiple features to help improve the site</ul>
                <ul>- Part of my Erasmus+ project</ul>
              </div>
            </div>
          </div>
          
          <input
            type="radio"
            name="my_tabs"
            role="tab"
            className="tab checked:text-orange-500 checked:font-bold hover:text-orange-500 checked:border-b-2 font-bold "
            aria-label="SiOlot"
          />
          <div role="tabpanel" className="tab-content p-5">
            <div className="flex flex-col items-start space-y-5 w-full text-small">
              <div className="flex flex-row justify-start space-x-5">
                <Image
                  className=" object-scale-down max-h-full m-auto "
                  src="https://dcoromina.s-ul.eu/career/ZJpdRc5J"
                  width={90}
                  height={50}
                  alt="image of author"
                />
                <div className="flex flex-col ">
                  <div className="flex flex-row ">
                    <p>SysAdmin @ </p>{" "}
                    <a
                      href="https://www.siolot.es"
                      className="text-orange-400 font-bold"
                    >
                      SiOlot
                    </a>
                  </div>
                  <div className="">2017</div>
                </div>
              </div>
              <div className=" w-full">
                <ul>- Mounted and repaired different systems</ul>
                <ul>- Helped installing multiple servers </ul>
                <ul>- Developed basic webs</ul>
              </div>
            </div>
          </div>
         
          <input
            type="radio"
            name="my_tabs"
            role="tab"
            className="tab checked:text-orange-500 checked:font-bold hover:text-orange-500 checked:border-b-2 font-bold "
            aria-label="Misc."
          />
          <div role="tabpanel" className="tab-content p-5 ">
            <div className="flex flex-col items-start gap-5 w-3/4 text-small ">
              <div className="flex flex-row justify-start gap-5">
                <Image
                  className=" object-scale-down max-h-full m-auto "
                  src="https://dcoromina.s-ul.eu/career/N8jd9elH"
                  width={40}
                  height={40}
                  alt="image of author"
                />
                <div className="flex flex-col  justify-center">
                  <p className="text-base uppercase font-bold">Other Jobs </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-5">
                
                <div className="flex flex-row items-center space-x-5 ">
                  <Image
                    className=" object-scale-down max-h-full m-auto "
                    src="https://dcoromina.s-ul.eu/icons/LpQOjNk5"
                    width={30}
                    height={30}
                    alt="image of author"
                  />
                  <p>Basketball coach</p>
                </div>
                
                <div className="flex flex-row items-center space-x-5 justify-start">
                  <Image
                    className=" object-scale-down max-h-full m-auto "
                    src="https://dcoromina.s-ul.eu/icons/z6GliilD"
                    width={40}
                    height={40}
                    alt="image of author"
                  />
                  <p>Worked for Non Profit orgs against Leukemia</p>
                </div>
           
                <div className="flex flex-row items-center space-x-5 justify-start">
                  <Image
                    className=" object-scale-down max-h-full m-auto "
                    src="https://dcoromina.s-ul.eu/icons/5xZakCk5"
                    width={40}
                    height={40}
                    alt="image of author"
                  />
                  <p>Other odd and summer jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>*/}
    </div>
  );
};
export default ExpMenu;
