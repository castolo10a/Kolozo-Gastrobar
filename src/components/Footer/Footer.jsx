import React from 'react';
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import logo from '../../assets/images/logo1.jpg';

export default function Footer() {
  return (
    <div className="bg-fondo bg-contain text-center">
      <div className="flex justify-center items-center space-x-4 mb-4">
        <div className="border-t-2 border-black flex-grow"></div>
        <div className="w-14">
          <img src={logo} alt="Logo" className="max-w-full h-auto" />
        </div>
        <div className="border-t-2 border-black flex-grow"></div>
      </div>
      <p className="text-black mb-4 font-norse font-bold text-xl md:text-4xl">Síguenos en Redes</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.facebook.com/kolozo.gastrobar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-emerald-700"
        >
          <FaFacebook size={47} />
        </a>
        <a
          href="https://www.instagram.com/kolozo_gastrobar/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-emerald-700"
        >
          <FaInstagram size={50} />
        </a>
        <a
          href="https://www.tripadvisor.co/Restaurant_Review-g4446037-d23897576-Reviews-Kolozo_Gastrobar-La_Dorada_Caldas_Department.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-emerald-700"
        >
          <FaTripadvisor size={50} />
        </a>
      </div>
      <p className="text-black mb-4">Kolozo Gastrobar © {new Date().getFullYear()} Todos los derechos reservados</p>
      <p className="text-black mb-0">
        <a 
          href="https://fullstack-colombia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className='hover:text-emerald-700'
        >
          By Daniel Castillo
        </a>
      </p>
    </div>
  );
}
