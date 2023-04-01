import { FC } from "react";
import BtnReadMore from "../BtnReadMore";
import AboutTHeSea from "../../assets/Above-the-sea.webp";

const AboveTheSea: FC = () => {
  return (
    <section className="flex flex-col items-center gap-8 px-5 m-auto text-gray-300 md:gap-16 max-w-screen-2xl xl:gap-36 lg:flex-row md:px-18 lg:items-start md:px-16 lg:px-0 lg:pr-32">
      <div className="relative overflow-hidden cursor-pointer lg:w-11/12 xl:w-1/2 lg:pt-5 xl:pt-0">
        <img
          src={AboutTHeSea}
          alt="Above the Sea"
          loading="lazy"
          className="object-cover w-full h-auto aspect-square"
        />
      </div>

      <article className="m-auto space-y-8 text-center md:space-y-10 lg:max-w-md lg:text-start lg:m-0">
        <h2 className="text-4xl font-bold tracking-wide md:text-6xl text-slate-50">
          Above
          <br />
          The Sea
        </h2>
        <q className="block font-serif italic md:max-w-md md:m-auto">
          &nbsp; Eros reque munere ul quo, commado ullamcorper ad cam. His
          aeterno scriplorem ei, sea ut epicuri lincidunt. &nbsp;
        </q>

        <div className="space-y-2 text-justify md:space-y-4 lg:max-w-xs lg:text-start">
          <p>
            Lorem ipsum dolor sit, amet consecter adipisicing elit. Fuga
            consequuntur debitis magni naum, maxime modi ab a laudantium autem
            rem adipisci quae deserunt cum voluptas fugiat delectus ea eveniet
            placeat sequi cupiditate consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            exercitationem sit iste numquam reprehen veritatis dicta consectetur
            ut temporibus. Suscipit eum vero repellendus qui ut voluptatibus
            obcaecati sit alias fugiat cupiditate. Quasi nemo ipsam enim dolorem
            voluptas! Minima earum odio iste.
          </p>
        </div>

        <BtnReadMore />
      </article>
    </section>
  );
};

export default AboveTheSea;
