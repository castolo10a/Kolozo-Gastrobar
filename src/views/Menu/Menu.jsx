import Carrousel from "../../components/Carrousel/Carrousel";

export default function Menu () {
    const images = ['bg-tacos', 'bg-ceviche', 'bg-elotes'];
    const title = 'MENÚ'

    return (
    <div>
        <Carrousel images={images} title={title}/>
    </div>
    )
}