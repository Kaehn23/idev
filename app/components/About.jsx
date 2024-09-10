"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const About = () => {
   return (
      <div
         id="about"
         className="relative w-full md:h-screen p-2 flex items-center py-16"
         style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 800 450' opacity='0.99'%3E%3Cdefs%3E%3Cfilter id='bbblurry-filter' x='-100%25' y='-100%25' width='400%25' height='400%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='36' x='0%25' y='0%25' width='100%25' height='100%25' in='SourceGraphic' edgeMode='none' result='blur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3C/defs%3E%3Cg filter='url(%23bbblurry-filter)'%3E%3Cellipse rx='79' ry='75' cx='115.21870838512075' cy='126.31292585893107' fill='hsla(100, 64%25, 65%25, 1.00)'%3E%3C/ellipse%3E%3Cellipse rx='79' ry='75' cx='170.77938981489706' cy='236.63450483842325' fill='hsl(208, 100%25, 86%25)'%3E%3C/ellipse%3E%3Cellipse rx='79' ry='75' cx='650.7836303710938' cy='111.48372650146484' fill='hsl(58, 100%25, 71%25)'%3E%3C/ellipse%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "cover", // Ensure the background covers the whole div
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
         }}
      >
         <div className=" w-full h-full mx-auto  p-2 flex justify-center items-center relative z-1">
            <div className=" md:mt-16 sm:mt-8 ">
               {/* Image de profil */}
               <img
                  src="/assets/navLogo2.png"
                  alt="logo j-idev"
                  className="rounded-full shadow-xl shadow-green-300 hover:scale-110 ease-in duration-500 mx-auto my-8 animate-reveal2"
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
               />
               <div className="glass-effect ">
                  Developpeur specialisé dans le Web ; j'applique un soin tout particulier à rendre chaques projets unique.
                  <br />
                  Le site internet d'une entreprise la reflète, je met donc en oeuvre toutes mes compétences pour réaliser des sites 
                  <br />
                  rapides et efficaces, optimisés pour un SEO organique, et adaptés à toute taille d'écran (responsive).
               </div>
               <div className="flex flex-center glass-effect">
                  Chaque projet est approché avec une méthodologie soignée et efficace en trois points : 

               </div>

               <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
                  <Link href="https://www.linkedin.com/in/iparraguirre-jeremy-3b391a2a3/">
                     <div className="rounded-full shadow-lg glass-effect2 animate-reveal3 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                     </div>
                  </Link>
                  <Link href="https://github.com/Kaehn23">
                     <div className="rounded-full shadow-lg glass-effect2 animate-reveal3 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                     </div>
                  </Link>
                  <div className="rounded-full shadow-lg glass-effect2 animate-reveal3 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                     <AiOutlineMail />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
