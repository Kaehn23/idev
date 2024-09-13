"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";
import { FlipWords } from "./ui/flip-word";
import { FaArrowTurnDown } from "react-icons/fa6";

// Define Framer Motion variants
const containerVariants = {
   hidden: { opacity: 0, scale: 0.9 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         delay: 0.3,
         duration: 0.8,
         when: "beforeChildren",
         staggerChildren: 0.2,
      },
   },
};

const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 },
};

// const bounceVariants = {
//    hover: {
//       scale: 1.2,
//       transition: {
//          duration: 0.3,
//          yoyo: Infinity, // Creates a bouncing effect
//       },
//    },
// };

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
            "Support 7j/7",
         ],
      },
      {
         title: "SEO",
         description: [
            "Optimisation du référencement naturel",
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
            "Mise à jour de contenu",
            "Corrections de bugs",
            "Refonte des designs existants",
            "Refactorisation",
         ],
      },
   ];

   const handleMailClick = () => {
      window.location.href = "mailto:jeremy.iparraguirre@gmail.com";
   };

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
         <motion.div
            className="max-w-5xl mx-auto px-8 pt-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
         >
            <motion.div
               className="text-center text-3xl"
               variants={itemVariants}
            >
               Être <span className="font-semibold">présent</span> sur internet
               n'a jamais été aussi{" "}
               <FlipWords className="font-semibold" words={words} />
            </motion.div>
            <motion.h1 className="text-center mt-4" variants={itemVariants}>
               Je propose divers services de{" "}
               <span className="font-bold">création de sites web</span>, de{" "}
               <span className="font-bold">référencement (SEO)</span>, mais
               aussi la{" "}
               <span className="font-bold">maintenance & la refonte</span> de
               votre site actuel !
            </motion.h1>

            <motion.div variants={itemVariants}>
               <HoverEffect items={projects} />
            </motion.div>

            <motion.div
               className="text-align text-center m-4"
               variants={itemVariants}
            >
               Pour toutes demandes d'informations supplémentaire, n'hesitez pas
               à me contacter par{" "}
               <span
                  
                  className="font-bold border-b-2 border-green-200 cursor-pointer
            "
               >
                 <a href="tel:0674845013">téléphone</a> 
               </span>
               , par{" "}
               <span
                  onClick={handleMailClick}
                  className="font-bold border-b-2  border-orange-400 cursor-pointer"
               >
                  mail
               </span>
               , ou en remplissant le{" "}
               <span
                  href="#contact"
                  className="font-bold border-b-2 border-yellow-200 cursor-pointer"
               >
                  formulaire de contact
               </span>{" "}
               plus bas!
            </motion.div>

            <motion.div
               className="text-center text-2xl"
               variants={itemVariants}
            >
               Sinon, il y a aussi la{" "}
               <span className="font-bold">Foire Aux Questions (FAQ)</span>{" "}
            </motion.div>

            <motion.div
               className="flex items-center justify-center m-4"
               variants={itemVariants}
            >
               <motion.div
                  animate={{ rotateY: 360 }} 
                  transition={{
                     duration: 1, 
                     repeat: Infinity,
                     repeatDelay: 3,
                     ease: "linear", 
                  }}
                  style={{ display: "inline-block" }} // stays visible during the rotation
               >
                  <FaArrowTurnDown size={40} />
               </motion.div>
            </motion.div>
         </motion.div>
      </motion.div>
   );
}

export default Services;
