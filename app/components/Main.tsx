"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { FlipWords } from "./ui/flip-word";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const Main: React.FC = () => {
   const words = ["Vendez.", "Fidélisez.", "Convertissez."];

   return (
      <>
         <Head>
            <title>Sud Décapage - Entreprise de décapage, aérogommage</title>
            <meta
               name="description"
               content="Bienvenue sur notre site, nous proposons nos services de décapage multi-supports, aérogommage, sablage, décapage de volets, portails, pièces de voitures, meubles, façades, etc."
            />
         </Head>

         <AuroraBackground>
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
               }}
               className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
               <div className="text-3xl md:text-7xl font-bold dark:text-white text-center m-4">
                  <Highlight className="text-black dark:text-white">
                     Votre vitrine en ligne.
                  </Highlight>
               </div>
               <div className="text-3xl md:text-7xl font-bold dark:text-white text-center pb-4">
                  Attirez plus de clients :
               </div>
               <div className="text-3xl md:text-7xl font-bold dark:text-white text-center pb-4">
                  <FlipWords words={words} />
               </div>

               {/* Conteneur Flex pour aligner les deux boutons côte à côte */}
               <div className="flex space-x-6">
                  <motion.button
                     className="bg-green-300 text-black dark:bg-white rounded-full w-fit hover:scale-110  dark:text-black px-4 py-2"
                     whileHover={{
                        scale: 1.3,
                        transition: { type: "spring", stiffness: 100 },
                     }}
                  >
                     Prendre contact
                  </motion.button>
                  <motion.button
                     className="bg-black dark:bg-white rounded-full w-fit hover:scale-110 text-white dark:text-black px-4 py-2"
                     whileHover={{
                        scale: 1.3,
                        transition: { type: "spring", stiffness: 100 },
                     }}
                  >
                     En savoir plus
                  </motion.button>
               </div>
            </motion.div>
         </AuroraBackground>
      </>
   );
};

export default Main;
