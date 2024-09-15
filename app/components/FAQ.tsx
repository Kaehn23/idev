"use client";
import React from "react";
import { motion } from "framer-motion";
import Accordion from "./ui/Accordion";

function FAQ() {
   return (
      <motion.div
         id="faq"
         className="relative w-full min-h-screen p-2 flex items-center justify-center py-4 pt-20 "
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
         <div id="faq">
            <h1 className="flex flex-items text-center text-3xl p-4">
               {" "}
               <span className="font-bold">Ici</span>, vous trouverez les&nbsp; {" "}
               <span className="font-bold border-b-4 border-green-300">
                  questions qui reviennent fréquemment 
               </span>
            </h1>

            <Accordion />

            <div className="flex flex-items justify-center text-2xl font-semibold text-center pt-4 m-2">
               N'hesitez pas à me&nbsp; <span className="font-bold text-green-300">contacter&nbsp;</span> pour plus&nbsp; <span className="font-bold text-green-300">d'informations</span>
               
            </div>
         </div>
      </motion.div>
   );
}

export default FAQ;
