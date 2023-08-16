import Carrousel from "../../components/Carrousel/Carrousel";
import OtherCard from "../../components/OtherCard/OtherCard";
import kolozoGastrobar from '../../assets/images/kolozo-gastrobar.jpg';
import beerKolozo from '../../assets/images/kolozoBeer.jpg';
import espacio from '../../assets/images/espacio.jpg';
import { infoUs } from "./infoUs";

export default function Us () {
    const images = [kolozoGastrobar, beerKolozo, espacio];
    const title = 'NOSOTROS'

    return (
    <div className="bg-fondo bg-cover md:pb-8">
        <Carrousel images={images} title={title}/>
        <div>
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