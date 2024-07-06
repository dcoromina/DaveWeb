"use client";
import React from "react";
import Image from "next/image";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

function NavSection() {
  return (
    <Navbar className="bg-transparent" position="static">
      <NavbarContent>
        <NavbarBrand>
          <Image
            src="https://dcoromina.s-ul.eu/e9iRHmKf"
            width={50}
            height={50}
            alt="Logo of the author"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="primary"
            href="#AboutSection"
            className="hover:border-solid hover:border-orange-400 hover:border-b-3"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#CareerSection"
            color="primary"
            aria-current="page"
            className="hover:border-solid hover:border-orange-400 hover:border-b-3"
          >
            Career
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="primary"
            href="#ProjectsSection"
            className="hover:border-solid hover:border-orange-400 hover:border-b-3"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="primary"
            href="#ContactSection"
            className="hover:border-solid hover:border-orange-400 hover:border-b-3"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/dcoromina"
          >
            <Image
              src="https://dcoromina.s-ul.eu/logos/ezNndJcm"
              width={30}
              height={40}
              alt="Linkedin logo"
            />
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavSection;
