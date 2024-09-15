import React from 'react';

const CTA = () => {
  return (
    <div className="w-full h-16 bg-green-300 rounded-full flex justify-center items-center mx-auto my-12 shadow-lg">
      <a
        href="https://cal.com/j-idev/30min?user=j-idev"
        target="_blank"
        rel="noopener noreferrer"
        className="relative px-6 py-2 bg-black text-white rounded-full text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-white hover:text-black"
      >
        Réservez un appel
        <span className="absolute inset-0 bg-white opacity-20 rounded-full transition-opacity duration-300 hover:opacity-40"></span>
      </a>
    </div>
  );
};

export default CTA;
