import React from "react";

function Web() {
   return (
      <div>
         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 shadow-lg glass-silver">
               <h2 className="text-2xl font-semibold mb-2 text-black text-center underline">
                  Starter Pack
               </h2>
               <p className="text-xl mb-4 text-black uppercase font-semibold">
                  {" "}
                  à partir de 899€ HT
               </p>

               <h3 className="text-black p-2 ">
                  <p className="text-black pb-4">
                     Adapté aux petites entreprises ainsi qu'aux start-up
                  </p>
                  <p className="text-black pb-4">
                     Site internet "One Page" regroupant les principales
                     informations de votre entreprise, votre domaine d'activité
                     ainsi que les coordonnées de contact <br /> Contient les
                     onglets " Acceuil", "A Propos", "Services", "Contact".
                  </p>
                  <p className="text-black">
                     *Possibilité d'ajouter des pages & options supplémentaires sur devis
                  </p>
               </h3>

               <div className="w-full  border-t border-gray-500 my-4"></div>
               <ul className="mb-4 text-black list-disc list-inside py-4 font-semibold">
                  <li>Site internet statique "One Page"</li>
                  <li>Design moderne</li>
                  <li>Copywriting impactant</li>
                  <li>Onglets "Accueil", "A Propos", "Services", "Contact"</li>
                  <li className="list-none">
                     <br />
                  </li>{" "}
                  {/* bullet hidden here */}
                  <li>Nom de domaine offert pendant 2 ans</li>
                  <li>Hébergement offert pendant 1 an</li>
                  <li className="list-none">
                     <br />
                  </li>{" "}
                  <li>Support 7j/7</li>
                  <li>Conformité RGPD</li>
               </ul>
               <div className="flex justify-center">
                  {/* <a
                     href="https://cal.com/j-idev/30min?user=j-idev"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-orange-300 text-black  rounded hover:bg-orange-600 m-2 text-center justify-center relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg "
                  >
                     Voir un exemple
                  </a> */}
                  <a
                     href="https://cal.com/j-idev/30min?user=j-idev"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-green-300 text-black  rounded hover:bg-green-600 m-2 text-center relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg "
                  >
                     Prendre rendez-vous
                  </a>
               </div>
            </div>

            <div className="border rounded-lg p-6 shadow-lg glass-silver">
               <h2 className="text-2xl font-semibold mb-2 text-black text-center underline  ">
                  Premium Pack
               </h2>
               <p className="text-xl mb-4 text-black font-semibold uppercase ">
                  à partir de 2000€ HT
               </p>

               <h3 className="text-black p-2">
                  <p className="text-black pb-4">
                     Idéal pour les entreprises en croissance
                  </p>
                  <p className="text-black">
                     Site internet complet regroupant les principales
                     informations de votre entreprise, votre domaine d'activité,
                     vos coordonnées de contact ainsi qu'un formulaire de
                     contact, votre emplacement via GoogleMaps,
                     ainsi que de nombreuses options sur demande !{" "}
                  </p>
               </h3>
               <div className="w-full  border-t border-gray-500 my-4"></div>
               <ul className="mb-4 text-black list-disc list-inside py-4 font-semibold">
                  <li>Site vitrine animé complet</li>
                  <li>Animations modernes</li>
                  <li>Design moderne</li>
                  <li>Copywriting impactant</li>                  
                  <li>Pages supplémentaires (Description détaillée de vos services, prestations, etc...)</li>
                  
                  
                  <li className="list-none">
                     <br />
                  </li>{" "}
                  <li>Formulaire de contact</li>                                                     
                  <li>Intégration de votre emplacement Google Maps</li>                  
                  
                  <li className="list-none">
                     <br />
                  </li>{" "}
                  <li>Nom de domaine offert pendant 2 ans</li>
                  <li>Hébergement offert pendant 1 an</li>                                                         
                  <li>3 Mois de maintenance offerte</li>
                  <li className="list-none">
                     <br />
                  </li>{" "}
                  <li>Support 7j/7</li>
                  <li>Conformité RGPD</li>
               </ul>
               <div className="flex justify-center">
                  {/* <a
                     href="https://cal.com/j-idev/30min?user=j-idev"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-orange-300 text-black  rounded hover:bg-orange-500 m-2 text-center relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg "
                  >
                     Voir un exemple
                  </a> */}
                  <a
                     href="https://cal.com/j-idev/30min?user=j-idev"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-green-300 text-black  rounded hover:bg-green-600 m-2 text-center relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg "
                  >
                     Prendre rendez-vous
                  </a>
               </div>
            </div>

            <div className="border rounded-lg p-6 shadow-lg glass-silver">
               <h2 className="text-2xl font-semibold mb-2 text-black text-center underline">
                  Custom Pack
               </h2>
               <p className="text-xl mb-4 text-black font-semibold uppercase">à partir de 5000€ HT</p>
               <p className="text-black pb-4">
                  Prix suivant devis, entièrement personnalisable
               </p>
               <p className="text-black pb-4">
                  Idéal pour les entreprises désireuse de renforcer leur image
                  de marque avec un site entierement sur-mesûre & autonomisable.
               </p>
               <div className="w-full  border-t border-gray-500 my-4"></div>
               <ul className="mb-4 text-black list-disc list-inside py-4 font-semibold">
                  <li>Site vitrine complet</li>
                  <li>Animations modernes</li>
                  <li>Design moderne</li>
                  <li>Copywriting impactant</li>                  
                  <li>Pages supplémentaires (Description détaillée de vos services, prestations, etc.)</li>
                  <li className="list-none">
                     <br />
                  </li>{" "}
                  <li>Articles de blog</li>
                  <li>Chatbot IA (Support client)</li>

                  <li className="list-none">
                     <br />
                  </li>{" "}
                  <li>Back Office (Gérez les publications de votre site seul!)</li>
                  
                  <li className="list-none">
                     <br />
                  </li>{" "}
                  <li>Formulaire de contact</li>
                  <li>Prise de rendez-vous en ligne</li>
                  <li>Avis Google intégrés</li>                  
                  <li>Intégration de votre emplacement Google Maps</li>
                  <li>Smooth-Scrolling</li>
                  
                  <li className="list-none">
                     <br />
                  </li>{" "}
                  <li>Nom de domaine offert pendant 2 ans</li>
                  <li>Hébergement offert pendant 1 an</li>                                                         
                  <li>1 ans de maintenance offerte</li>
                  <li className="list-none">
                     <br />
                  </li>{" "}
                  <li>Support 7j/7</li>
                  <li>Conformité RGPD</li>
               </ul>
               <div className="flex justify-center">
                  
                  <a
                     href="https://cal.com/j-idev/30min?user=j-idev"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-green-300 text-black  rounded hover:bg-green-600 m-2 text-center relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg "
                  >
                     Prendre rendez-vous
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Web;
