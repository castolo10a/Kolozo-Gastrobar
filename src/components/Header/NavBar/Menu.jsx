import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const isActive = (url) => {
    return location.pathname === url;
  };

  return (
    <div className="hidden lg:flex lg:visible lg:flex-row font-sans font-bold text-2xl">
      <Link to="/">
        <button
          className={`px-4 py-2 ${
            isActive("/") ? 'text-black underline underline-offset-[1em] underline-black' : 'text-black'
          } cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-black transition-colors duration-300`}
        >
          Inicio
        </button>
      </Link>
      <Link to="/Menu">
        <button
          className={`px-4 py-2 ${
            isActive("/Menu") ? 'text-black underline underline-offset-[1em] underline-black' : 'text-black'
          } cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-black transition-colors duration-300`}
        >
          Menú
        </button>
      </Link>
      <Link to="/Bookings">
        <button
          className={`px-4 py-2 ${
            isActive("/Bookings") ? 'text-black underline underline-offset-[1em] underline-black' : 'text-black'
          } cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-black transition-colors duration-300`}
        >
          Reservas
        </button>
      </Link>
      <Link to="/Us">
        <button
          className={`px-4 py-2 ${
            isActive("/Us") ? 'text-black underline underline-offset-[1em] underline-black' : 'text-black'
          } cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-black transition-colors duration-300`}
        >
          Nosotros
        </button>
      </Link>
      <Link to="/Events">
        <button
          className={`px-4 py-2 ${
            isActive("/Events") ? 'text-black underline underline-offset-[1em] underline-black' : 'text-black'
          } cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-black transition-colors duration-300`}
        >
          Eventos
        </button>
      </Link>
      <Link to="/Contact">
        <button
          className={`px-4 py-2 ${
            isActive("/Contact") ? 'text-black underline underline-offset-[1em] underline-black' : 'text-black'
          } cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-black transition-colors duration-300`}
        >
          Contacto
        </button>
      </Link>
    </div>
  );
};

export default Menu;
