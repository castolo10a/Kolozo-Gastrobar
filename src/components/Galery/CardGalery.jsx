import React from "react";

const CardGalery = ({ image, title }) => {
  return (
    <div className="w-full md:w-1/4 p-4">
      <div className="relative h-80 md:h-96">
        <div className={`bg-cover bg-center h-3/4 ${image}`}></div>
        <div className="absolute flex flex-col justify-between p-4 md:p-6 bottom-0 left-0 w-full text-center h-1/4 bg-opacity-80 bg-teal-800">
          <h2 className="text-lg md:text-xl text-gray-200 font-sans font-bold mb-2 md:mb-0 md:text-center">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardGalery;
