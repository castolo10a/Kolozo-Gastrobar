import ButtonPath from "../Buttons/ButtonPath";

export default function otherCard({ path, textButton, image, name, description, index }) {
  console.log(index);
  return (
    <div className="md:flex-row flex-col w-90 md:w-5/6 mx-auto p-4">
      <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} `}>
        <div className={`relative bg-cover bg-center h-80 md:h-96 md:w-4/5 ${image}`}>
        </div>
        <div className="relative bg-transparent md:w-2/5 md:p-6 md:pl-8 flex flex-col justify-between">
          <div>
            <h1 className="text-lg md:text-xl text-gray-100 font-sans font-bold mb-2 md:mb-4 md:text-left">
              {name}
            </h1>
            <p className="font-sans text-gray-200 md:text-left">{description}</p>
          </div>
          <div className={`${!path || !textButton ? 'hidden md:block' : ''}flex justify-center items-end mt-4`}>
            <ButtonPath path={path} textButton={textButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
