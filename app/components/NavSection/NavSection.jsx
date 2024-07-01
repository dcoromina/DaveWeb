"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

function NavSection() {
  return (
    <Navbar className="bg-transparent" position="static">
      <NavbarContent>
        <NavbarBrand>
          <Image
            src="https://dcoromina.s-ul.eu/7o6fnBrL"
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
            href="#"
            className="hover:border-solid hover:border-orange-400 hover:border-b-3"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="#"
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
            href="#"
            className="hover:border-solid hover:border-orange-400 hover:border-b-3"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="primary"
            href="#"
            className="hover:border-solid hover:border-orange-400 hover:border-b-3"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            color="primary"
            href="www.linkedin.com/in/david-coromina-470635208"
          >
            <Image
              src="https://dcoromina.s-ul.eu/logos/ezNndJcm"
              width={30}
              height={40}
              alt="Linkedin logo"
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavSection;
