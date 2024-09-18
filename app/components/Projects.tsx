"use client";
import React from "react";
import { motion } from "framer-motion";
import { CardProps } from "./ui/CardComponent";
import CardCarousel from "./ui/CardCarousel";
import { GoArrowDown } from "react-icons/go";
import SVGLineGlowAnimate from "./ui/SVGLineGlowAnimate";

function Projects() {
   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
   };

   const cards: CardProps[] = [
      {
         imageSrc: "/assets/projects/novaterimCard.png",
         title: "Novaterim Mobile App",
         description: "Application mobile pour une agence d'intérim.",
         link: "https://www.youtube.com/watch?app=desktop&v=vHH9Yl_J7hM",
         tags: [
            {
               name: "Application Mobile",
               colorClasses: "bg-blue-200 text-black",
            },
         ],
      },
      {
         imageSrc: "/assets/projects/sudDecapageCard.png",
         title: "Sud-Décapage",
         description: "Site pour une entreprise de décapage & sablage.",
         link: "https://www.sud-decapage.com/",
         tags: [
            { name: "Site Web", colorClasses: "bg-orange-200 text-black" },
         ],
      },
      {
         imageSrc: "/assets/projects/conceptTruckCard.png",
         title: "Concept-Truck",
         description: "Site pour une entreprise d'aménagement de véhicules.",
         link: "https://vince2-blush.vercel.app/",
         tags: [
            { name: "Site Web", colorClasses: "bg-orange-200 text-black" },
         ],
      },
      {
         imageSrc: "/assets/projects/portfolioCard2.png",
         title: "Portfolio",
         description: "Mon portfolio de developpeur full-stack.",
         link: "https://portfolio-nextjs-kn23s-projects.vercel.app/",
         tags: [
            { name: "Site Web", colorClasses: "bg-orange-200 text-green-800" },
         ],
      },

      // cartes ici
   ];

   return (
      <section
         id="projects"
         className="relative w-full min-h-screen p-4 flex items-center justify-center py-8  pt-24"
         style={{
            backgroundImage: `url("/assets/boop7.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
         }}
         aria-labelledby="projects-title"
      >
         <div id="projects" className="w-full mx-auto h-screen">
            <h2 className="text-black text-2xl md:text-6xl font-bold text-center ">
               Retrouvez mes derniers projets
            </h2>
            <div className="pt-12">
               <CardCarousel cards={cards} />
            </div>
            <motion.div
               className="text-center font-bold text-black text-2xl pt-8"
               whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 100 },
               }}
            >
               Contactez moi pour obtenir votre{" "}
               <span className="lg:border-b-4 md:border-b-2 sm:border-b-2 border-green-300">
                  devis gratuit
               </span>{" "}
            </motion.div>

            <motion.div
               className="flex flex-col items-center justify-center m-2"
               variants={itemVariants}
            >
               <div className="flex flex-col items-center gap-4 m-4">
                  <SVGLineGlowAnimate
                     movementDelay={0}
                     id={1}
                     baseWidth={300}
                     initialGradientX={0}
                     color="#E3AA3B"
                  />
                  <SVGLineGlowAnimate
                     movementDelay={2000}
                     id={2}
                     baseWidth={400}
                     initialGradientX={0}
                     color="#A9F030"
                  />
                  <SVGLineGlowAnimate
                     movementDelay={4000}
                     id={3}
                     baseWidth={350}
                     initialGradientX={0}
                     color="#E3AA3B"
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
                  className="flex text-black justify-center items-center"
               >
                  <GoArrowDown size={40} className="m-4" />
                  <GoArrowDown size={40} className="m-4" />
                  <GoArrowDown size={40} className="m-4" />
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}

export default Projects;
