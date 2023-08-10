import Carrousel from "../../components/Carrousel/Carrousel";

export default function Us () {
    const images = ['bg-kolozoGastrobar', 'bg-beerKolozo', 'bg-espacio'];
    const title = 'NOSOTROS'

    return (
    <div>
        <Carrousel images={images} title={title}/>
    </div>
    )
}