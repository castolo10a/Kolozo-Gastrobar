import OtherCard from "../../components/OtherCard/OtherCard";
import { infoMenu } from "./infoMenú";

export default function Menu () {

    return (
    <div className="md:pb-8">
        <div className="text-center pt-24 pb-8">
          <h1 className="text-black font-norse text-6xl">
            Disfruta de una experiencia de sabores única
          </h1>
        </div>
        <div>
        {infoMenu ? 
          infoMenu.map((info, index) => {
            return (
              <OtherCard
                key={index}
                pathMenu={info.pathMenu}
                textButton={info.textButton}
                image={info.image}
                name={info.name}
                description={info.description}
                index={index + 1}
                titleButton={info.titleButton}
              />
            );
          }) :
          'Loading...'
        }
        </div>
    </div>
    )
}