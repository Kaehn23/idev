"use client";
import React from "react";
import { motion } from "framer-motion";
import Accordion from "./ui/Accordion";
import CTA from "./ui/CTA";

function FAQ() {
   return (
      <motion.div
         id="faq"
         className="relative w-full min-h-screen p-4 flex items-center justify-center py-8 pt-20"
         style={{
            backgroundImage: `url("/assets/bg3.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
         }}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8 }}
      >
         <div className="w-full max-w-6xl mx-auto bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-80 rounded-lg shadow-lg p-4 md:p-8">
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
               <span className="font-bold">Ici</span>, vous trouverez les&nbsp;
               <span className="font-bold border-b-4 border-green-300">
                  questions qui reviennent fréquemment
               </span>
            </h1>

            <Accordion />

            <section className="flex flex-col items-center justify-center text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-secondary-700 dark:text-secondary-300 py-6 px-4 m-4 max-w-md mx-auto">
               <p className="leading-relaxed">
                  N'hésitez pas à me&nbsp;
                  <span className="font-bold text-green-300">
                     contacter&nbsp;
                  </span>
                  pour plus&nbsp;
                  <span className="font-bold text-green-300">
                     d'informations
                  </span>
               </p>
            </section>
            <div className="flex justify-center">
               <CTA />
            </div>
         </div>
      </motion.div>
   );
}

export default FAQ;
