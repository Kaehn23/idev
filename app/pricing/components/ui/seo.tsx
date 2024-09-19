import React from "react";

function Seo() {
   return (
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="flex justify-center col-span-1 md:col-span-3">
            <div className="border rounded-lg p-6 shadow-lg">
               <h2 className="text-2xl font-semibold mb-2 text-black text-center">
                  Optimisation Pack
               </h2>
               <p className="text-xl mb-4 text-black font-semibold">--- €</p>
               <p className="text-black pb-4">
                  Definissons vos besoins ensemble
               </p>
               <div className="w-full border-t border-gray-500 my-4"></div>
               <ul className="mb-4 text-black list-disc list-inside py-4">
                  <li>Audit SEO</li>
                  <li>Solutions personnalisables sur devis</li>
               </ul>
               <a
                  href="https://cal.com/j-idev/30min?user=j-idev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-300 text-black rounded hover:bg-green-600 relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-lg shadow-lg"
               >
                  Rendez-vous
               </a>
            </div>
         </div>
      </div>
   );
}

export default Seo;
