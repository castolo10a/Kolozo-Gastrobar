import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center w-full md:-1/4">
      <Link to='/' className="flex items-center space-x-2">
          <h2 className="font-norse text-2xl md:text-6xl">KOLOZO</h2>
      </Link>
    </div>
  )
}

export default Logo