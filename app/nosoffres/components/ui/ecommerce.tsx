import React from "react";

function ecommerce() {
   return (
      <div>
         <div className="mt-8 grid grid-cols-1 gap-6">
            <div className="border rounded-lg p-6 shadow-lg text-center">
               <h2 className="text-2xl font-semibold mb-2 text-black text-center underline">
                  Platinum Pack
               </h2>
               <p className="text-xl mb-4 text-black font-semibold uppercase">
                  à partir de 6000€ HT
               </p>
               <p className="text-black pb-4">
                  Prix suivant devis, entièrement personnalisable
               </p>
               <p className="text-black pb-4">
                  Site de vente de produits ou services, entièrement
                  personnalisable et autonomisable avec son back office.
               </p>
               <div className="w-full  border-t border-gray-500 my-4"></div>
               <ul className="mb-4 text-black list-disc list-inside py-4 font-semibold">
                  <li>Site E-Commerce complet</li>
                  <li>Sécurité renforcée</li>
                  <li>Animations modernes</li>
                  <li>Onglets sur demande</li>
                  <li>
                     Pages supplémentaires (Description détaillée de vos
                     services, prestations, etc.)
                  </li>
                  <li>Articles de blog</li>
                  <li>Chatbot IA (Support client)</li>
                  <li className="list-none">
                     <br />
                  </li>{" "}
                  <li>Intégration de PayPal</li>
                  <li>Intégration de Stripe (paiement en ligne)</li>
                  <li className="list-none">
                     <br />
                  </li>{" "}
                  <li>Back Office</li>
                  <li>Gestion des articles</li>
                  <li>Gestion des stocks</li>
                  <li>Gestion des commandes</li>
                  <li>Gestion des clients</li>
                  <li>Gestion des factures</li>
                  <li>Gestion des paiements</li>
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

export default ecommerce;
