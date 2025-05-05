"use client";
import { motion, useInView, LazyMotion, domAnimation } from "framer-motion";
import Head from "next/head";
import React, { useRef, useMemo, Suspense } from "react";
import Link from "next/link";


import { FlipWords } from "./ui/flip-word";
import { Highlight } from "./ui/hero-highlight";
import { TypewriterEffectSmooth } from "./ui/Typewriter-effect";

// Loading component for suspense
const LoadingPlaceholder = () => (
   <div className="h-12 w-full animate-pulse bg-gray-200 rounded" />
);

const Main: React.FC = () => {
   // Memoize static data
   const words = useMemo(() => ["Fidélisez", "Vendez", "Convertissez"], []);
   const words2 = useMemo(() => [
      { text: "Offrez" },
      { text: "une" },
      { text: "agréable" },
      { text: "expérience" },
      { text: "en" },
      { text: "ligne" },
      { text: "à" },
      { text: "vos" },
      { text: "clients" },
   ], []);
   
   const mainRef = useRef(null);
   const isInView = useInView(mainRef, { once: true, margin: "-100px" });

   // Memoize animation variants
   const containerVariants = useMemo(() => ({
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
            duration: 0.5,
         },
      },
   }), []);

   const itemVariants = useMemo(() => ({
      hidden: { opacity: 0, y: 20 },
      visible: { 
         opacity: 1, 
         y: 0,
         transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 0.5
         }
      },
   }), []);

   const buttonVariants = useMemo(() => ({
      hover: {
         scale: 1.1,
         transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
         }
      },
      tap: {
         scale: 0.95,
         transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
         }
      }
   }), []);

   return (
      <>
         <Head>
            <title>J-iDev - Création de sites web, maintenance & SEO</title>
            <meta
               name="description"
               content="Bienvenue sur notre site, nous proposons nos services de création de sites web responsive, optimisés et rapides. Nous effectuons aussi des refontes & de la maintenance sur des sites existants. Nous offrons également un service de SEO."
            />
            {/* Open Graph Meta Tags */}
            <meta
               property="og:title"
               content="J-iDev - Création de sites web, maintenance & SEO"
            />
            <meta
               property="og:description"
               content="Nous créons des sites web responsive, optimisés et rapides, avec des services de refonte, maintenance et SEO."
            />
            <meta property="og:image" content="/assets/og-image.jpg" />
            <meta property="og:url" content="https://votresite.com" />
            <meta property="og:type" content="website" />
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
               name="twitter:title"
               content="J-iDev - Création de sites web, maintenance & SEO"
            />
            <meta
               name="twitter:description"
               content="Nous créons des sites web responsive, optimisés et rapides, avec des services de refonte, maintenance et SEO."
            />
            <meta name="twitter:image" content="/assets/twitter-image.jpg" />
         </Head>

         <main
            ref={mainRef}
            className="relative min-h-screen flex items-center max-w-6xl mx-auto justify-center px-4 pt-16 bg-cover bg-center bg-no-repeat"
            style={{
               backgroundImage: `url('/assets/bg6.png')`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
            }}
            role="main"
         >
            <LazyMotion features={domAnimation}>
               <motion.section
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={containerVariants}
                  className="relative flex flex-col gap-4 items-center justify-center w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-8"
                  aria-labelledby="hero-title"
               >
                  {/* Titre Principal */}
                  <motion.h1
                     variants={itemVariants}
                     id="hero-title"
                     className="text-3xl md:text-7xl font-bold text-center m-4"
                  >
                     <Suspense fallback={<LoadingPlaceholder />}>
                        <Highlight className="text-black md:text-7xl sm:mt-4 mx-auto">
                           Votre vitrine en ligne
                        </Highlight>
                     </Suspense>
                  </motion.h1>

                  {/* Sous-titre */}
                  <motion.h2
                     variants={itemVariants}
                     className="text-3xl md:text-7xl font-bold sm:text-2xl text-black text-center pb-4"
                  >
                     Attirez plus de clients
                  </motion.h2>

                  {/* Animation FlipWords */}
                  <motion.div
                     variants={itemVariants}
                     className="text-3xl md:text-7xl font-bold text-center pb-4 overflow-hidden" 
                  >
                     <Suspense fallback={<LoadingPlaceholder />}>
                        <FlipWords
                           words={words}
                           duration={1000}
                           className="text-orange-500 border-b-8 border-orange-300"
                        />
                     </Suspense>
                  </motion.div>

                  {/* Typewriter Effect Smooth */}
                  <motion.div
                     variants={itemVariants}
                     className="w-full max-w-2xl text-center"
                  >
                     <h3 className="sr-only">Description des services</h3>
                     <Suspense fallback={<LoadingPlaceholder />}>
                        <TypewriterEffectSmooth words={words2} />
                     </Suspense>
                  </motion.div>

                  {/* Phrase Additionnelle Centrée */}
                  <motion.div
                     variants={itemVariants}
                     className="w-full max-w-2xl text-center mb-4"
                  >
                     <h3 className="sr-only">Description des services</h3>
                     <div className="text-black">
                        Augmentez votre visibilité grâce à notre{" "}
                        <span className="font-semibold text-green-400 border-b-2 border-green-300">
                           expertise
                        </span>
                     </div>
                  </motion.div>

                  {/* Navigation */}
                  <motion.nav
                     variants={itemVariants}
                     className="flex space-x-7"
                     aria-label="Actions principales"
                  >
                     <Link href="/#contact" passHref>
                        <motion.button
                           className="bg-green-300 text-black dark:bg-white rounded-full shadow-lg w-fit hover:scale-110 dark:text-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                           variants={buttonVariants}
                           whileHover="hover"
                           whileTap="tap"
                           aria-label="Prendre contact"
                        >
                           Prendre contact
                        </motion.button>
                     </Link>

                     <Link href="/#about" passHref>
                        <motion.button
                           className="bg-black dark:bg-white rounded-full w-fit hover:scale-110 shadow-lg text-white dark:text-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                           variants={buttonVariants}
                           whileHover="hover"
                           whileTap="tap"
                           aria-label="En savoir plus"
                        >
                           En savoir plus
                        </motion.button>
                     </Link>
                  </motion.nav>
               </motion.section>
            </LazyMotion>
         </main>
      </>
   );
};

export default Main;
