import { Link } from 'react-router-dom';

const ButtonPath = ({ path, textButton }) => {

  return (
    <Link to={path}>
        <button className="md:text-4xl inline-flex items-center justify-center w-full md:px-4 py-2 m-2 text-lg text-black font-norse bg-transparent rounded-md border border-black border-solid cursor-pointer transition-colors hover:bg-black hover:text-gray-200 md:w-auto">
                {textButton}
        </button>
    </Link>
  );
};

export default ButtonPath;