import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const VenderRegisterCarousel = () => {
  const images = [
    '../src/assets/images/Images/06.png',
    '../src/assets/images/Images/05.png',
    '../src/assets/images/Images/04.png',
    '../src/assets/images/Images/03.png',
    '../src/assets/images/Images/02.png',
    '../src/assets/images/Images/01.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel w-full h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item w-full ${index === currentIndex ? 'block' : 'hidden'}`}
        >
          <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default VenderRegisterCarousel;
