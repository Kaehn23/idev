import React from "react";
import Web from "./ui/web";
import Seo from "./ui/seo";
import Maintenance from "./ui/maintenance";

const Pricing: React.FC = () => {
   return (
      <div className="container mx-auto pt-24">
         <h1 className="text-3xl font-bold text-center mb-4 md:text-2xl sm:text-4xl text-black">
            Nos Tarifs
         </h1>
         <h2 className="text-black">
            Découvrez nos différentes{" "}
            <span className="font-bold border-b-2 border-black text-green-300">offres</span>{" "}
            adaptées à vos{" "}
            <span className="font-bold border-b-2 border-orange-300">
               besoins
            </span>{" "}
            .
         </h2>
         <p className="text-black m-4 text-2xl font-semibold ">Création de sites web</p>
         <article>
            <Web />
         </article>
      </div>
   );
};

export default Pricing;
