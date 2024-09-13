"use client";
import React from "react";
import Accordion from "./ui/Accordion";

function FAQ() {
   return (
      <div id="faq">
         <h1 className="flex flex-items text-center">
            {" "}
            Ici, vous trouverez les questions qui reviennent fréquemment !
            N'hesitez pas à me passer un coup de téléphone pour plus
            d'informations
         </h1>
         <Accordion />
      </div>
   );
}

export default FAQ;
