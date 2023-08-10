import Carrousel from "../../components/Carrousel/Carrousel";

export default function Contact () {
    const images = ['bg-emperador', 'bg-kolozoGastrobar', 'bg-piñaColada'];
    const title = 'CONTACTO'

    return (
    <div>
        <Carrousel images={images} title={title}/>
    </div>
    )
}