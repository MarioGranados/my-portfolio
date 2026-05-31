"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`z-20 backdrop-blur-lg border border-white/10 p-1 transition-all duration-300
  sticky top-0
  ${scrolled ? "bg-black/60 my-2 mx-4 rounded-xl shadow-lg" : "bg-black/20 neon "}`}
    >
      <div className=" text-white p-3">
        <nav className="grid grid-cols-3 items-center py-4">
          {/* Left */}
          <div className="justify-self-start hidden md:flex">
            <a href="#" className="font-bold">
              Logo
            </a>
          </div>

          {/* Center */}
          <ul className="hidden md:flex justify-center gap-10 font-bold">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* Right */}
          <div className="justify-self-end hidden md:flex">
            <a
              href="#"
              className="rounded-full bg-blue-600 px-5 py-2 text-white font-bold"
            >
              My Work
            </a>
          </div>
        </nav>
      </div>
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
        {isOpen ? "✕" : "☰"}
      </button>
      {isOpen ? (
        <div>
          <ul className="flex flex-col items-center justify-center">
            <li className="m-1 md:hidden font-bold">
              <a href="#">Logo</a>
            </li>
            <li className="m-1 md:hidden font-bold">
              <a href="#">Home</a>
            </li>
            <li className="m-1 md:hidden font-bold">
              <a href="#">About Me</a>
            </li>
            <li className="m-1 md:hidden font-bold">
              <a href="#">Services</a>
            </li>
            <li className="m-1 md:hidden font-bold">
              <a href="#">Pricing</a>
            </li>
            <li className="m-1 md:hidden font-bold">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
