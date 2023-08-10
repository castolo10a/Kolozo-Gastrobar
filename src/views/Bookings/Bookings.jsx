import Carrousel from "../../components/Carrousel/Carrousel";

export default function Reserves () {
    const images = ['bg-bebida2', 'bg-lomo', 'bg-hamburguesa'];
    const title = 'RESERVAS'

    return (
    <div>
        <Carrousel images={images} title={title}/>
    </div>
    )
}