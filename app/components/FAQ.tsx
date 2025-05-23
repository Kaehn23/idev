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
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-black">
               <span className="font-bold">Ici</span>, vous trouverez les&nbsp;
               <span className="font-bold border-b-4 border-green-300">
                  questions qui reviennent fréquemment
               </span>
            </h1>

            <Accordion />

            <section className="md:w-1/2 max-w-6xl w-auto glass-silver text-black text-2xl md:text-2xl sm:text-2xl text-center mx-auto dark:bg-black dark:bg-opacity-80 rounded-lg shadow-xl p-4 md:p-8">
               <p className="leading-relaxed">
                  <span className="font-bold text-green-400">
                     Contactez nous&nbsp;
                  </span>
                  pour plus&nbsp;
                  <span className="font-bold text-green-400">
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
