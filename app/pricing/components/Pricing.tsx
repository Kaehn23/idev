import React from "react";
import Web from "./ui/web";
import Seo from "./ui/seo";
import Maintenance from "./ui/maintenance";

const Pricing: React.FC = () => {
   return (
      <div className="container mx-auto pt-24">
         <h1 className="text-3xl font-bold text-center mb-4 md:text-2xl sm:text-4xl text-black">
         Découvrez nos différentes{" "}
            <span className="font-bold border-b-2 border-green-300 text-green-300">offres</span>{" "}
            adaptées à vos{" "}
            <span className="font-bold border-b-2 text-orange-300 border-orange-300">
               besoins
            </span>{" "}
            .
         </h1>
        
         <p className="text-black m-4 text-3xl font-semibold text-center">- Création de sites web -</p>
         <article>
            <Web />
         </article>
      </div>
   );
};

export default Pricing;
