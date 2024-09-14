// CardCarousel.tsx
import React from 'react';
import { motion } from 'framer-motion';
import CardComponent, { CardProps } from './CardComponent';

interface CardCarouselProps {
  cards: CardProps[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [cardsPerSlide, setCardsPerSlide] = React.useState(3);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };

    window.addEventListener('resize', updateCardsPerSlide);
    updateCardsPerSlide();

    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  // Dupliquer les cartes pour la boucle infinie
  const duplicatedCards = [
    ...cards.slice(-cardsPerSlide),
    ...cards,
    ...cards.slice(0, cardsPerSlide),
  ];

  const totalCards = duplicatedCards.length;
  const cardWidthPercentage = 100 / cardsPerSlide;
  const totalWidthPercentage = (totalCards / cardsPerSlide) * 100;

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Réinitialiser l'index pour la boucle infinie
  React.useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(cards.length);
      }, 300);
    } else if (currentIndex === cards.length + cardsPerSlide) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(cardsPerSlide);
      }, 300);
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentIndex, cards.length, cardsPerSlide]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: -currentIndex * cardWidthPercentage + '%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ width: `${totalWidthPercentage}%` }}
        >
          {duplicatedCards.map((card, index) => (
            <div
              key={index}
              className={`px-2 flex-shrink-0`}
              style={{ width: `${cardWidthPercentage}%` }}
            >
              <CardComponent {...card} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Boutons de Navigation en Bas */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrev}
          className="mx-2 p-2 text-gray-700 bg-white rounded-full shadow hover:bg-gray-100"
          disabled={isTransitioning}
        >
          {/* Icône Flèche Gauche */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="mx-2 p-2 text-gray-700 bg-white rounded-full shadow hover:bg-gray-100"
          disabled={isTransitioning}
        >
          {/* Icône Flèche Droite */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
