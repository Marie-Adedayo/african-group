import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#071a0a]">
      <div className="flex items-center font-medium justify-between text-[#FCFFFC] border-b border-white px-4 md:px-10">
        {/* Logo and Menu Toggle */}
        <div className=" md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="z-50 md:z-0 text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <NavLinks isMobile={false} />
          <li>
              <Link to="/" className="py-2 px-3 ">
                Property Search
              </Link>
          </li>
          <li>
            <Link to="/" className="py-2 px-3">
              About
            </Link>
          </li>
        </ul>



        <div className=" hidden md:block">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col md:flex-row gap-4 list-none">
              <li>
                <Link to="/" className="py-2 px-3 ">
                  People
                </Link>
              </li>
              <li>
                <Link to="/" className="py-2 px-3 ">
                  Careers
                </Link>
              </li>
            </div>

            <Button />

          </div>

        </div>

        {/* Mobile Navigation */}
        <div>
          <ul
            className={`fixed md:hidden bg-[#071a0a] pt-14 w-full top-0 bottom-0 overflow-y-auto z-40 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            <NavLinks isMobile={true} />
            <li>
              <Link to="/" className="py-2 px-3 block">
                About
              </Link>
            </li>
            <div className="py-0 pl-0 md:py-5 md:pl-4">
              <li>
                <Link to="/" className="py-2 px-3 block">
                  Property Search
                </Link>
              </li>
              <li>
                <Link to="/" className="py-2 px-3 block">
                  People
                </Link>
              </li>
              <li>
                <Link to="/" className="py-2 px-3 block">
                  Careers
                </Link>
              </li>
              <Button />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
