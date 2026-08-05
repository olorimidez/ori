"use client";
import { RiApps2Fill, RiCloseLargeFill } from "react-icons/ri";
import { useState, useRef, useEffect, use } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
// import pizza from "../assets/logo-pizza.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleNavbar = () => setIsOpen((prev) => !prev);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <div
      className={` h-24 fixed top-0 left-0 w-full z-50  flex items-center  ${
        isHome ? "bg-amber-50" : "bg-[#FBDBC6]"}
        ${scrolled ? "filter drop-shadow-lg" : "filter drop-shadow-none"}
        transition-[filter] duration-300`}
    >
      <div className="container" ref={menuRef}>

        {/* ================= MOBILE HEADER ================= */}
        <div className="flex justify-between items-center md:hidden py-4">
          <div className="flex items-center">
            <Link href="/" className="px-1.5 text-black no-underline">IseseLagba</Link>
          </div>

          <button onClick={toggleNavbar} className="relative z-50">
            {isOpen ? <RiCloseLargeFill size={22} className="text-red-950" /> : <RiApps2Fill size={22} className="text-green-900" />}
          </button>
        </div>

        {/* ================= DESKTOP HEADER ================= */}
        <div className="hidden md:flex justify-between items-center py-4 ">
          <div className="flex items-center">
            
            <Link href="/" className="px-1.5 text-green-950 no-underline">IseseLagba</Link>
          </div>

          <div className="flex space-x-6 text-black">
            <Link href="#home" className=" relative inline-block no-underline
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-[60%]
              after:bg-red-900
              after:origin-left
              text-green-950">Home</Link>
            <Link href="#about" className=" relative inline-block no-underline
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-[60%]
               after:bg-red-900
               text-green-950
              after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500" >About</Link>
            <Link href="#orisha" className=" relative inline-block no-underline
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-[60%]
              after:bg-red-900
               text-green-950
              after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500" >Orisha's</Link>
            <Link href="#piture" className=" relative inline-block no-underline
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-[60%]
              after:bg-red-900
               text-green-950
              after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500" >Pictures</Link>
            <Link href="#video" className=" relative inline-block no-underline
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-[60%]
              after:bg-red-900
               text-green-950
              after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500" >Videos</Link>
            
          </div>
        </div>
      </div>

      {/* ================= MOBILE SLIDE MENU ================= */}
      <div
        className={`
          md:hidden
          fixed top-0 left-0 w-full h-screen
          z-50
          bg-[#f2d4d5]
          flex flex-col items-center justify-center
          space-y-9
          pt-24 pb-10
          text-black
          transform transition-transform duration-500 ease-out
          shadow-[0_10px_25px_rgba(0,0,0,0.25)]
          ${isOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"}
        `}
      >

        
        {["Home", "About", "Popular", "Picture", "Video"].map((item) => (
          <a
            key={item}
            href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className={`
              relative inline-block no-underline
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-[60%]
              after:bg-red-900
               text-green-950
              after:origin-left
              ${item === "Home"
                ? "after:scale-x-100"
                : "after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"}
            `}
          >
            {item}
          </a>
        ))}
    
      </div>
    </div>
  );
};

export default Navbar;
