"use client"

import { useEffect, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        }
        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener("scroll", handleScroll) };
    },)

    return (
        <nav
            className={`z-20 backdrop-blur-lg border border-white/10 p-6 transition-all duration-300
  sticky top-0
  ${scrolled ? "bg-black/60 m-4 rounded-xl shadow-lg" : "bg-black/20 neon"}`}
        >            <div className=" text-white p-3">
                <ul className="flex justify-center ">
                    <li className="mx-5 hidden md:block font-bold"><a href="#">Logo</a></li>
                    <li className="mx-5 hidden md:block font-bold"><a href="#">Home</a></li>
                    <li className="mx-5 hidden md:block font-bold"><a href="#">About Me</a></li>
                    <li className="mx-5 hidden md:block font-bold"><a href="#">Services</a></li>
                    <li className="mx-5 hidden md:block font-bold"><a href="#">Pricing</a></li>
                    <li className="mx-5 hidden md:block font-bold"><a href="#">Contact</a></li>
                </ul>
            </div>
            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
                {isOpen ? "✕" : "☰"}
            </button>
            {isOpen ?
                <div>
                    <ul className="flex flex-col items-center justify-center">
                        <li className="m-1 md:hidden font-bold"><a href="#">Logo</a></li>
                        <li className="m-1 md:hidden font-bold"><a href="#">Home</a></li>
                        <li className="m-1 md:hidden font-bold"><a href="#">About Me</a></li>
                        <li className="m-1 md:hidden font-bold"><a href="#">Services</a></li>
                        <li className="m-1 md:hidden font-bold"><a href="#">Pricing</a></li>
                        <li className="m-1 md:hidden font-bold"><a href="#">Contact</a></li>
                    </ul>
                </div> : <></>}

        </nav>
    )
}