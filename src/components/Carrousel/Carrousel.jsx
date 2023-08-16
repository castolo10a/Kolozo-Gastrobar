import React, { useState, useEffect } from 'react';

const Carrousel = ({ images, title }) => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-5/6 transition-all duration-500 ${
              index === currentBackgroundIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: 'center bottom',
              backgroundSize: 'cover',
              transform: index === currentBackgroundIndex ? 'scale(1.05)' : 'scale(1)',
              filter: index === currentBackgroundIndex ? 'blur(15px)' : 'blur(0)',
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center h-1/6 py-12">
        <h1 className="text-black font-norse text-2xl sm:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Carrousel;
