"use client";
import  { useState } from "react";

import { FaBars } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center max-w-full overflow-hidden py-3 lg:px-10 px-3">
        {/* Logo and hamburger menu icon for small screens */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars size={24} />
          </button>
          <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </div>
         
        </div>

        <h1 className="text-3xl max-lg:text-2xl font-extrabold text-center text-[#252020] max-lg:pl-3 lg:pl-24">Logo</h1>

        <div className="flex gap-5 items-center">
          <Image src="/search.svg" alt="Search" width={24} height={24} />
          <Image src="/heart.svg" alt="Heart" width={24} height={24} />
          <Image src="/bag.svg" alt="Bag" width={24} height={24} />
          <Image src="/profile.svg" alt="Profile" width={24} height={24} className="max-lg:hidden" />
          <div className="flex items-center gap-1 max-lg:hidden">
            <p>ENG</p>
            <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
          </div>
        </div>
      </nav>

      {/* Menu for small screens */}
      {menuOpen && (
        <ul className="lg:hidden fixed top-16 left-0 w-full bg-white shadow-lg py-4 text-center font-bold text-[20px]">
          <li className="py-2 text-[#252020]">SHOP</li>
          <li className="py-2 text-[#252020] ">SKILLS</li>
          <li className="py-2 text-[#252020]">STORIES</li>
          <li className="py-2 text-[#252020]">STORIES</li>
          <li className="py-2 text-[#252020]">ABOUT</li>
          <li className="py-2 text-[#252020]">STORIES</li>
          <li className="py-2 text-[#252020]">CONTACT US</li>
        </ul>
      )}

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center justify-center mt-4 gap-14 font-bold text-[20px]">
        <li className="text-[#252020]">SHOP</li>
        <li className="text-[#252020]">SKILLS</li>
        <li className="text-[#252020]">STORIES</li>
        <li className="text-[#252020]">ABOUT</li>
        <li className="text-[#252020]">CONTACT US</li>
      </ul>

      <hr className="mt-6" />

      <div className="text-center lg:w-[50%] mx-auto mt-5 max-lg:px-5">
        <p className="text-6xl text-[#252020] max-lg:text-2xl max-lg:text-nowrap">DISCOVER OUR PRODUCTS</p>
        <p className="text-[22px] text-[#252020] mt-2 max-lg:text-[16px]">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </>
  );
};

export default Header;
