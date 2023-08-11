import { Link } from 'react-router-dom';

const ButtonPath = ({ path, textButton }) => {

  return (
    <Link to={path}>
        <button className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-gray-200 font-bold bg-transparent rounded-md border border-gray-100 border-solid cursor-pointer transition-colors hover:bg-gray-200 hover:text-black md:w-auto md:mb-0">
                {textButton}
        </button>
    </Link>
  );
};

export default ButtonPath;