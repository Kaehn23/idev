import Link from 'next/link';
import React from 'react';

// TypeScript interface for the Navbar props (even if we don't need props for now, it's good practice)
interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-black py-4 px-8 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <div className="bg-white rounded-full p-2">
          {/* Remplacez ceci par votre icône de logo */}
          <span className="text-black text-xl font-bold">🌱</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex space-x-6 text-white">
        <Link href="#about">
          <a className="hover:text-gray-400">À propos</a>
        </Link>
        <Link href="#results">
          <a className="hover:text-gray-400">Résultats</a>
        </Link>
        <Link href="#services">
          <a className="hover:text-gray-400">Services</a>
        </Link>
        <Link href="#process">
          <a className="hover:text-gray-400">Process</a>
        </Link>
        <Link href="#faqs">
          <a className="hover:text-gray-400">FAQs</a>
        </Link>
      </div>

      {/* Call to Action Button */}
      <div>
        <Link href="#book-call">
          <a className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">
            Réserver un appel
          </a>
        </Link>
      </div>
    </nav>
  );
};
