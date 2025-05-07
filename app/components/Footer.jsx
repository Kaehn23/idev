"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
   const handleMailClick = () => {
      window.location.href = "mailto:jidev-contact@proton.me";
   };

   return (
      <div>
         <div className="flex flex-col w-full h-fit bg-[#374151] text-[#e5e7eb] px-6 md:px-20 py-10 mt-8 pt-24">
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
                  <div className="flex items-start gap-4">
                     <div className="flex flex-col">
                        <div className="flex items-center">
                           <FiPhone size={20} />
                           <span className="font-bold p-2">06 74 84 50 13</span>
                        </div>
                        <div
                           onClick={handleMailClick}
                           className="flex items-center cursor-pointer"
                        >
                           <MdOutlineMail size={20} />
                           <span className="font-semibold p-2">
                              jidev-contact@proton.me
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right section with links */}
               <div className="flex flex-col md:flex-row w-full md:w-[65%] justify-end gap-12 mt-6 md:mt-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12">
                     {/* Explore */}
                     <div className="flex flex-col gap-2">
                        <div className="font-bold uppercase text-green-300 pb-2">
                           Explorez
                        </div>
                        <Link href="/nosoffres" className="hover:underline">
                           Nos Offres
                        </Link> 
                        <Link href="/#services" className="hover:underline">
                           Services
                        </Link>
                     </div>

                     {/* L'Entreprise */}
                     <div className="flex flex-col gap-2">
                        <div className="font-bold uppercase text-green-300 pb-2">
                           L'Entreprise
                        </div>
                        <Link href="/#about" className="hover:underline">
                           À Propos
                        </Link>
                        <Link href="/#contact" className="hover:underline">
                           Contact
                        </Link>
                        <div onClick={handleMailClick} className="cursor-pointer hover:underline">Support</div>
                     </div>

                     {/* Legal */}
                     <div className="flex flex-col gap-2">
                        <div className="font-bold uppercase text-green-300 pb-2">
                           Legal
                        </div>
                        <Link
                           href="/mentionlegales"
                           className="hover:underline"
                        >
                           Mentions Légales
                        </Link>
                        <Link
                           href="/politique-de-confidentialite"
                           className="hover:underline"
                        >
                           Politique de Confidentialité
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-gray-500 my-8"></div>

            {/* Footer bottom text */}
            <a href="/" className="text-center text-sm">
               &copy; {new Date().getFullYear()} J-iDev - All rights reserved.
            </a>
         </div>
      </div>
   );
};

export default Footer;
