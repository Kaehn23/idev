"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";
import { FlipWords } from "./ui/flip-word";
import { FaArrowTurnDown } from "react-icons/fa6";

function Services() {
   const words = ["simple.", "efficace.", "rentable."];

   const projects = [
      {
         title: "Création",
         description: [
            "Un design personnalisé & moderne",
            "Responsive & adapté aux tablettes & mobiles",
            "Référencement naturel",
            "Rapide et optimisé",
            "Hébergement offert pendant un an",
            "6 mois de maintenance offerte",
            "Support 7j/7"
         ],
      },
      {
         title: "SEO",
         description: [
            "Optimisation du référencement naturel (SEO)",
            "Audit des mots clés",
            "Optimisation de la structure du site",
            "Optimisation des URLs",
            "Optimisation des images & vidéos",
         ],
      },
      {
         title: "Maintenance",
         description: [
            "Surveillance régulière des performances",
            "Corrections de bugs et mises à jour",
            "Refonte des designs existants",
            "Mise à jour de contenu",
            "Refactorisation",
            
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
         <div className="max-w-5xl mx-auto px-8 pt-20">
            <div className="text-center text-3xl">
               Être <span className="font-semibold">présent</span> sur internet
               n'a jamais été aussi{" "}
               <FlipWords className="font-semibold" words={words} />
            </div>
            <h1 className="text-center mt-4">
               Je propose divers services de{" "}
               <span className="font-bold">création de sites web</span>, de{" "}
               <span className="font-bold">référencement (SEO)</span>, mais
               aussi la{" "}
               <span className="font-bold">maintenance & la refonte</span> de
               votre site actuel !
            </h1>
            

            <HoverEffect items={projects} />
            <div className="text-align text-center m-4">Pour toutes demandes d'informations supplémentaire, n'hesitez pas à me contacter par <span className="font-bold
            ">téléphone</span>, par <span className="font-bold">mail</span>, ou en remplissant le <span className="font-bold">formulaire de contact</span> plus bas!
                {/* <br className="text-justify m-4"/>Je vous repondrai dés que possible! */}
            </div>
            <div className="text-center text-2xl">Sinon, il y a aussi la <span className="font-bold">Foire Aux Questions (FAQ)</span> </div>
            <div className="flex items-center justify-center m-4"><FaArrowTurnDown size={40}/></div>
         </div>
      </motion.div>
   );
}

export default Services;
