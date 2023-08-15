import React from 'react';

const ButtonMenu = ({ pathMenu }) => {
  const handleView = () => {
    window.open(pathMenu, '_blank');
  };

  return (
    <button
      onClick={handleView}
      className="md:text-2xl inline-flex items-center justify-center w-full md:px-4 lg:px-6 py-2 mb-2 text-lg text-gray-200 font-sans font-bold bg-transparent rounded-md border border-gray-100 border-solid cursor-pointer transition-colors hover:bg-gray-200 hover:text-black md:w-auto md:mb-0"
    >
      VER MENÚ
    </button>
  );
};

export default ButtonMenu;
