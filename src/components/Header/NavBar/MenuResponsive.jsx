import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const MenuResponsive = () => {
  const [oculto, setOculto] = useState(true);

  const action = () => {
    oculto ? setOculto(false) : setOculto(true)
  }

  return (
    <div className="lg:hidden flex justify-center">
      <button aria-label="menu">
        <AiOutlineMenu
          className="text-black"
          size={34}
          onClick={action}
        />
      </button>
      <div
        hidden={oculto}
        className="absolute right-0 z-[1] min-w-full py-12 xs:px-[40vw] lg:flex lg:visible lg:flex-row font-sans font-bold text-lg"
      >
        <ul className="text-center bg-fondo">
          <Link to='/'>
            <li onClick={action} className="py-2 text-black cursor-pointer">
              Inicio
            </li>
          </Link>
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
    </div>
  )
}

export default MenuResponsive