import Carrousel from "../../components/Carrousel/Carrousel";

export default function Home () {
    const images = ['bg-kolozoSitio', 'bg-bebida5', 'bg-alitas'];
    const title = 'GASTRONOMIA, MIXOLOGIA Y BUENA MÚSICA'

    return (
    <div>
        <Carrousel images={images} title={title}/>
        <h1 className="">3 Razonez para visitar  kolozo...</h1>
    </div>
    )
}