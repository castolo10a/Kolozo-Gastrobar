// import { FaFacebook, FaInstagram } from 'react-icons/fa';

// export default function Footer() {
//   return (
//       <div className="bg-teal-800 text-center">
//         <div className="border-t-2 border-gray-300 mb-4" />
//         <p className="text-gray-200 mb-4 font-norse font bold text-xl md:text-2xl">Siguenos en Redes</p>
//         <div className="flex justify-center space-x-4">
//           <a 
//             href="https://www.facebook.com/kolozo.gastrobar"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300">
//             <FaFacebook size={47} />
//           </a>
//           <a
//             href="https://www.instagram.com/kolozo_gastrobar/?hl=es"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300">
//             <FaInstagram size={50} />
//           </a>
//         </div>
//         <div className='pt-4'>
//           <h1 className='font-sans md:text-base text-base text-gray-200'>© Kolozo Gastrobar Todos los Derechos Reservados</h1>
//         </div>
//         <div className='pt-4'>
//           <a 
//           href="https://fullstack-colombia.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           >
//             <h1 className='font-sans md:text-base text-base text-gray-200'>💻By Daniel Castillo💻</h1>
//           </a>
//         </div>
//     </div>
//   );
// }
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-teal-800 text-center py-6">
      <div className="border-t-2 border-gray-300 mb-4" />
      <p className="text-gray-200 mb-4 font-norse font-bold text-xl md:text-2xl">Síguenos en Redes</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.facebook.com/kolozo.gastrobar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-black"
        >
          <FaFacebook size={47} />
        </a>
        <a
          href="https://www.instagram.com/kolozo_gastrobar/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-black"
        >
          <FaInstagram size={50} />
        </a>
      </div>
      <p className="text-gray-200 mb-4">Kolozo Gastrobar © {new Date().getFullYear()} Todos los derechos reservados</p>
      <p className="text-gray-200 mb-1">
        <a 
          href="https://fullstack-colombia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className='hover:text-black'
        >
          💻 By Daniel Castillo 💻
        </a>
      </p>
    </div>
  );
}
