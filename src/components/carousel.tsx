// Carousel.tsx
import React, { useState, ReactNode } from 'react';

type CarouselProps = {
  children: ReactNode[];
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      {children[currentIndex]}
      <button className="absolute top-1/2 left-0" onClick={handlePrev}>Prev</button>
      <button className="absolute top-1/2 right-0" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
