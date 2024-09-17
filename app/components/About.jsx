"use client";
import React from "react";
import { motion } from "framer-motion";
import Method from "./Method";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen p-4 flex items-center justify-center py-8 pt-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/assets/bg1.svg")`,
      }}
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Section */}
        <motion.figure
          className="lg:row-span-3 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            src="/assets/navLogo2.png"
            alt="Logo de J-iDev"
            className="rounded-full shadow-xl shadow-green-200 hover:scale-110 transition-transform duration-500"
            style={{ maxWidth: "120px", maxHeight: "120px" }}
          />
        </motion.figure>

        {/* Middle Section */}
        <motion.header
          className="lg:col-span-2 lg:row-span-2 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-700 dark:text-secondary-300">
            J-iDev, votre partenaire vers la{" "}
            <span className="text-green-300 border-b-4 border-green-300">
              réussite
            </span>
          </h1>
        </motion.header>

        {/* Bottom Left Section */}
        <motion.article
          className="col-span-1 lg:col-span-3 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-base sm:text-lg md:text-xl text-gray-600">
            <h2 className="font-semibold mb-2">
              Développeur spécialisé dans le Web, j'accompagne les entreprises dans leur succès sur internet.
            </h2>
            <p className="pb-2">
              J'applique un soin tout particulier à rendre chaque{" "}
              <span className="font-bold text-xl border-b-4 border-orange-300">
                projet unique.
              </span>
            </p>
            <p>
              Le site internet d'une entreprise la reflète, je mets donc en œuvre toutes mes compétences pour réaliser des sites&nbsp;
              <span className="font-bold text-xl border-b-4 border-yellow-300">
                rapides
              </span>
              , optimisés pour le{" "}
              <span className="font-bold text-xl border-b-4 border-green-300">
                SEO
              </span>
              , et{" "}
              <span className="font-bold text-xl border-b-4 border-blue-300">
                responsive
              </span>{" "}
              (adaptés à toute taille d'écrans).
            </p>
            <h3 className="font-bold pt-2">
              Voici ma méthode en trois points :
            </h3>
          </div>
        </motion.article>

        {/* Full Width Section */}
        <motion.div
          className="col-span-1 lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Method />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
