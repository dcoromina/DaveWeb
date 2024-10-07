import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <div className="w-full  flex flex-col gap-2">
      <div className="text-orange-400 text-7xl font-bold w-1/4  ">
        MY PROJECTS
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="w-full h-full p-5 rounded-lg  bg-red-500 bg-[url('https://dcoromina.s-ul.eu/n7ZQcdUJ')] bg-cover">
          Project name
        </div>
        <div className="w-full h-full p-5 rounded-lg  bg-red-500">
          Project name
        </div>
        <div className="w-full h-full p-5 rounded-lg col-span-2 bg-red-500">
          Find more of my projects
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
