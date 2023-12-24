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
      className={`flex justify-between items-center w-full py-5 min-[580px]:px-12 px-5 fixed top-0 z-10 duration-300 ${
        navbar ? "bg-black bg-opacity-75" : ""
      }`}
    >
      <div>
        <a href="#">
          <img
            src={tenmediaLogo.src}
            className="max-w-[200px] w-[75%]"
            alt="TenMedia logo"
          />
        </a>
      </div>
      <div className="text-white flex items-center gap-12 font-poppins max-[980px]:hidden">
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
      <div className="min-[981px]:hidden">
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

        <div
          className={`fixed right-0 bottom-0 z-40 h-full w-[300px] min-[1150px]:hidden bg-opacity-75 backdrop-blur-md bg-black text-lg ${
            toggle ? "flex-col" : "hidden"
          } ${navbar ? "bg-black bg-opacity-75" : ""}`}
        >
          <div className="flex justify-end pr-10 pt-8 mb-10">
            <button
              onClick={() => {
                setToggle((toggle) => !toggle);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="text-white flex flex-col items-center gap-8 mb-16">
            <li>
              <a
                className="hover:text-seaserpent duration-300"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="hover:text-seaserpent duration-300"
                href="#recent-work"
              >
                Recent Work
              </a>
            </li>
            <li>
              <a className="hover:text-seaserpent duration-300" href="#faqs">
                Faqs
              </a>
            </li>
            <li>
              <a
                className="bg-primary px-5 py-2.5 rounded-xl"
                href="https://calendly.com/tenmedia-co/30min"
                target="_blank"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
