import Carrousel from "../../components/Carrousel/Carrousel";
import OtherCard from "../../components/OtherCard/OtherCard";
import { infoBookings } from "./infoBookings";

export default function Reserves () {
    const images = ['bg-bebida2', 'bg-lomo', 'bg-hamburguesa'];
    const title = 'RESERVAS';
    const {image, name, description, pathMenu, titleButton} = infoBookings

    return (
    <div className="bg-teal-800">
        <Carrousel images={images} title={title}/>
        <div className="left-0 w-full text-center py-2">
            <h1 className="text-gray-200 font-sans font-bold md:text-2xl">Preparate para vivir una experiencia Kolozal</h1>
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