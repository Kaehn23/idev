"use client";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";

const About = () => {
   return (
      <motion.div
         id="about"
         className="relative w-full md:h-screen p-2 flex items-center py-8"
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
         <div className="w-full h-full mx-auto p-2 flex justify-center items-center relative z-1">
            <div className="md:mt-16 sm:mt-8">
               {/*logo */}
               <motion.img
                  src="/assets/navLogo2.png"
                  alt="logo j-idev"
                  className="rounded-full shadow-xl shadow-green-300 hover:scale-110 ease-in duration-500 mx-auto my-8"
                  style={{ maxWidth: "150px", maxHeight: "150px" }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
               />
               <motion.div
                  className="flex justify-center items-center glass-effect"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  Développeur spécialisé dans le Web ; j'applique un soin tout
                  particulier à rendre chaque projet unique.
                  <br />
                  Le site internet d'une entreprise la reflète, je mets donc en
                  œuvre toutes mes compétences pour réaliser des sites
                  <br />
                  rapides et efficaces, optimisés pour le SEO, et
                  adaptés à toute taille d'écran (responsive).
               </motion.div>
               <motion.div
                  className="flex justify-center items-center glass-effect"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
               >
                  Chaque projet est approché avec une méthodologie pertinente et
                  efficace en trois points :
               </motion.div>

               {/* Grid layout */}
               <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] m-auto py-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
               >
                  <CardContainer className="inter-var">
                     <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
                        <CardItem
                           translateZ="50"
                           className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                           Prise d'informations
                        </CardItem>
                        <CardItem
                           as="p"
                           translateZ="60"
                           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                           Discutons ensemble & définissons un cahier des
                           charges.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                           <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                           >
                              <Image
                                 src="https://images.unsplash.com/photo-1522881193457-37ae97c905bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                 height="1000"
                                 width="1000"
                                 className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                 alt="thumbnail"
                              />
                           </motion.div>
                        </CardItem>
                     </CardBody>
                  </CardContainer>

                  <CardContainer className="inter-var">
                     <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
                        <CardItem
                           translateZ="50"
                           className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                           Conception
                        </CardItem>
                        <CardItem
                           as="p"
                           translateZ="60"
                           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                           Conception du site, en tenant compte de vos besoins
                           et du cahier des charges.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                           <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                           >
                              <Image
                                 src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                 height="1000"
                                 width="1000"
                                 className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                 alt="thumbnail"
                              />
                           </motion.div>
                        </CardItem>
                     </CardBody>
                  </CardContainer>

                  <CardContainer className="inter-var">
                     <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
                        <CardItem
                           translateZ="50"
                           className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                           Déploiement
                        </CardItem>
                        <CardItem
                           as="p"
                           translateZ="60"
                           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                           Mise en ligne du site avec les technologies web les
                           plus performantes et optimisées.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                           <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                           >
                              <Image
                                 src="https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                 height="1000"
                                 width="1000"
                                 className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                 alt="thumbnail"
                              />
                           </motion.div>
                        </CardItem>
                     </CardBody>
                  </CardContainer>
               </motion.div>
            </div>
         </div>
      </motion.div>
   );
};

export default About;
