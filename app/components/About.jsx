"use client";
import React from "react";
import { motion } from "framer-motion";
import Method from "./Method";

const About = () => {
   return (
      <motion.div
         id="about"
         className="relative w-full min-h-screen p-2 flex items-center justify-center py-4 pt-24 "
         style={{
            backgroundImage: `url("/assets/bg1.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
         }}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8 }}
      >
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto">
            {/* Left Section */}
            <motion.div
               className="md:row-span-3 flex justify-center items-center"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
            >
               <motion.img
                  src="/assets/navLogo2.png"
                  alt="logo j-idev"
                  className="rounded-full shadow-xl shadow-green-200 hover:scale-110 ease-in duration-500"
                  style={{ maxWidth: "150px", maxHeight: "150px" }}
               />
            </motion.div>

            {/* Middle Section */}
            <motion.div
               className="col-span-2 md:row-span-2 flex justify-center items-center text-center"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
            >
               <h1 className="text-3xl font-bold border-black">
                  J-iDev, votre partenaire vers la réussite
               </h1>
            </motion.div>

            {/* Bottom Left Section */}
            <motion.div
               className="col-span-2 md:col-start-2 flex justify-center items-center text-center"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
            >
               <motion.article className="text-lg text-gray-600 text-left ">
                  <h3 className="font-semibold mb-2">
                     Développeur spécialisé dans le Web, j'accompagne les
                     entreprises dans leur succès sur internet.
                  </h3>
                  <p className="pb-2">
                     J'applique un soin tout particulier à rendre chaque {""}
                     <span className="font-bold text-xl">projet unique. </span>
                  </p>
                  <p>
                     Le site internet d'une entreprise la reflète, je mets donc
                     en œuvre toutes mes compétences pour réaliser des sites
                     <span className="font-bold text-xl"> rapides</span>,
                     optimisés pour le{" "}
                     <span className="font-bold text-xl">SEO</span>, et{" "}
                     <span className="font-bold text-xl">responsive</span>{" "}
                     (adaptés à toute taille d'écrans).
                  </p>
                  <h4 className="font-bold pt-2">
                     Voici ma méthode en trois points :{" "}
                  </h4>
               </motion.article>
            </motion.div>

            {/* Full Width Section */}
            <motion.div
               className="col-span-3"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
            >
               <Method />
            </motion.div>
         </div>
      </motion.div>
   );
};

export default About;
