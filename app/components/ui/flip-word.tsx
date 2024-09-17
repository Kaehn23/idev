"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
   words,
   duration = 3000,
   className,
}: {
   words: string[];
   duration?: number;
   className?: string;
}) => {
   const [currentWord, setCurrentWord] = useState(words[0]);
   const [isAnimating, setIsAnimating] = useState<boolean>(false);

   const startAnimation = useCallback(() => {
      const word = words[words.indexOf(currentWord) + 1] || words[0];
      setCurrentWord(word);
      setIsAnimating(true);
   }, [currentWord, words]);

   useEffect(() => {
      if (!isAnimating) {
         const timer = setTimeout(() => {
            startAnimation();
         }, duration);
         return () => clearTimeout(timer);
      }
   }, [isAnimating, duration, startAnimation]);

   return (
      <AnimatePresence
         onExitComplete={() => {
            setIsAnimating(false);
         }}
      >
         <motion.div
            initial={{
               opacity: 0,
               y: 10,
            }}
            animate={{
               opacity: 1,
               y: 0,
            }}
            transition={{
               type: "spring",
               stiffness: 100,
               damping: 10,
            }}
            exit={{
               opacity: 0,
               y: -20, // Réduit le déplacement vertical pour éviter le débordement
               x: 20,  // Réduit le déplacement horizontal pour éviter le débordement
               filter: "blur(4px)", // Réduit le flou
               scale: 1.5,          // Réduit le scale
               position: "absolute",
            }}
            className={cn(
               "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
               className
            )}
            key={currentWord}
         >
            {currentWord.split(" ").map((word, wordIndex) => (
               <motion.span
                  key={word + wordIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                     delay: wordIndex * 0.3,
                     duration: 0.1,
                  }}
                  className="inline-block whitespace-nowrap"
               >
                  {word.split("").map((letter, letterIndex) => (
                     <motion.span
                        key={word + letterIndex}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                           delay: wordIndex * 0.2 + letterIndex * 0.02,
                           duration: 0.1,
                        }}
                        className="inline-block"
                     >
                        {letter}
                     </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
               </motion.span>
            ))}
         </motion.div>
      </AnimatePresence>
   );
};

export default FlipWords;
