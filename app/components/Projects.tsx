"use client";
import React from "react";
import { motion } from "framer-motion";
import { Vortex } from "./ui/vortex";


function Projects() {
   return (
      <div id="projects" className="w-100% mx-auto   h-screen overflow-hidden">
        
         <Vortex
            backgroundColor="white"
            rangeY={300}
            particleCount={75}
            baseHue={120}
            baseSpeed={0.2}
            rangeRadius={10}
            baseRadius={4}
            className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
         >
            <h2 className="text-black text-2xl md:text-6xl font-bold text-center">
               Retrouvez mes derniers projets
            </h2>
            <p className="text-black text-sm md:text-2xl max-w-xl mt-6 text-center">
               This is chemical burn. It&apos;ll hurt more than you&apos;ve ever
               been burned and you&apos;ll have a scar.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
               <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-black shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                  Order now
               </button>
               <button className="px-4 py-2  text-black ">Watch trailer</button>
            </div>
         </Vortex>
      </div>
   );
}

export default Projects;
