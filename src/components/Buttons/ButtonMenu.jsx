import React from 'react';

const ButtonMenu = ({ pathMenu, titleButton }) => {
  // const handleView = () => {
  //   window.open(pathMenu, '_blank');
  // };

  return (
    <a 
      href={pathMenu}
      rel='noreferrer'
      target='_blank'>
      <button
      className="md:text-2xl inline-flex items-center justify-center w-full md:px-4 px-6 py-2 mb-2 text-lg text-gray-200 font-sans font-bold bg-transparent rounded-md border border-gray-200 border-solid cursor-pointer transition-colors hover:bg-gray-200 hover:text-black md:w-auto md:mb-0 mx-8"
    >
      {titleButton}
    </button>
    </a>
  );
};

export default ButtonMenu;
