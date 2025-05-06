"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";
import { FlipWords } from "./ui/flip-word";
import { FaArrowTurnDown } from "react-icons/fa6";
import SVGLineGlowAnimate from "./ui/SVGLineGlowAnimate";

// Définition des variants pour Framer Motion
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

function Services() {
   const words = ["simple", "efficace", "rentable"];

   const projects = [
      {
         title: "Création",
         description: [
            "Sites internet",
            "Applications mobiles",
            "Design moderne",
            "Optimisation du SEO naturel",
            "Responsive & adapté aux tablettes & mobiles",
            "Référencement naturel",
            "Rapide et optimisé",
            "Hébergement offert pendant un an",
            "Nom de domaine offert pendant deux ans",
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
            "Optimisation des performances",
            "Mise à jour de contenu",
            "Corrections de bugs",
            "Refonte des designs existants",
            "Refactorisation",
            "Migration de code-base",
                       
         ],
      },
   ];

   const handleMailClick = () => {
      window.location.href = "mailto:jidev-contact@proton.me";
   };

   return (
      <section
         id="services"
         className="relative w-full min-h-screen p-4 flex items-center justify-center"
         style={{
            backgroundImage: `url("/assets/bg2.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
         }}
         aria-labelledby="services-title"
      >
         <motion.div
            className="max-w-6xl mx-auto w-full  px-4 pt-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
         >
            {/* Titre Principal */}
            <motion.header
               className="text-center text-xl sm:text-2xl lg:text-3xl text-black font-semibold mb-6"
               variants={itemVariants}
            >
               Être <span className="text-green-400">présent</span> sur internet
               n'a jamais été aussi{" "}
               <FlipWords
                  className="text-orange-400 font-semibold text-center"
                  words={words}
                  duration={1500}
               />
            </motion.header>

            {/* Sous-titre */}
            <motion.h2
               className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-8 text-black "
               variants={itemVariants}
            >
               Je propose divers services de{" "}
               <span className="border-b-4 border-green-300">
                  création de sites web
               </span>
               , de{" "}
               <span className="border-b-4 border-yellow-200">
                  référencement (SEO)
               </span>
               , mais aussi la{" "}
               <span className="border-b-4 border-orange-400">
                  maintenance & la refonte
               </span>{" "}
               de votre site actuel !
            </motion.h2>

            {/* Section des Services */}
            <motion.section variants={itemVariants}>
               <HoverEffect items={projects} />
            </motion.section>

            {/* Section Contact */}
            <motion.div
               className="text-center text-base text-black sm:text-lg lg:text-xl mt-8"
               variants={itemVariants}
            >
               Pour toutes demandes d'informations supplémentaires, n'hésitez
               pas à me contacter par{" "}
               <span className="font-bold border-b-2 border-green-300">
                  <a href="tel:0674845013">téléphone</a>
               </span>
               , par{" "}
               <span
                  onClick={handleMailClick}
                  className="font-bold border-b-2 border-orange-400 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                     if (e.key === "Enter") handleMailClick();
                  }}
               >
                  mail
               </span>
               , ou en remplissant le{" "}
               <span className="font-bold border-b-2 border-yellow-200">
                  <a href="#contact">formulaire de contact</a>
               </span>{" "}
               plus bas !
            </motion.div>

            {/* Section FAQ */}
            <motion.div
               className="text-center text-lg sm:text-xl lg:text-2xl mt-6 text-black"
               variants={itemVariants}
               whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 100 },
               }}
            >
               Sinon, il y a aussi la{" "}
               <Link href="/#faq">
               <span className="font-bold">Foire Aux Questions (FAQ)</span>
               </Link>
            </motion.div>

            {/* Animations SVG et Icône */}
            <motion.div
               className="flex flex-col items-center justify-center mt-10"
               variants={itemVariants}
            >
               <div className="flex flex-col items-center gap-6 mb-6">
                  <SVGLineGlowAnimate
                     movementDelay={0}
                     id={1}
                     baseWidth={300}
                     initialGradientX={0}
                     color="#A9F030"
                  />
                  <SVGLineGlowAnimate
                     movementDelay={2000}
                     id={2}
                     baseWidth={400}
                     initialGradientX={0}
                     color="#ACF2B8"
                  />
                  <SVGLineGlowAnimate
                     movementDelay={4000}
                     id={3}
                     baseWidth={350}
                     initialGradientX={0}
                     color="#A9F030"
                  />
               </div>
               <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{
                     duration: 1,
                     repeat: Infinity,
                     repeatDelay: 3,
                     ease: "linear",
                  }}
                  className="inline-block"
                  aria-label="Indicateur de défilement vers le bas"
               >
                  <FaArrowTurnDown size={40} className="m-4 text-black" />
               </motion.div>
            </motion.div>
         </motion.div>
      </section>
   );
}

export default Services;
