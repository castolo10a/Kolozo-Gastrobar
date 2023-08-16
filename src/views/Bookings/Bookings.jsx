import OtherCard from "../../components/OtherCard/OtherCard";
import { infoBookings } from "./infoBookings";

export default function Reserves () {
    const {image, name, description, pathMenu, titleButton} = infoBookings

    return (
    <div className="bg-fondo bg-cover">
        <div className="text-center pt-24">
          <h1 className="text-black font-norse text-6xl">
            RESERVAS
          </h1>
        </div>
        <div className="left-0 w-full text-center pt-8">
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