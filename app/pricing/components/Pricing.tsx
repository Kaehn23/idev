import React from "react";
import Web from "./ui/web";
import Seo from "./ui/seo";
import Maintenance from "./ui/maintenance";
import CTA from "@/app/components/ui/CTA";

const Pricing: React.FC = () => {
   return (
      <div className="container mx-auto pt-24">
         <h1 className="text-3xl font-bold text-center mb-4 md:text-2xl sm:text-4xl text-black">
            Découvrez nos différentes{" "}
            <span className="font-bold border-b-2 border-green-300 text-green-300">
               offres
            </span>{" "}
            adaptées à vos{" "}
            <span className="font-bold border-b-2 text-orange-300 border-orange-300">
               besoins
            </span>{" "}
            .
         </h1>

         <p className="text-black text-3xl font-semibold  text-center m-4 pt-4">
            - Création de sites web -
         </p>
         <article>
            <Web />
         </article>
         <p className="text-black  text-3xl font-semibold  text-center m-4 pt-4">
            - SEO -
         </p>
         <article>
            <Seo />
         </article>
         <p className="text-black  text-3xl font-semibold  text-center m-4 pt-4">
            - Maintenance -
         </p>
         <article>
            <Maintenance />
         </article>

         <section className="w-full max-w-6xl text-black text-2xl md:text-2xl sm:text-2xl text-center mx-auto bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-80 rounded-lg shadow-lg pt-4 md:p-8">
            <p className="leading-relaxed">
               N'hésitez pas à me&nbsp;
               <span className="font-bold text-green-400">contacter&nbsp;</span>
               pour plus&nbsp;
               <span className="font-bold text-green-400">d'informations</span>
            </p>
         </section>
         <div className="flex justify-center">
            <CTA />
         </div>
      </div>
   );
};

export default Pricing;
