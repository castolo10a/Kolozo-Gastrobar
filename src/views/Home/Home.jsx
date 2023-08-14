import Carrousel from "../../components/Carrousel/Carrousel";
import Card from "../../components/Card/Card";
import CardHome from "../../components/CardHome/CardHome";
import {info, title, images, infoEvent} from "./info"

export default function Home () {
    const {path, textButton, image, name, description} = infoEvent;

    return (
    <div className="bg-teal-800">
        <div>
            <Carrousel images={images} title={title}/>
        </div>
        <div className="left-0 w-full text-center md:pt-14">
            <h1 className="text-black lg:text-2xl">TRES RAZONES PARA VISITAR KOLOZO</h1>
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
        <div className="hidden md:block left-0 w-full text-center md:pt-14">
            <h1 className="text-black lg:text-2xl">CELEBRACIONES Y EVENTOS</h1>
        </div>
        <div>
            <CardHome  path={path} textButton={textButton} image={image} name={name} description={description}/>
        </div>
    </div>
    )
}