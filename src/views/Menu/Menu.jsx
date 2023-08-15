import Carrousel from "../../components/Carrousel/Carrousel";
import OtherCard from "../../components/OtherCard/OtherCard";
import { infoMenu } from "./infoMenú";

export default function Menu () {
    const images = ['bg-tacos', 'bg-ceviche', 'bg-elotes'];
    const title = 'MENÚ'

    return (
    <div className="bg-teal-800">
        <Carrousel images={images} title={title}/>
        <div className="left-0 w-full text-center py-2">
            <h1 className="text-gray-200 font-sans font-bold md:text-2xl">Disfruta de una experiencia de sabores única</h1>
        </div>
        <div className="bg-teal-800">
        {infoMenu ? 
          infoMenu.map((info, index) => {
            return (
              <OtherCard
                key={index}
                pathMenu={info.pathMenu}
                textButton={info.textButton}
                image={info.image}
                name={info.name}
                description={info.description}
                index={index + 1}
                titleButton={info.titleButton}
              />
            );
          }) :
          'Loading...'
        }
        </div>
    </div>
    )
}