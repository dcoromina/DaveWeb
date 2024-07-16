import React from "react";
import Image from "next/image";
import Link from "next/link";

function NavSection() {
  const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];
  return (
    <div className="text-white flex w-3/4 flex-row justify-between py-5 text-base items-center">
      <Image
        src="https://dcoromina.s-ul.eu/e9iRHmKf"
        width={50}
        height={50}
        alt="Logo of the author"
      />
      <div className=" flex flex-row justify-center space-x-3 md:space-x-5 w-2/4 ">
        <div className=" font-light  cursor-pointer border-b-3 border-transparent hover:border-b-3 hover:border-orange-500 hidden md:block">
          About
        </div>
        <div className="font-light cursor-pointer hover:border-b-3 hover:border-orange-500 hidden md:block">
          Skills
        </div>
        <div className="font-light cursor-pointer hover:border-b-3 hover:border-orange-500 hidden md:block">
          Career
        </div>
        <div className="font-light cursor-pointer hover:border-b-3 hover:border-orange-500 hidden md:block">
          Projects
        </div>
        <div className="font-light cursor-pointer hover:border-b-3 hover:border-orange-500 hidden md:block">
          Contact
        </div>
      </div>
      <Link href={"https://www.linkedin.com/in/dcoromina"}>
        <Image
          src="https://dcoromina.s-ul.eu/logos/ezNndJcm"
          width={35}
          height={35}
          alt="Clickable linked in logo"
        />
      </Link>
    </div>
  );
}

export default NavSection;
