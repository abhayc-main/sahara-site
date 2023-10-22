import Image from "next/image";
import React from "react";
import Featured from "./Featured";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const handleClick = () => {};
  return (
    <nav className="container pt-6">
      <div className="flex justify-between items-center">
        <Image src="/SaharaLogo.png" width={150} height={100} alt="logo" />
        <ul className="md:flex gap-8 items-center font-semibold text-[14px] hidden">
          <button>
            <a href="#menu">Menu</a>
          </button>

          <button>
            <a href="#aboutus">About Us</a>
          </button>

          <button>
            <a href="#footer">Contact Us</a>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
