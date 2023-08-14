import Carrousel from "../../components/Carrousel/Carrousel";
import Card from "../../components/Card/Card";
import info from "./info"

export default function Home () {
    const images = ['bg-kolozoSitio', 'bg-bebida5', 'bg-alitas'];
    const title = 'GASTRONOMIA, MIXOLOGIA Y BUENA MÚSICA';

    return (
    <div className="bg-teal-800">
        <div>
            <Carrousel images={images} title={title}/>
        </div>
        <div className="left-0 w-full text-center md:pt-14">
            <h1 className="text-black lg:text-2xl">Tres Razonez para visitar Kolozo</h1>
        </div>
        <div className="flex flex-wrap">
            {info.map((infoCard, key) => {
                return <Card
                key={key}
                path={infoCard.path}
                textButton={infoCard.textButton}
                image={infoCard.image}
                name={infoCard.name}
                />
            })}
        </div>
    </div>
    )
}