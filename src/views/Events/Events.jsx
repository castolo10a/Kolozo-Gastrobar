import Carrousel from "../../components/Carrousel/Carrousel";
import OtherCard from "../../components/OtherCard/OtherCard";
import {infoEvents} from "./infoEvents";
import decoracion2 from '../../assets/images/decoracion.jpg';
import cumpleDec from '../../assets/images/cumpleañosDec.jpg';
import deco from '../../assets/images/deco.jpg'

export default function Events () {
    const images = [decoracion2, cumpleDec, deco];
    const title = 'CELEBRACIONES Y EVENTOS EMPRESARIALES';
    const {pathMenu, image, name, description, titleButton} = infoEvents;

    return (
    <div className="bg-fondo bg-cover">
        <Carrousel images={images} title={title}/>
        <div className="left-0 w-full text-center py-2">
            <h1 className="text-black font-sans font-bold md:text-2xl">Si buscas el espacio perfecto para tu evento soñado, KOLOZO es ideal para ti</h1>
        </div>
        <div>
        <OtherCard
            pathMenu={pathMenu}
            image={image}
            name={name}
            description={description}
            titleButton={titleButton}
        />
        </div>
        <div className="left-0 w-full text-center py-2">
            <h1 className="text-black font-sans font-bold md:text-2xl">Transforma tu evento o celebración en una experiencia inolvidable</h1>
        </div>
    </div>
    )
}