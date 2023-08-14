import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardGalery from "./CardGalery";

const Galery = ({ infoSlide }) => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const itemsPerRow = window.innerWidth >= 768 ? 4 : 1;

  const nextImage = () => {
    setCurrentBackgroundIndex((prevIndex) =>
      (prevIndex + itemsPerRow) % infoSlide.length
    );
  };

  const prevImage = () => {
    setCurrentBackgroundIndex((prevIndex) =>
      (prevIndex - itemsPerRow + infoSlide.length) % infoSlide.length
    );
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <button
          className="text-3xl text-white bg-black p-2 rounded-full opacity-50 hover:opacity-75 focus:outline-none"
          onClick={prevImage}
        >
          <FaChevronLeft />
        </button>
        <div className="flex w-full">
          {infoSlide.map((image, index) => (
            index >= currentBackgroundIndex &&
            index < currentBackgroundIndex + itemsPerRow && (
              <CardGalery
                key={index}
                image={image.image}
                title={image.title}
              />
            )
          ))}
        </div>
        <button
          className="text-3xl text-white bg-black p-2 rounded-full opacity-50 hover:opacity-75 focus:outline-none"
          onClick={nextImage}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Galery;
