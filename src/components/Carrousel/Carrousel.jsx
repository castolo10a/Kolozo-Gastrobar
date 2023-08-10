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
      <div className="relative h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-5/6 bg-cover bg-center transition-opacity duration-500 ${
              index === currentBackgroundIndex ? 'opacity-100 hover:opacity-75 hover:cursor-pointer z-10 ' : 'opacity-0 z-0 pointer-events-none '
            } ${image}`}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center h-1/6 py-12 bg-gradient-to-b from-teal-100 to-teal-800">
        <h1 className="text-black md:text-4xl font-tilt font-bold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Carrousel;

