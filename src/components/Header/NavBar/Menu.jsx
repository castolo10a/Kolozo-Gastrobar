import { Link } from "react-router-dom";

const Menu = () => {
    return (
      <div className="hidden lg:flex lg:visible lg:flex-row font-tilt font-bold text-xl">
        <Link to='/'>
          <button className="px-4 py-2 text-black cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
              Inicio
          </button>
        </Link>
        <Link to='/Menu'>
          <button className="px-4 py-2 text-black cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
               Menú
          </button>
        </Link>
        <Link to='/Bookings'>
          <button className="px-4 py-2 text-black cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
               Reservas
          </button>
        </Link>
        <Link to='/Us'>
          <button className="px-4 py-2 text-black cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
               Nosotros
          </button>
        </Link>
        <Link to='/Events'>
          <button className="px-4 py-2 text-black cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
              Eventos
          </button>
        </Link>
        <Link to='/Contact'>
          <button className="px-4 py-2 text-black cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
              Contacto
          </button>
        </Link>
      </div>
    )
  }
  
  export default Menu;