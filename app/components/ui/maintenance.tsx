import React from "react";

function Maintenance() {
   return (
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-black text-center">
               Refonte site-web
            </h2>
            <p className="text-xl mb-4 text-black font-semibold">--- €</p>
            <p className="text-black pb-4">Definissons vos besoins ensemble</p>
            <div className="w-full  border-t border-gray-500 my-4"></div>
            <ul className="mb-4 text-black list-disc list-inside py-4">
               <li>Solutions sur mesure à définir ensemble</li>
            </ul>
            <a
               href="https://cal.com/j-idev/30min?user=j-idev"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-green-300 text-black  rounded hover:bg-green-600 relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg "
            >
               Prendre rendez-vous
            </a>
         </div>

         <div className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-black text-center">
               Maintenance Pack
            </h2>
            <p className="text-xl mb-4 text-black font-semibold">50 €/ mois</p>
            <p className="text-black pb-4">
               Concentrez vous sur votre coeur de métier
            </p>
            <div className="w-full  border-t border-gray-500 my-4"></div>
            <ul className="mb-4 text-black list-disc list-inside py-4">
               <li>Maintenance & mise à jour globales</li>
               <li>Mise à jour et verification des systèmes de sécurité</li>
               <li>Ajout & modification de contenu</li>
            </ul>
            <a
               href="https://cal.com/j-idev/30min?user=j-idev"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-green-300 text-black  rounded hover:bg-green-600 relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg "
            >
               Prendre rendez-vous
            </a>
         </div>

         <div className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-black text-center">
               Custom Pack
            </h2>
            <p className="text-xl mb-4 text-black font-semibold">-- €</p>
            <p className="text-black pb-4">Definissons vos besoins ensemble</p>
            <div className="w-full  border-t border-gray-500 my-4"></div>
            <ul className="mb-4 text-black list-disc list-inside py-4">
               <li>Solutions sur mesure à définir ensemble</li>
            </ul>
            <a
               href="https://cal.com/j-idev/30min?user=j-idev"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-green-300 text-black  rounded hover:bg-green-600 relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg "
            >
               Prendre rendez-vous
            </a>
         </div>
      </div>
   );
}

export default Maintenance;
