import Carrousel from "../../components/Carrousel/Carrousel";

export default function Contact () {
    const images = ['bg-emperador', 'bg-kolozoGastrobar', 'bg-beerKolozo'];
    const title = 'CONTACTO'

    return (
    <div>
        <Carrousel images={images} title={title}/>
    </div>
    )
}