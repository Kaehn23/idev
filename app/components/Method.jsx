"use client";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Method() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] m-auto py-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Card 1 */}
      <CardContainer className="inter-var">
        <motion.div variants={cardVariants}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 glass-effect-green dark:text-white"
            >
              Prise d'informations
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Discutons ensemble & définissons un cahier des charges propre à votre site web.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/talk.jpg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Prise d'informations"
                  
                />
              </motion.div>
            </CardItem>
          </CardBody>
        </motion.div>
      </CardContainer>

      {/* Card 2 */}
      <CardContainer className="inter-var">
        <motion.div variants={cardVariants}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 glass-effect-yellow dark:text-white"
            >
              Conception
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Conception du site, en tenant compte de vos besoins et du cahier des charges.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/conception.jpg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Conception"
                  
                />
              </motion.div>
            </CardItem>
          </CardBody>
        </motion.div>
      </CardContainer>

      {/* Card 3 */}
      <CardContainer className="inter-var">
        <motion.div variants={cardVariants}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 text-center glass-effect-orange dark:text-white"
            >
              Déploiement
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Mise en ligne du site avec les technologies web les plus performantes et optimisées.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/upload.jpg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Déploiement"
                  
                />
              </motion.div>
            </CardItem>
          </CardBody>
        </motion.div>
      </CardContainer>
    </motion.div>
  );
}

export default Method;
