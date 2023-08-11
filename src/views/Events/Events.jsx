import Carrousel from "../../components/Carrousel/Carrousel";

export default function Events () {
    const images = ['bg-cumple', 'bg-cumpleDec', 'bg-deco'];
    const title = 'EVENTOS';

    return (
    <div>
        <Carrousel images={images} title={title}/>
    </div>
    )
}