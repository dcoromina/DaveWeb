import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white w-full">
      <div className="container py-10 flex justify-between">
        <Image
          src="https://dcoromina.s-ul.eu/7o6fnBrL"
          width={50}
          height={50}
          alt="Logo of the author"
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
