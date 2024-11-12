"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#1C2B35] to-[#3C4C58] py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-center items-center">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#F39C12] text-2xl font-bold focus:outline-none"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 space-y-4 text-center absolute md:static bg-[#2B3A45] md:bg-transparent w-full md:w-auto top-16 left-0 md:top-0 md:justify-center transition-all duration-300 ease-in-out shadow-lg md:shadow-none`}
        >
          <li className="transition py-4 duration-300 ease-in-out transform hover:scale-105">
            <Link
              href="#home"
              className="text-[#F39C12] hover:text-white px-4 py-2 rounded-full border-2 border-transparent hover:border-[#F39C12] transition duration-300"
            >
              Home
            </Link> 
          </li>
          <li className="transition duration-300 ease-in-out transform hover:scale-105">
            <Link
              href="#about"
              className="text-[#F39C12] hover:text-white px-4 py-2 rounded-full border-2 border-transparent hover:border-[#F39C12] transition duration-300"
            >
              About
            </Link>
          </li>
          <li className="transition duration-300 ease-in-out transform hover:scale-105">
            <Link
              href="#projects"
              className="text-[#F39C12] hover:text-white px-4 py-2 rounded-full border-2 border-transparent hover:border-[#F39C12] transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li className="transition duration-300 ease-in-out transform hover:scale-105">
            <Link
              href="#services"
              className="text-[#F39C12] hover:text-white px-4 py-2 rounded-full border-2 border-transparent hover:border-[#F39C12] transition duration-300"
            >
              Services
            </Link>
          </li>
          <li className="transition duration-300 ease-in-out transform hover:scale-105">
            <Link
              href="#contact"
              className="text-[#F39C12] hover:text-white px-4 py-2 rounded-full border-2 border-transparent hover:border-[#F39C12] transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;