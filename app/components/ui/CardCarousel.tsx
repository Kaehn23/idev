import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import CardComponent, { CardProps } from './CardComponent';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CardCarouselProps {
  cards: CardProps[];
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      aria-label="Next Slide"
      className={`hidden sm:block bg-green-300 text-black rounded-xl shadow-lg absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-125 ease-in duration-300 cursor-pointer  items-center justify-center p-2`}
      style={{ ...style, width: '40px', height: '40px' }}
      onClick={onClick}
    >
      <HiOutlineChevronRight size={24} />
    </div>
  );
}

const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      aria-label="Previous Slide"
      className={`hidden sm:block bg-green-300 text-black rounded-xl shadow-lg absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-125 ease-in duration-300 cursor-pointer items-center justify-center p-2`}
      style={{ ...style, width: '40px', height: '40px' }}
      onClick={onClick}
    >
      <HiOutlineChevronLeft size={24} />
    </div>
  );
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: isMobile,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: isMobile ? undefined : <SampleNextArrow />,
    prevArrow: isMobile ? undefined : <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: isMobile ? 1 : 3,
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
    <div className="w-full mx-auto px-4 sm:px-6 md:px-12 max-w-[1240px] relative overflow-visible">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-8">
            <CardComponent {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
