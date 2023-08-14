import ButtonPath from "../Buttons/ButtonPath";

export default function Card({ path, textButton, image, name }) {
  return (
    <div className="w-full md:w-1/3 p-4 md:inline-block">
      <div className={`relative bg-cover bg-center h-80 md:h-96 ${image}`}>
        <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 bg-opacity-40 bg-black">
          <h1 className="text-lg md:text-xl text-gray-100 font-bold mb-2 md:mb-0 md:text-center">
            {name}
          </h1>
          <div className="flex justify-center items-center">
            <ButtonPath path={path} textButton={textButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
