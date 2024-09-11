"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { AuroraBackground } from "./ui/aurora-background";
import { FlipWords } from "./ui/flip-word";
import { Highlight } from "./ui/hero-highlight";
import { TypewriterEffectSmooth } from "./ui/Typewriter-effect";

const Main: React.FC = () => {
   const words = ["Vendez.", "Fidélisez.", "Convertissez."];
   const words2 = [
      {
         text: "Offrez",
      },
      {
         text: "une",
      },
      {
         text: "agréable",
      },
      {
         text: "expérience",
      },
      {
         text: "en",
      },{
         text: "ligne",
      },{
         text: "à",
      },{
         text: "vos",
      },{
         text: "clients",
      },{
         text: "et",
      },{
         text: "augmentez",
      },{
         text: "votre",
      },{
         text: "visibilité",
      },{
         text: "grâce",
      },{
         text: "à",
      },{
         text: "notre",
      },{
         text: "expertise",
         className: "text-green-400"
      },
   ];

   // Variants for staggered animations
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
   };

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
               initial="hidden"
               whileInView="visible"
               variants={containerVariants}
               className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
               <motion.div
                  variants={itemVariants}
                  className="text-3xl md:text-7xl font-bold dark:text-white text-center m-4"
               >
                  <Highlight className="text-black dark:text-white">
                     Votre vitrine en ligne.
                  </Highlight>
               </motion.div>
               <motion.div
                  variants={itemVariants}
                  className="text-3xl md:text-7xl font-bold dark:text-white text-center pb-4"
               >
                  Attirez plus de clients :
               </motion.div>
               <motion.div
                  variants={itemVariants}
                  className="text-3xl md:text-7xl font-bold dark:text-white text-center pb-4"
               >
                  <FlipWords words={words} />
               </motion.div>
               <div>
                  <h1 className="m-4">
                     <TypewriterEffectSmooth words={words2} />
                  </h1>
               </div>
               <motion.div variants={itemVariants} className="flex space-x-7">
                  <motion.button
                     className="bg-green-300 text-black dark:bg-white rounded-full w-fit hover:scale-110  dark:text-black px-4 py-2"
                     whileHover={{
                        scale: 1.3,
                        transition: { type: "spring", stiffness: 100 },
                     }}
                     whileTap={{ scale: 0.95 }}
                  >
                     Prendre contact
                  </motion.button>

                  <Link href="/#about">
                     <motion.button
                        className="bg-black dark:bg-white rounded-full w-fit hover:scale-110 text-white dark:text-black px-4 py-2"
                        whileHover={{
                           scale: 1.3,
                           transition: { type: "spring", stiffness: 100 },
                        }}
                        whileTap={{ scale: 0.95 }}
                     >
                        En savoir plus
                     </motion.button>
                  </Link>
               </motion.div>
            </motion.div>
         </AuroraBackground>
      </>
   );
};

export default Main;
