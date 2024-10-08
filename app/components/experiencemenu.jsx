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
    tech1: "https://dcoromina.s-ul.eu/language-logos/I6Kr7yXK",
    tech2: "https://dcoromina.s-ul.eu/language-logos/Yt4YPqLE",
    tech3: "https://dcoromina.s-ul.eu/language-logos/NjMedOqe",
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
    tech1: "https://dcoromina.s-ul.eu/language-logos/8rfCSm72",
    tech2: "https://dcoromina.s-ul.eu/language-logos/YnIFmQqm",
    tech3: "https://dcoromina.s-ul.eu/language-logos/aWJsz0n9",
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
    tech1: "https://dcoromina.s-ul.eu/language-logos/I6Kr7yXK",
    tech2: "https://dcoromina.s-ul.eu/language-logos/Yt4YPqLE",
    tech3: "https://dcoromina.s-ul.eu/language-logos/NjMedOqe",
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
    tech1: "https://dcoromina.s-ul.eu/language-logos/8rfCSm72",
    tech2: "https://dcoromina.s-ul.eu/language-logos/YnIFmQqm",
    tech3: "https://dcoromina.s-ul.eu/language-logos/aWJsz0n9",
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
      className="flex flex-col items-center gap-5   w-full"
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
    </div>
  );
};
export default ExpMenu;
