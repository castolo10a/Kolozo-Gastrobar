import Carrousel from "../../components/Carrousel/Carrousel";
import OtherCard from "../../components/OtherCard/OtherCard";
import { infoBookings } from "./infoBookings";
import bebida2 from '../../assets/images/bebida2.png';
import lomo from '../../assets/images/lomo.jpeg';
import hamburguesa from '../../assets/images/Hamburguesa.png';

export default function Reserves () {
    const images = [bebida2, lomo, hamburguesa];
    const title = 'RESERVAS';
    const {image, name, description, pathMenu, titleButton} = infoBookings

    return (
    <div className="bg-fondo bg-cover">
        <Carrousel images={images} title={title}/>
        <div className="left-0 w-full text-center py-2">
            <h1 className="text-black font-sans font-bold md:text-2xl">Preparate para vivir una experiencia Kolozal</h1>
        </div>
        <div>
            <OtherCard
                image={image}
                name={name}
                description={description}
                pathMenu={pathMenu}
                titleButton={titleButton}
            />
        </div>
    </div>
    )
}