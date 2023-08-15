import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
      <div className="bg-teal-800 text-center">
        <div className="border-t-2 border-gray-300 mb-4" />
        <p className="text-gray-200 mb-4 font-norse font bold lg:text-4xl">Siguenos en Redes</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://www.facebook.com/kolozo.gastrobar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300">
            <FaFacebook size={50} />
          </a>
          <a
            href="https://www.instagram.com/kolozo_gastrobar/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300">
            <FaInstagram size={50} />
          </a>
        </div>
    </div>
  );
}
