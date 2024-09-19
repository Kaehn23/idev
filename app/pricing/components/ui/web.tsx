import React from "react";

function Web() {
   return (
      <div>
         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 shadow-lg">
               <h2 className="text-2xl font-semibold mb-2 text-black text-center">
                  Starter Pack
               </h2>
               <p className="text-xl mb-4 text-black font-semibold line-through">
                  999 €
               </p>
               <p className="text-xl mb-4 text-black font-semibold line-">
                  849 €{" "}
                  <span className="text-green-300 border-b-4 border-green-300">
                     Offre de lancement de l'entreprise!
                  </span>
               </p>
               <p></p>
               <p className="text-black pb-4">
                  Adapté aux petites entreprises ainsi qu'aux start-up
               </p>
               <div className="w-full  border-t border-gray-500 my-4"></div>
               <ul className="mb-4 text-black list-disc list-inside py-4">
                  <li>Nom de domaine</li>
                  <li>Hébergement web</li>
                  <li>Site vitrine</li>
                  <li>Page d'accueil</li>
                  <li>Formulaire de contact</li>
                  <li>3 mois de maintenance offerte</li>
                  <li>Support 7j/7</li>
               </ul>
               <a
                  href="https://cal.com/j-idev/30min?user=j-idev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-300 text-black  rounded hover:bg-green-600 relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg "
               >
                  Rendez-vous
               </a>
            </div>

            <div className="border rounded-lg p-6 shadow-lg">
               <h2 className="text-2xl font-semibold mb-2 text-black text-center">
                  Premium Pack
               </h2>
               <p className="text-xl mb-4 text-black font-semibold">1499 €</p>
               <p className="text-black pb-4">
                  Idéal pour les entreprises en croissance
               </p>
               <div className="w-full  border-t border-gray-500 my-4"></div>
               <ul className="mb-4 text-black list-disc list-inside py-4">
                  <li>Starter Pack (inclus)</li>
                  <li>Prise de rendez-vous en ligne</li>
                  <li>Boite mail professionelle</li>
                  <li>6 Mois de maintenance offerte</li>
                  <li>Support 7j/7</li>
               </ul>
               <a
                  href="https://cal.com/j-idev/30min?user=j-idev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-300 text-black  rounded hover:bg-green-600 relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg "
               >
                  Rendez-vous
               </a>
            </div>

            <div className="border rounded-lg p-6 shadow-lg">
               <h2 className="text-2xl font-semibold mb-2 text-black text-center">
                  Custom Pack
               </h2>
               <p className="text-xl mb-4 text-black font-semibold">--- €</p>
               <p className="text-black pb-4">
                  Prix suivant devis, entièrement personnalisable
               </p>
               <div className="w-full  border-t border-gray-500 my-4"></div>
               <ul className="mb-4 text-black list-disc list-inside py-4">
                  <li>Premium Pack (inclus)</li>
                  <li>Design sur mesure</li>
                  <li>1 an de maintenance offerte</li>
                  <li>Solutions personnalisable sur devis</li>

                  <li>Support 7j/7</li>
               </ul>
               <a
                  href="https://cal.com/j-idev/30min?user=j-idev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-300 text-black  rounded hover:bg-green-600 relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg "
               >
                  Rendez-vous
               </a>
            </div>
         </div>
      </div>
   );
}

export default Web;
