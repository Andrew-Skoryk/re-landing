import { FC } from "react";
import BtnReadMore from "../BtnReadMore";
import AboutTHeSea from "../../assets/Above-the-sea.jpg";

const AboveTheSea: FC = () => {
  return (
    <section className="flex gap-6 m-auto text-gray-300 md:gap-16 max-w-screen-2xl lg:gap-28">
      <div className="relative overflow-hidden md:w-2/5">
        <img
          src={AboutTHeSea}
          alt="Above the Sea"
          className="object-cover w-full h-auto aspect-square"
        />
      </div>

      <article className="space-y-8 md:space-y-12 lg:max-w-md">
        <h2 className="text-4xl font-bold tracking-wide md:text-6xl text-slate-50">
          Above
          <br />
          The Sea
        </h2>
        <q className="block italic">
          &nbsp; Eros reque munere ul quo, commado ullamcorper ad cam. His
          aeterno scriplorem ci, sea ut epicuri lincidunt. &nbsp;
        </q>

        <div className="space-y-4 md:space-y-6 lg:max-w-sm">
          <p>
            Lorem ipsum dolor sit, amet consecter adipisicing elit. Fuga
            consequuntur debitis magni ipsam inaum, maxime modi ab a laudantium
            autem rem adipisci quae deserunt cum voluptas fugiat delectus ea
            eveniet placeat sequi cupiditate consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            exercitationem sit iste numquam reprehen veritatis dicta consectetur
            ut temporibus, recusandae omnis consequuntur aliquam. Suscipit eum
            vero qui ut voluptatibus obcaecati sit alias fugiat cupiditate.
            Quasi nemo ipsam enim dolorem voluptas! Minima earum repellendus
            odio dolorum inventore, velit iste. Dolor sit amet consectetur
            adipisicing
          </p>
        </div>

        <BtnReadMore />
      </article>
    </section>
  );
};

export default AboveTheSea;
