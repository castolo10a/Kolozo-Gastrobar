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
          className="text-black-200"
          size={34}
          onClick={action}
        />
      </button>
      <div
        hidden={oculto}
        className="absolute right-0 z-[1] min-w-full py-12 xs:px-[40vw] lg:flex lg:visible lg:flex-row font-tilt font-bold text-lg hover:bg-gray-200"
      >
        <ul className="text-center bg-teal-800">
          <Link to='/'>
            <li onClick={action} className="py-2 text-black cursor-pointer hover:bg-gray-200">
              Inicio
            </li>
          </Link>
          <Link to='/Menu'>
            <li onClick={action} className="py-2 text-black cursor-pointer hover:bg-gray-200">
              Menú
            </li>
          </Link>
          <Link to='/Bookings'>
            <li onClick={action} className="py-2 text-black cursor-pointer hover:bg-gray-200">
              Reservas
            </li>
          </Link>
          <Link to='/Us'>
            <li onClick={action} className="py-2 text-black cursor-pointer hover:bg-gray-200">
              Nosotros
            </li>
          </Link>
          <Link to='/Events'>
            <li onClick={action} className="py-2 text-black cursor-pointer hover:bg-gray-200">
              Eventos
            </li>
          </Link>
          <Link to='/Contact'>
            <li onClick={action} className="py-2 text-black cursor-pointer hover:bg-gray-200">
              Contacto
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default MenuResponsive