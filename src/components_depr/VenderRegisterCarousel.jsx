import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const VenderRegisterCarousel = () => {
  const images = [
    '../src/assets/images/Images/r01.png',
    '../src/assets/images/Images/r02.png',
    '../src/assets/images/Images/r03.png',
    '../src/assets/images/Images/r04.png',
    '../src/assets/images/Images/r05.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel absolute w-full h-full top-0 left-0 z-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item absolute w-full h-full ${index === currentIndex ? 'block' : 'hidden'}`}
        >
          <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default VenderRegisterCarousel;
