import OtherCard from "../../components/OtherCard/OtherCard";
import { infoUs } from "./infoUs";

export default function Us () {

    return (
    <div className="bg-fondo bg-cover md:pb-8">
        <div className="text-center pt-24">
          <h1 className="text-black font-norse text-6xl">
            NOSOTROS
          </h1>
        </div>
        <div>
        {infoUs ? 
          infoUs.map((info, index) => {
            return (
              <OtherCard
                key={index}
                path={info.path}
                textButton={info.textButton}
                image={info.image}
                name={info.name}
                description={info.description}
                index={index + 1}
              />
            );
          }) :
          'Loading...'
        }
        </div>
    </div>
    )
}