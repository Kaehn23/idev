"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

const Main: React.FC = () => {
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
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Les lumières, c'est cool 
          </div>
         
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
           Prendre rendez-vous
          </button>
        </motion.div>
      </AuroraBackground>
      
    </>
  );
};

export default Main;

