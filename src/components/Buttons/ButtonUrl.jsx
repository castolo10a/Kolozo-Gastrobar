import React from 'react';

const ButtonUrl = ({ pathMenu, titleButton }) => {
  return (
    <a 
      href={pathMenu}
      rel='noreferrer'
      target='_blank'>
      <button
        className="md:text-4xl inline-flex items-center justify-center w-full md:px-4 lg:px-6 py-2 mb-2 text-lg text-gray-200 font-norse bg-transparent rounded-md border border-gray-200 border-solid cursor-pointer transition-colors hover:bg-gray-200 hover:text-black md:w-auto md:mb-0"
      >
      {titleButton}
    </button>
    </a>
  );
};

export default ButtonUrl;
