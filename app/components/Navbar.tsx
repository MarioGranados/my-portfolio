"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`z-20 backdrop-blur-lg border border-white/10  transition-all duration-300 sticky top-0 py-6 px-8
 
  ${scrolled ? "bg-black/60 my-2 mx-6 rounded-xl shadow-lg top-5" : "bg-blue-800/50 neon"}`}
    >
      <div className=" text-white">
        <nav className="grid grid-cols-3 items-center">
          {/* Left */}
          <div className="justify-self-start hidden md:flex">
            <Link href="/" className="font-bold">
              MarioGranados
            </Link>
          </div>

          {/* Center */}
          <ul className="hidden md:flex justify-center gap-10 font-bold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Right */}
          <div className="justify-self-end hidden md:flex">
            <a
              href="/portfolio"
              className=" neon-btn px-8 py-2 rounded-lg text-white bg-white/20 backdrop-blur-lg cursor-pointer"
            >
              My Work
            </a>
          </div>
        </nav>
      </div>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden px-2 transition-all duration-500"
      >
        {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
      </button>
      {isOpen ? (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <ul className="flex flex-col items-center justify-center py-4">
            <li className="m-1 font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="m-1 font-bold">
              <Link href="/about">About Me</Link>
            </li>
            <li className="m-1 font-bold">
              <Link href="/services">Services</Link>
            </li>
            <li className="m-1 font-bold">
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="m-1 font-bold">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
