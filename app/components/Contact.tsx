"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./ui/ContactForm";

function Contact() {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
         },
      },
   };

   return (
      
      <motion.div
         id="contact"
         initial="hidden"
         whileInView="visible"
         variants={containerVariants}
         className="relative flex flex-col gap-4 items-center justify-center px-4 pt-16 md:pt-24"
      >
         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center ">
            Prêt à faire décoller votre{" "}
            <span className="text-green-400 border-b-4 border-green-300">
               visibilité
            </span>
            ?
         </h1>
         <div className="m-4">
            <ContactForm />
         </div>
      </motion.div>
      
   );
}

export default Contact;
