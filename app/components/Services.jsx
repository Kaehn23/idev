"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";
import { FlipWords } from "./ui/flip-word";

function Services() {
    const words = ["simple.", "efficace.", "rentable."];
    
    // Déclare projects à l'intérieur de Services
    const projects = [
      {
        title: "Création de sites web",
        description: [
          "Un design personnalisé & moderne",
          "Responsive & adapté aux mobiles",
          "Optimisation des performances",
        ],
      },
      {
        title: "SEO",
        description: "Optimisation du référencement naturel (SEO)",
      },
      {
        title: "Maintenance & refonte",
        description: [
          "Surveillance régulière des performances",
          "Corrections de bugs et mises à jour",
          "Refonte des designs existants",
        ],
      },
    ];
  
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
          <div className="text-center text-3xl">
            Être <span className="font-semibold">présent</span> sur internet n'a
            jamais été aussi{" "}
            <FlipWords className="font-semibold" words={words} />
          </div>
  
          {/* Passe le tableau projects à HoverEffect */}
          <HoverEffect items={projects} />
  
          <h1 className="text-center mt-4">
            Je propose divers services de création de sites web, de référencement,
            mais aussi la maintenance & la refonte de votre site actuel !
          </h1>
        </div>
      </motion.div>
    );
  }
  
  export default Services;