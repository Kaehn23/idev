import React from "react";

function Web() {
   return (
      <div>
         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 shadow-lg">
               <h2 className="text-2xl font-semibold mb-2 text-black text-center underline">
                  Starter Pack
               </h2>
               <p className="text-xl mb-4 text-black font-semibold">899€ HT</p>

               <p></p>
               <p className="text-black pb-4">
                  Adapté aux petites entreprises ainsi qu'aux start-up
               </p>
               <p className="text-black">
                  Site internet "One Page" regroupant les principales
                  informations de votre entreprise, votre domaine d'activité
                  ainsi que les coordonnées de contact{" "}
               </p>
               <div className="w-full  border-t border-gray-500 my-4"></div>
               <ul className="mb-4 text-black list-disc list-inside py-4 font-semibold">
                  <li>Nom de domaine</li>
                  <li>Hébergement web</li>
                  <li>Landing Page</li>
                  <li>Support 7j/7</li>
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
               <h2 className="text-2xl font-semibold mb-2 text-black text-center underline  ">
                  Premium Pack
               </h2>
               <p className="text-xl mb-4 text-black font-semibold ">
                  1499€ HT
               </p>

               <p className="text-black pb-4">
                  Idéal pour les entreprises en croissance
               </p>
               <p className="text-black">
                  Site internet complet regroupant les principales informations
                  de votre entreprise, votre domaine d'activité vos coordonnées
                  de contact ainsi qu'un formulaire de contact, vos avis Google,
                  votre emplacement sur GoogleMaps, ainsi que de nombreuses
                  options sur demande !{" "}
               </p>
               <div className="w-full  border-t border-gray-500 my-4"></div>
               <ul className="mb-4 text-black list-disc list-inside py-4 font-semibold">
                  <li>Nom de domaine</li>
                  <li>Hébergement web</li>
                  <li>Site vitrine OU Landing Page</li>
                  <li>Formulaire de contact</li>
                  <li>Avis Google intégrés</li>
                  <li>Intégration de votre emplacement Google Maps</li>
                  <li>Prise de rendez-vous en ligne *</li>
                  <li>Smooth-Scrolling*</li>
                  <li>3 Mois de maintenance offerte</li>
                  <li>Support 7j/7</li>
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
               <h2 className="text-2xl font-semibold mb-2 text-black text-center underline">
                  Custom Pack
               </h2>
               <p className="text-xl mb-4 text-black font-semibold">--- €</p>
               <p className="text-black pb-4">
                  Prix suivant devis, entièrement personnalisable
               </p>
               <p className="text-black pb-4">
                  Idéal pour les entreprises désireuse de renforcer leur image
                  de marque avec un site entierement sur-mesûre.
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
                  Prendre rendez-vous
               </a>
            </div>
         </div>
      </div>
   );
}

export default Web;
