import OtherCard from "../../components/OtherCard/OtherCard";
import {infoEvents} from "./infoEvents";

export default function Events () {

    return (
    <div>
          <div className="text-center pt-24">
          <h1 className="text-black font-norse text-6xl">
            CELEBRACIONES Y EVENTOS EMPRESARIALES
          </h1>
        </div>
        <div className="text-center pt-8">
            <h1 className="text-black font-sans font-bold md:text-2xl">Si buscas el espacio perfecto para tu evento soñado, KOLOZO es ideal para ti</h1>
        </div>
        <div>
            {infoEvents ?
                infoEvents.map((info, index) => {
                    return (
                        <OtherCard
                        key={index}
                        pathMenu={info.pathMenu}
                        image={info.image}
                        name={info.name}
                        description={info.description}
                        titleButton={info.titleButton}
                        index={index + 1}
                        />
                    );
                }) :
                'Loading...'
            }
        </div>
        <div className="text-center pb-8">
            <h1 className="text-black font-sans font-bold md:text-2xl">Transforma tu evento o celebración en una experiencia inolvidable</h1>
        </div>
    </div>
    )
}