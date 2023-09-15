import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const MenuResponsive = () => {
  const [oculto, setOculto] = useState(true);

  const action = () => {
    setOculto(!oculto)
  };

  return (
    <nav className="lg:hidden flex justify-center">
      <button 
        onClick={action}
        type="button"
        className="text-black"
      >
        {oculto ? <AiOutlineMenu size={34} /> : <AiOutlineClose size={34} />}
      </button>
      <div
        className={`${
          oculto ? "hidden" : "mt-12 absolute right-0 z-[1] min-w-full pb-12 xs:px-[40vw] lg:flex lg:visible lg:flex-row font-sans font-bold text-lg"
        }`}
        id="navbar-hamburger"
      >
        <ul className="text-center bg-fondo">
            <li onClick={action} className="py-2 text-black cursor-pointer">
            <Link to='/'>
              Inicio
            </Link>
            </li>
          <Link to='/Menu'>
            <li onClick={action} className="py-2 text-black cursor-pointer">
              Menú
            </li>
          </Link>
          <Link to='/Bookings'>
            <li onClick={action} className="py-2 text-black cursor-pointer">
              Reservas
            </li>
          </Link>
          <Link to='/Us'>
            <li onClick={action} className="py-2 text-black cursor-pointer">
              Nosotros
            </li>
          </Link>
          <Link to='/Events'>
            <li onClick={action} className="py-2 text-black cursor-pointer">
              Eventos
            </li>
          </Link>
          <Link to='/Contact'>
            <li onClick={action} className="py-2 text-black cursor-pointer">
              Contacto
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default MenuResponsive