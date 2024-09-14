import React, { useState, useEffect }  from 'react';
import Slider from 'react-slick';
import CardComponent, { CardProps } from './CardComponent';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface CardCarouselProps {
  cards: CardProps[];
}
interface ArrowProps {
  onClick: () => void;
}


const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [isMobile, setIsMobile] = useState(false); // Default to false

   useEffect(() => {
      // Update the state based on the initial window size
      setIsMobile(window.innerWidth < 640);

      // Handle window resize
      const handleResize = () => {
         setIsMobile(window.innerWidth < 640);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);


  // Ugly ->
  //  function SampleNextArrow({ onClick }: ArrowProps) {
  //   return (
  //     <HiOutlineChevronRight
  //       className="text-white rounded-xl shadow-lg bg-[#AF9E6B] absolute right-20 top-1/2 -translate-y-1/2 z-10 hover:scale-125 ease-in duration-300"
  //       size={30}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // Ugly ->
  // function SamplePrevArrow({ onClick }: ArrowProps) {
  //   return (
  //     <HiOutlineChevronLeft
  //       className="text-white rounded-xl shadow-lg bg-[#AF9E6B] absolute left-20 top-1/2 -translate-y-1/2 z-10 hover:scale-125 ease-in duration-300"
  //       size={30}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite looping
    speed: 500, // Animation speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll when navigating
    autoplay: isMobile, // Set to true if you want autoplay
    autoplaySpeed: 3000, // Time between auto scrolls (in milliseconds)
    cssEase: "linear",
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
         },
      },
      {
         breakpoint: 640,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
         },
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         },
      },
   ],
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-12 max-w-[1240px]">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2">
            <CardComponent {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
