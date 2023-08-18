import { Link } from 'react-router-dom';

const ButtonCardHome = ({ path, textButton }) => {

  return (
    <Link to={path}>
        <button className="md:text-4xl inline-flex items-center justify-center w-full md:px-4 py-2 m-2 text-lg text-gray-200 font-norse bg-transparent rounded-md border border-black border-solid cursor-pointer transition-colors hover:bg-fondo hover:text-black md:w-auto">
                {textButton}
        </button>
    </Link>
  );
};

export default ButtonCardHome;