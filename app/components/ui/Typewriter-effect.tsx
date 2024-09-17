"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
   words,
   className,
   cursorClassName,
}: {
   words: {
      text: string;
      className?: string;
   }[];
   className?: string;
   cursorClassName?: string;
}) => {
   // Diviser le texte de chaque mot en caractères
   const wordsArray = words.map((word) => ({
      ...word,
      text: word.text.split(""),
   }));

   const [scope, animate] = useAnimate();
   const isInView = useInView(scope);

   useEffect(() => {
      if (isInView) {
         animate(
            "span",
            {
               display: "inline-block",
               opacity: 1,
               width: "fit-content",
            },
            {
               duration: 0.3,
               delay: stagger(0.05), // Délai ajusté pour une animation plus fluide sur mobile
               ease: "easeInOut",
            }
         );
      }
   }, [isInView, animate]);

   const renderWords = () => (
      <motion.div ref={scope} className="inline">
         {wordsArray.map((word, idx) => (
            <span key={`word-${idx}`} className="inline-block">
               {word.text.map((char, index) => (
                  <motion.span
                     initial={{ opacity: 0 }}
                     key={`char-${index}`}
                     className={cn(
                        "dark:text-white text-black",
                        word.className
                     )}
                  >
                     {char}
                  </motion.span>
               ))}
               &nbsp;
            </span>
         ))}
      </motion.div>
   );

   return (
      <div
         className={cn(
            "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
            className
         )}
      >
         {renderWords()}
         <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
               duration: 1,
               repeat: Infinity,
               repeatType: "loop",
            }}
            className={cn(
               "inline-block rounded-sm w-[2px] h-4 sm:h-5 md:h-6 lg:h-8 bg-blue-500 ml-1",
               cursorClassName
            )}
         ></motion.span>
      </div>
   );
};

export const TypewriterEffectSmooth = ({
   words,
   className,
}: {
   words: {
      text: string;
      className?: string;
   }[];
   className?: string;
   cursorClassName?: string;
}) => {
   // Diviser le texte de chaque mot en caractères
   const wordsArray = words.map((word) => ({
      ...word,
      text: word.text.split(""),
   }));

   const renderWords = () => (
      <div>
         {wordsArray.map((word, idx) => (
            <span key={`word-${idx}`} className="inline-block">
               {word.text.map((char, index) => (
                  <span
                     key={`char-${index}`}
                     className={cn(
                        "dark:text-white text-black",
                        word.className
                     )}
                  >
                     {char}
                  </span>
               ))}
               &nbsp;
            </span>
         ))}
      </div>
   );

   return (
      <div className={cn("flex items-center space-x-1 my-6", className)}>
         <motion.div
            className="overflow-hidden pb-2"
            initial={{ width: "0%" }}
            whileInView={{ width: "fit-content" }}
            transition={{
               duration: 2,
               ease: "linear",
               delay: 1.5,
            }}
         >
            <div
               className="text-xs sm:text-base md:text-xl lg:text-2xl text-center"
               style={{ whiteSpace: "nowrap" }} // Peut causer des débordements sur petits écrans
            >
               {renderWords()}{" "}
            </div>
         </motion.div>
      </div>
   );
};
