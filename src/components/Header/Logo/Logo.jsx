import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo1.jpg'

const Logo = () => {
  return (
    <div className="flex items-center w-full md:-1/4">
      <Link to='/' className="flex items-center space-x-2">
          <img className='rounded-lg w-8 h-8 md:w-12 md:h-12' src={logo} alt="logo" />
          <h2 className="font-norse text-2xl md:text-6xl">KOLOZO</h2>
      </Link>
    </div>
  )
}

export default Logo