"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import { CardProps } from "./ui/CardComponent";
import CardCarousel from "./ui/CardCarousel";

function Projects() {
   const cards: CardProps[] = [
      {
         imageSrc: "/assets/projects/novaterimCard.png",
         title: "Novaterim Mobile App",
         description: "Description de la carte 1.",
         link: "https://www.youtube.com/watch?app=desktop&v=vHH9Yl_J7hM",
         tags: [
            {
               name: "Application Mobile",
               colorClasses: "bg-blue-200 text-blue-800",
            },
         ],
      },
      {
         imageSrc: "/assets/projects/sudDecapageCard.png",
         title: "Sud-Décapage",
         description: "Description de la carte 1.",
         link: "https://www.sud-decapage.com/",
         tags: [
            { name: "Site Web", colorClasses: "bg-green-200 text-green-800" },
         ],
      },
      {
         imageSrc: "/assets/projects/conceptTruckCard.png",
         title: "Concept-Truck",
         description: "Description de la carte 1.",
         link: "https://vince2-blush.vercel.app/",
         tags: [
            { name: "Site Web", colorClasses: "bg-green-200 text-green-800" },
         ],
      },
      {
         imageSrc: "/assets/projects/portfolioCard2.png",
         title: "Portfolio",
         description: "Description de la carte 1.",
         link: "https://portfolio-nextjs-kn23s-projects.vercel.app/",
         tags: [
            { name: "Site Web", colorClasses: "bg-green-200 text-green-800" },
         ],
      },

      // cartes ici
   ];

   return (
      <div id="projects" className="w-full mx-auto h-screen">
         <Vortex
            backgroundColor="white"
            rangeY={300}
            particleCount={75}
            baseHue={120}
            baseSpeed={0.2}
            rangeRadius={10}
            baseRadius={4}
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
         >
            <h2 className="text-black text-2xl md:text-6xl font-bold text-center">
               Retrouvez mes derniers projets
            </h2>
            <div className="pt-12">
               <CardCarousel cards={cards} />
            </div>
         </Vortex>
      </div>
   );
}

export default Projects;
