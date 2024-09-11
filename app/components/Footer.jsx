"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
   return (
      <div>
         <div className="flex flex-col w-full h-fit bg-[#374151] text-[#e5e7eb] px-20 py-10">
            <div className="flex flex-row">
               <div className="flex flex-col gap-2 justify-center w-[35%]">
                  <div className="flex items-center w-full gap-4">
                     <Image
                        src="/assets/navLogo2.png"
                        width={103}
                        height={50}
                        alt="Logo Preview"
                     />
                     <div className="text-4xl">J-iDev</div>
                  </div>
                  <div className="grid grid-cols-3 gap-6 w-fit p-4">
                     
                     <a href="#">
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
                  </div>
               </div>
               <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
                  <div className="grid grid-cols-3 gap-20">
                     <div className="flex flex-col gap-2">
                        <div className="font-bold uppercase text-[#34f80d] pb-3">
                           Explorez
                        </div>
                        <a href="#xxx" className="hover:underline">
                           Services
                        </a>
                        <a href="#contact" className="hover:underline">
                           Tarifs
                        </a>
                     </div>
                     <div className="flex flex-col gap-2">
                        <div className="font-bold uppercase text-[#34f80d] pb-3">
                           L'Entreprise
                        </div>
                        <a href="#about" className="hover:underline">
                        À Propos
                        </a>
                        <a href="#contact" className="hover:underline">
                           Contact
                        </a>
                        <a href="#xxx" className="hover:underline">
                           Support
                        </a>
                        
                     </div>
                     <div className="flex flex-col gap-2">
                        <div className="font-bold uppercase text-[#34f80d] pb-3">
                           Legal
                        </div>
                        <a href="#xxx" className="hover:underline">
                           Imprint
                        </a>
                        <a href="#xxx" className="hover:underline">
                           Privacy Policy
                        </a>
                        <a href="#xxx" className="hover:underline">
                           Terms of Use
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full border-t border-gray-500 my-8"></div>
            <div className="text-center">
               © 2024 J-iDev - All rights reserved.
            </div>
         </div>
      </div>
   );
};

export default Footer;
