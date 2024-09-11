"use client";
import React from "react";
import { motion } from "framer-motion";
import Method from "./Method";

const About = () => {
   return (
      <motion.div
         id="about"
         className="relative w-full min-h-screen p-2 flex items-center justify-center py-8"
         style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 800 450' opacity='0.99'%3E%3Cdefs%3E%3Cfilter id='bbblurry-filter' x='-100%25' y='-100%25' width='400%25' height='400%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='36' x='0%25' y='0%25' width='100%25' height='100%25' in='SourceGraphic' edgeMode='none' result='blur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3C/defs%3E%3Cg filter='url(%23bbblurry-filter)'%3E%3Cellipse rx='79' ry='75' cx='115.21870838512075' cy='126.31292585893107' fill='hsla(100, 64%25, 65%25, 1.00)'%3E%3C/ellipse%3E%3Cellipse rx='79' ry='75' cx='170.77938981489706' cy='236.63450483842325' fill='hsl(208, 100%25, 86%25)'%3E%3C/ellipse%3E%3Cellipse rx='79' ry='75' cx='650.7836303710938' cy='111.48372650146484' fill='hsl(58, 100%25, 71%25)'%3E%3C/ellipse%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
         }}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8 }}
      >
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
            {/* Left Section - Full Height on Small Screens, Grid on Larger Screens */}
            <div className="md:row-span-3 flex justify-center items-center">
               <motion.img
                  src="/assets/navLogo2.png"
                  alt="logo j-idev"
                  className="rounded-full shadow-xl shadow-green-300 hover:scale-110 ease-in duration-500"
                  style={{ maxWidth: "150px", maxHeight: "150px" }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
               />
            </div>

            {/* Middle Section */}
            <div className="col-span-2 md:row-span-2 flex justify-center items-center text-center">
               <h1 className="text-4xl font-bold">J-iDev</h1>
            </div>

            {/* Bottom Left Section */}
            <div className="col-span-2 md:col-start-2 flex justify-center items-center text-center">
               <article className="text-lg text-gray-600">
                  Développeur spécialisé dans le Web ; j'applique un soin tout
                  particulier à rendre chaque{" "}
                  <span className="font-bold">projet unique.</span>
                  <br />
                  Le site internet d'une entreprise la reflète, je mets donc en
                  œuvre toutes mes compétences pour réaliser des sites
                  <br />
                  rapides et efficaces, optimisés pour le SEO, et adaptés à
                  toute taille d'écran (responsive).
               </article>
            </div>

            {/* Full Width Section for Method Component */}
            <div className="col-span-3">
               <Method />
            </div>
         </div>
      </motion.div>
   );
};

export default About;
