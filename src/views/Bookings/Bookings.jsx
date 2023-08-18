import CardOther from "../../components/CardOther/CardOther";
import { infoBookings } from "./infoBookings";

export default function Reserves () {
    const {image, name, description, pathMenu, titleButton} = infoBookings

    return (
    <div className="bg-fondo bg-cover pb-14">
        <div className="text-center pt-24 pb-8">
          <h1 className="text-black font-norse text-6xl">
            Preparate para vivir una experiencia Kolozal
          </h1>
        </div>
        <div>
            <CardOther
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