import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      // Trigger navbar hide on scroll
      setIsScrolling(true);
      clearTimeout(timeout);
      // Show navbar after 300ms of no scroll
      timeout = setTimeout(() => setIsScrolling(false), 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-transparent fixed w-full z-50 font-TT-Commons transition-transform duration-500 ${
        isScrolling ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center font-TT-Commons font-medium  text-[#006400] border-b border-[#071a0a] px-4 md:px-10 overflow-hidden">
        {/* Logo and Menu Toggle */}
        <div className="md:w-auto w-full flex justify-between">
          <a href="/">
            <img 
              src="/Images/logo.jpg" 
              alt="logo" 
              className="md:cursor-pointer h-9" 
            />
          </a>

          <div
            className="z-50 md:z-0 text-3xl md:hidden text-[]"
            onClick={() => setOpen(!open)}
          >
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
            <Link to="/about" className="py-2 px-3">
              About
            </Link>
          </li>
        </ul>

        <div className="hidden md:block ">
          <div className="flex flex-col md:flex-row gap-4 justify-end items-end ">
            <div className="flex flex-col md:flex-row gap-4 list-none">
              <li>
                <Link to="/" className="py-2 px-3">
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
        <div className="fixed md:hidden">
          <ul
            className={`fixed md:hidden bg-[#fcfffc] pt-14 w-full top-0 text-[#071a0a] pb-10 overflow-y-auto z-40 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            <NavLinks isMobile={true} />
            <li>
              <Link to="/about" className="py-2 px-3 block">
                About
              </Link>
            </li>
            <div className="py-0 pl-0 md:py-5 md:pl-4 ">
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
