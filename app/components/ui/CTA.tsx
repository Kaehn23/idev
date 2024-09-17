"use client";
import React from 'react';

const CTA = () => {
  return (
    <div className="w-full flex justify-center items-center mx-auto my-8 px-4 sm:my-12">
      <div className="bg-green-300 rounded-full flex justify-center items-center shadow-lg p-2 sm:p-4 max-w-xs sm:max-w-sm md:max-w-md">
        <a
          href="https://cal.com/j-idev/30min?user=j-idev"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-full font-semibold text-sm sm:text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-white hover:text-black"
        >
          Réservez un appel
          <span className="absolute inset-0 bg-white opacity-20 rounded-full transition-opacity duration-300 hover:opacity-40"></span>
        </a>
      </div>
    </div>
  );
};

export default CTA;
