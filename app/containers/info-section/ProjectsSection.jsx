import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <div className="w-full h-svh  flex flex-col bg-fuchsia-200 py-5">
      <div className="text-orange-400 text-7xl font-bold w-1/4  ">
        MY PROJECTS
      </div>
      <div className="h-2/3 items-center flex flex-row bg-white">
        <div className="h-full bg-fuchsia-500 w-48 ">
          <Image
            className="  max-h-full m-auto object-fill "
            src="https://dcoromina.s-ul.eu/image/ZqNI27Hv"
            width={697}
            height={958}
            alt="image of author"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
