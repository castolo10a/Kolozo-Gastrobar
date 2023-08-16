import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-fondo bg-contain text-center">
      <div className="border-t-2 border-black mb-4" />
      <p className="text-black mb-4 font-norse font-bold text-xl md:text-4xl">Síguenos en Redes</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.facebook.com/kolozo.gastrobar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-slate-800"
        >
          <FaFacebook size={47} />
        </a>
        <a
          href="https://www.instagram.com/kolozo_gastrobar/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-slate-800"
        >
          <FaInstagram size={50} />
        </a>
      </div>
      <p className="text-black mb-4">Kolozo Gastrobar © {new Date().getFullYear()} Todos los derechos reservados</p>
      <p className="text-black mb-0">
        <a 
          href="https://fullstack-colombia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className='hover:text-slate-800'
        >
          By Daniel Castillo
        </a>
      </p>
    </div>
  );
}
