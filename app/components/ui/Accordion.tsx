"use client";
import { useState } from 'react'; // Import useState to manage state
import { motion } from "framer-motion"; // Ensure correct import
import React from 'react';

const Accordion = () => {
  // Animation variants for the accordion content
  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  // Animation for the arrow rotation
  const arrowVariants = {
    closed: { rotate: 0 }, // Inverse rotation
    open: { rotate: 180, transition: { duration: 0.3 } },
  };

  // State to track whether each accordion item is open (Array of boolean values)
  const [isOpen, setIsOpen] = useState([false, false, false]);

  // Toggle the accordion open/closed state for each item
  const toggleAccordion = (index: number) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // Toggle the specific item
      return newState;
    });
  };

  return (
    <div className="mx-auto max-w-lg">
      <div className="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">

        {/* Accordion item 1 */}
        <div className="group">
          <summary
            className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50"
            onClick={() => toggleAccordion(0)} // Toggle based on index 0
          >
            Accordion item 01
            <motion.div
              className="text-secondary-500"
              variants={arrowVariants}
              animate={isOpen[0] ? "open" : "closed"} // Animate based on isOpen[0]
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block h-5 w-5 transition-all duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </motion.div>
          </summary>
          <motion.div
            className="border-t border-t-gray-100 p-4 text-secondary-500 overflow-hidden"
            variants={accordionVariants}
            initial="hidden"
            animate={isOpen[0] ? "visible" : "hidden"} // Animate based on isOpen[0]
          >
            This is the first item's accordion body.
          </motion.div>
        </div>

        {/* Accordion item 2 */}
        <div className="group">
          <summary
            className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50"
            onClick={() => toggleAccordion(1)} // Toggle based on index 1
          >
            Accordion item 02
            <motion.div
              className="text-secondary-500"
              variants={arrowVariants}
              animate={isOpen[1] ? "open" : "closed"} // Animate based on isOpen[1]
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block h-5 w-5 transition-all duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </motion.div>
          </summary>
          <motion.div
            className="border-t border-t-gray-100 p-4 text-secondary-500 overflow-hidden"
            variants={accordionVariants}
            initial="hidden"
            animate={isOpen[1] ? "visible" : "hidden"} // Animate based on isOpen[1]
          >
            This is the second item's accordion body.
          </motion.div>
        </div>

        {/* Accordion item 3 */}
        <div className="group">
          <summary
            className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50"
            onClick={() => toggleAccordion(2)} // Toggle based on index 2
          >
            Accordion item 03
            <motion.div
              className="text-secondary-500"
              variants={arrowVariants}
              animate={isOpen[2] ? "open" : "closed"} // Animate based on isOpen[2]
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block h-5 w-5 transition-all duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </motion.div>
          </summary>
          <motion.div
            className="border-t border-t-gray-100 p-4 text-secondary-500 overflow-hidden"
            variants={accordionVariants}
            initial="hidden"
            animate={isOpen[2] ? "visible" : "hidden"} // Animate based on isOpen[2]
          >
            This is the third item's accordion body.
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Accordion;
