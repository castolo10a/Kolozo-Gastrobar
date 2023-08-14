import Carrousel from "../../components/Carrousel/Carrousel";
import OtherCard from "../../components/OtherCard/OtherCard";
import { infoUs } from "./infoUs";

export default function Us () {
    const images = ['bg-kolozoGastrobar', 'bg-beerKolozo', 'bg-espacio'];
    const title = 'NOSOTROS'

    return (
    <div>
        <Carrousel images={images} title={title}/>
        <div className="bg-teal-800">
        {infoUs ? 
          infoUs.map((info, index) => {
            return (
              <OtherCard
                key={index}
                path={info.path}
                textButton={info.textButton}
                image={info.image}
                name={info.name}
                description={info.description}
                index={index + 1}
              />
            );
          }) :
          'Loading...'
        }
        </div>
    </div>
    )
}