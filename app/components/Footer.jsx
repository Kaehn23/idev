"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col w-full h-fit bg-[#374151] text-[#e5e7eb] px-6 md:px-20 py-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left section */}
          <div className="flex flex-col gap-4 justify-center md:w-[35%]">
            <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-4">
              <Image
                src="/assets/navLogo2.png"
                width={103}
                height={50}
                alt="Logo Preview"
              />
              <div className="flex flex-col">
                <h1 className="text-3xl md:text-4xl">J-iDev</h1>
                <div>Lundi au Vendredi : 09h-18h</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <div>
                Tél: <span className="font-bold">0674845013</span>
              </div>
            </div>
          </div>

          {/* Right section with links */}
          <div className="flex flex-col md:flex-row w-full md:w-[65%] justify-end gap-12 mt-6 md:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12">
              {/* Explore */}
              <div className="flex flex-col gap-2">
                <div className="font-bold uppercase text-[#34f80d] pb-2">
                  Explorez
                </div>
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
                <Link href="#contact" className="hover:underline">
                  Tarifs
                </Link>
              </div>

              {/* L'Entreprise */}
              <div className="flex flex-col gap-2">
                <div className="font-bold uppercase text-[#34f80d] pb-2">
                  L'Entreprise
                </div>
                <Link href="#about" className="hover:underline">
                  À Propos
                </Link>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
                <Link href="#contact" className="hover:underline">
                  Support
                </Link>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-2">
                <div className="font-bold uppercase text-[#34f80d] pb-2">
                  Legal
                </div>
                <Link href="#xxx" className="hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#xxx" className="hover:underline">
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-500 my-8"></div>

        {/* Footer bottom text */}
        <a href="/" className="text-center text-sm">
          © 2024 J-iDev - All rights reserved.
        </a>
      </div>
    </div>
  );
};

export default Footer;
