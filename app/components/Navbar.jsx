"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaSquarePhone } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMailClick = () => {
    window.location.href = "mailto:concepttruck40800@gmail.com";
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleShadow);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <div
      style={{ backgroundColor: "rgba(128,128,128,0.5)" }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] shadow-transition"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between md:justify-center items-center w-full h-full px-2 2xl:px-16">
        <div className="block md:hidden">
          <Link href="/#home">
            <Image
              src="/assets/navLogo2.png"
              alt="logo idev"
              width={150}
              height={60}
            />
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul style={{ color: "#FFFFFF" }} className="flex space-x-4">
            <Link href="/">
              <li className="p-2 text-sm uppercase hover:border-b hover:border-gray-200">
                Accueil
              </li>
            </Link>
            <Link href="/#photos">
              <li className="p-2 text-sm uppercase hover:border-b hover:border-gray-200">
                Photos
              </li>
            </Link>
            <Link href="/#reparations">
              <li className="p-2 text-sm uppercase hover:border-b hover:border-gray-200">
                Entretient & Réparations
              </li>
            </Link>
            <Link href="/#amenagement">
              <li className="p-2 text-sm uppercase hover:border-b hover:border-gray-200">
                Aménagement
              </li>
            </Link>
            <Link href="/#contact">
              <li className="p-2 text-sm uppercase hover:border-b hover:border-gray-200">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex md:hidden">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""
        }
      >
        <div
          ref={navRef}
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-b from-neutral-300 to-stone-400 p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div className="flex justify-between items-center w-full">
            <Image
              src="/assets/navLogo2.png"
              alt="Sud decapage logo"
              width="120"
              height="60"
            />
            <div
              onClick={handleNav}
              className="shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="my-4">
            <p className="w-[85%] md:w-[90%] py-4 font-bold">
              Contactez nous pour établir un devis !
            </p>
          </div>
          <div className="flex flex-col">
            <ul className="uppercase font-semibold">
              <Link href="/" onClick={handleLinkClick}>
                <li className="ml-10 p-2 text-sm uppercase hover:border-b hover:border-gray-900">
                  Accueil
                </li>
              </Link>
              <Link href="/#photos" onClick={handleLinkClick}>
                <li className="ml-10 p-2 text-sm uppercase hover:border-b hover:border-gray-900">
                  Photos
                </li>
              </Link>
              <Link href="/#reparations" onClick={handleLinkClick}>
                <li className="ml-10 p-2 text-sm uppercase hover:border-b hover:border-gray-900">
                Entretient & Réparations
                </li>
              </Link>
              <Link href="/#amenagement" onClick={handleLinkClick}>
                <li className="ml-10 p-2 text-sm uppercase hover:border-b hover:border-gray-900">
                  Aménagement
                </li>
              </Link>
              <Link href="/#contact" onClick={handleLinkClick}>
                <li className="ml-10 p-2 text-sm uppercase hover:border-b hover:border-gray-900">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-6">
              <p className="flex items-center font-bold justify-center uppercase tracking-widest">
                Contactez Nous
              </p>
              <div className="flex items-center justify-center my-3 w-full sm:w-[60%]">
                <div
                  className="rounded-full shadow-lg shadow-black-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  onClick={handleMailClick}
                >
                  <AiOutlineMail size={25} />
                </div>
              </div>
              <div className="flex items-center justify-center my-3 p-4">
                <a href="tel:0640287845">
                  <FaSquarePhone />
                </a>
                <span>
                  <a href="tel:0640287845" className="p-4 font-bold">
                    06 40 28 78 45
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
