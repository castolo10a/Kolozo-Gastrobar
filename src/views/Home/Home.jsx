import Carrousel from "../../components/Carrousel/Carrousel";
import Card from "../../components/Card/Card";
import CardHome from "../../components/CardHome/CardHome";
import Galery from "../../components/Galery/Galery";
import {info, title, images, infoEvent} from "./info";
import infoSlide from './infoSlide';


export default function Home () {
    const {path, textButton, image, name, description} = infoEvent;

    return (
    <div className="bg-teal-800">
        <div>
            <Carrousel images={images} title={title}/>
        </div>
        <div className="left-0 w-full text-center md:pt-14">
            <h1 className="text-gray-200 font-sans font-bold md:text-2xl">TRES RAZONES PARA VISITAR KOLOZO</h1>
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
            <h1 className="text-gray-200 font-sans font-bold md:text-2xl">CELEBRACIONES Y EVENTOS</h1>
        </div>
        <div>
            <CardHome  path={path} textButton={textButton} image={image} name={name} description={description}/>
        </div>
        <div className="left-0 w-full text-center md:pt-14">
            <h1 className="text-gray-200 font-sans font-bold md:text-2xl">VISITANOS</h1>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-column md:items-center md:justify-center">
            <div className="w-full md:w-3/5 p-4 text-center md:text-center">
                <h1 className="text-gray-200 font-sans font-bold md:text-2xl">LA DORADA - CALDAS</h1>
                <h1 className="text-gray-200 font-sans font-bold md:text-xl">B. CENTRO</h1>
                <h1 className="text-gray-200 font-sans font-bold md:text-xl">CALLE 16 # 1-15</h1>
            </div>
            <div className="w-full md:w-2/4 h-[50vw] lg:h-screen max-h-screen">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.748646198384!2d-74.66517302552445!3d5.455069334657478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40df6e680f47f1%3A0xb3ad1b65c2e6b98a!2sKOLOZO!5e0!3m2!1ses-419!2sco!4v1691975834487!5m2!1ses-419!2sco"
                className="w-full h-full px-4"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de la ubicación de KOLOZO"
                ></iframe>
            </div>
        </div>
        <div className="left-0 w-full text-center md:pt-14">
            <h1 className="text-gray-200 font-sans font-bold md:text-2xl">GALERIA</h1>
        </div>
        <div className="md:p-4">
            {infoSlide ? 
                <Galery infoSlide={infoSlide}/> : 'Loading...'
            }
        </div>
    </div>
    )
}