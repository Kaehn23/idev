"use client"
import React from 'react'

function BackPage() {
    return (
        <div className="w-full flex justify-center items-center mx-auto my-8 px-4 sm:my-12">
          <div className="bg-black rounded-full flex justify-center items-center shadow-lg p-2 sm:p-4 max-w-xs sm:max-w-sm md:max-w-md">
            <a
              href="/"
             
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-green-300 text-black rounded-full font-semibold text-sm sm:text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-white hover:text-black"
            >
              Retour à la page principale
              <span className="absolute inset-0 bg-white opacity-20 rounded-full transition-opacity duration-300 hover:opacity-40"></span>
            </a>
          </div>
        </div>
      );
}

export default BackPage
