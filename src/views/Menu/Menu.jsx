import CardOther from "../../components/CardOther/CardOther";
import { infoMenu } from "./infoMenú";

export default function Menu () {

    return (
    <div className="animate-fade-down animate-duration-[3000ms] md:pb-8">
        <div className="text-center pt-24 pb-8">
          <h1 className="text-black font-norse text-6xl">
            Disfruta de una experiencia de sabores única
          </h1>
        </div>
        <div>
        {infoMenu ? 
          infoMenu.map((info, index) => {
            return (
              <CardOther
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