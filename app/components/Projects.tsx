// Projects.tsx
"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import { CardProps } from "./ui/CardComponent";
import CardCarousel from "./ui/CardCarousel";

function Projects() {
  const cards: CardProps[] = [
   {
      imageSrc: "/assets/profilePic1.png",
      title: "Titre de la Carte 1",
      description: "Description de la carte 1.",
      link: "https://www.sud-decapage.com/",
      tags: [
         { name: "Beep", colorClasses: "bg-blue-200 text-blue-800" },
         { name: "Boop", colorClasses: "bg-green-200 text-green-800" },
      ],
   },
   {
      imageSrc: "/assets/profilePic1.png",
      title: "Titre de la Carte 1",
      description: "Description de la carte 1.",
      link: "https://www.sud-decapage.com/",
      tags: [
         { name: "Beep", colorClasses: "bg-blue-200 text-blue-800" },
         { name: "Boop", colorClasses: "bg-green-200 text-green-800" },
      ],
   },
   {
      imageSrc: "/assets/profilePic1.png",
      title: "Titre de la Carte 1",
      description: "Description de la carte 1.",
      link: "https://www.sud-decapage.com/",
      tags: [
         { name: "Beep", colorClasses: "bg-blue-200 text-blue-800" },
         { name: "Boop", colorClasses: "bg-green-200 text-green-800" },
      ],
   },
   {
      imageSrc: "/assets/profilePic1.png",
      title: "Titre de la Carte 1",
      description: "Description de la carte 1.",
      link: "https://www.sud-decapage.com/",
      tags: [
         { name: "Beep", colorClasses: "bg-blue-200 text-blue-800" },
         { name: "Boop", colorClasses: "bg-green-200 text-green-800" },
      ],
   },
   {
      imageSrc: "/assets/profilePic1.png",
      title: "Titre de la Carte 1",
      description: "Description de la carte 1.",
      link: "https://www.sud-decapage.com/",
      tags: [
         { name: "Beep", colorClasses: "bg-blue-200 text-blue-800" },
         { name: "Boop", colorClasses: "bg-green-200 text-green-800" },
      ],
   },
   {
      imageSrc: "/assets/profilePic1.png",
      title: "Titre de la Carte 1",
      description: "Description de la carte 1.",
      link: "https://www.sud-decapage.com/",
      tags: [
         { name: "Beep", colorClasses: "bg-blue-200 text-blue-800" },
         { name: "Boop", colorClasses: "bg-green-200 text-green-800" },
      ],
   },
    // Vos cartes ici
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

        <CardCarousel cards={cards} />
      </Vortex>
    </div>
  );
}

export default Projects;
