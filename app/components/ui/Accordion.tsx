"use client";
import React, { useState } from 'react';

// Define types for AccordionItem props
interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (event: React.SyntheticEvent<HTMLDetailsElement>) => {
    setIsOpen(event.currentTarget.open);
  };

  return (
    <details
      className="group w-full"
      open={isOpen}
      onToggle={handleToggle}
    >
      <summary
        className="flex cursor-pointer text-black list-none items-center justify-between p-4 md:p-6 text-base md:text-lg font-medium text-secondary-900 group-open:bg-green-300 transition-colors duration-300 rounded-t-lg"
      >
        <span>{title}</span>
        <div className="text-secondary-500 transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`block h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </summary>
      <div className="border-t text-black border-t-gray-100 p-4 md:p-6 text-secondary-500 min-h-[50px] text-sm md:text-base">
        {content}
      </div>
    </details>
  );
};

const Accordion: React.FC = () => {
  return (
    <div className="mx-auto max-w-full md:max-w-3xl lg:max-w-4xl p-4 md:p-6 lg:p-8">
      <div className="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <AccordionItem
          title="Combien de temps faut-il pour créer mon site ?"
          content="Les délais varient d'une à trois semaines en général, suivant la complexité du projet demandé mais aussi de votre réactivité à fournir les éléments nécessaires à la création de celui-ci!"
        />
        <AccordionItem
          title="Combien ça coûte ?"
          content="Le coût varie simplement en fonction de la complexité et des fonctionnalités demandées. Les devis sont gratuits."
        />
        <AccordionItem
          title="Comment faire pour modifier le contenu de mon site ?"
          content="Toute modification est possible pendant un délai de deux semaines après livraison du produit. Ensuite, chaque modification sera payante, au forfait, ou à la tâche. À nous d'en discuter."
        />
        <AccordionItem
          title="C'est chouette un beau site, mais à long terme ?"
          content="J'assure une maintenance offerte pendant 6 mois. Passé ce délai, nous trouverons une offre de forfait adaptée à vos besoins."
        />
        <AccordionItem
          title="Quels sont les avantages d'un site responsive ?"
          content="Un site responsive s'adapte à toutes les tailles d'écran, PC, mobile, tablettes. Il offre une expérience utilisateur optimale et permet d'atteindre un public plus large ; d'améliorer le référencement, et de renforcer votre image de marque."
        />
        <AccordionItem
          title="Le site est-il optimisé pour les moteurs de recherche ?"
          content="En effet, mes sites sont parfaitement optimisés pour augmenter le SEO naturel de Google."
        />
        <AccordionItem
          title="Pourquoi un site codé et pas un CMS comme WordPress ?"
          content="Un site codé sera toujours plus fiable, plus rapide et plus performant. Personne n'a envie d'attendre qu'un site se charge. Ici, on fait du sur-mesure efficace!"
        />
        <AccordionItem
          title="Je fais comment en cas de problèmes sur le site ?"
          content="Vous me contactez, par mail ou téléphone, je suis disponible 7j/7 pour assurer la maintenance. Puis on trouve une solution."
        />
      </div>
    </div>
  );
};

export default Accordion;
