"use client";

import tenmediaLogo from "../assets/tenmedia-logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  if (typeof window !== "undefined") {
    useEffect(() => {
      const changeBackground = () => {
        if (window.scrollY >= 80) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };

      window.addEventListener("scroll", changeBackground);
    }, []);
  }

  return (
    <nav
      className={`flex justify-between items-center w-full py-5 px-12 fixed top-0 z-10 duration-300 ${
        navbar ? "bg-black bg-opacity-75" : ""
      }`}
    >
      <div>
        <a href="#">
          <img
            src={tenmediaLogo.src}
            className="w-[200px]"
            alt="TenMedia logo"
          />
        </a>
      </div>
      <div className="text-white flex items-center gap-12 font-poppins">
        <ul className="flex gap-12">
          <a href="#services" className="hover:text-primary duration-300">
            <li>Services</li>
          </a>
          <a href="#recent-work" className="hover:text-primary duration-300">
            <li>Recent Work</li>
          </a>
          <a href="#faqs" className="hover:text-primary duration-300">
            <li>FAQs</li>
          </a>
        </ul>
        <a
          href="#book-call"
          className="border border-white rounded-lg bg-transparent px-10 py-2.5 relative hover:bg-primary hover:-translate-y-1 duration-500"
        >
          Free Consultation
        </a>
      </div>

      {/* Hamburger menu */}
    </nav>
  );
};

export default Navbar;
