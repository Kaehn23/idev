"use client";
import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "./ui/wavy-background";

function Services() {
   return (
      <div>
         <motion.div
            id="services"
            className="relative w-full min-h-screen p-2 flex items-center justify-center py-4"
            style={{
               backgroundImage: `url("/assets/bg2.svg")`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
         ></motion.div>
        
      </div>
   );
}

export default Services;
