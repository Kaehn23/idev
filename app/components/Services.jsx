"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect"; // Adjust import if necessary

function Services() {
  return (
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
    >
        
      <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-center">Etre present sur internet n'a jamais été aussi simple</h1>
        {/* Pass the projects array to HoverEffect */}
        <HoverEffect items={projects} />
      </div>
    </motion.div>
  );
}

export const projects = [
  {
    title: "Création de sites web",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    
  },
  {
    title: "SEO",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    
  },
  {
    title: "Maintenance",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    
  },
  
];

export default Services;
