import { FC } from "react";
import AboutTHeSea from "../../assets/Above-the-sea.jpg";
import BtnReadMore from "../BtnReadMore";
import SubscribeEmail from "../SubscribeEmail";
import Paragraph from "../UI/Paragraph/Paragraph";

const MainSection: FC = () => {
  return (
    <main className="space-y-24 bg-stone-800">
      <section className="relative flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold text-center text-white md:text-6xl">
            Welcome to <span className="text-yellow-300">trppd_</span>
          </h1>
          <p className="text-center text-gray-400 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quidem
            exercitationem voluptatum quibusdam quos quas. Quisquam, quae
            voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
          </p>
          <button className="px-10 py-2 font-extrabold bg-yellow-300 text-slate-800 rounded-3xl">
            Read more
          </button>
        </div>
      </section>
      <section className="flex gap-6 pr-2 md:gap-16 md:pr-12 text-slate-300">
        <img
          src={AboutTHeSea}
          alt="Above the Sea"
          className="w-1/3 md:w-1/2 h-fit"
        />

        <div className="space-y-4 md:space-y-12">
          <h2 className="text-4xl font-bold tracking-wide text-slate-50">
            Above
            <br />
            The Sea
          </h2>
          <h3 className="italic mb">
            &rdquo; Eros reque munere ul quo, commado ullamcorper ad cam. His
            aeterno scriplorem ci, sea ut epicuri lincidunt. &rdquo;
          </h3>

          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            consequuntur debitis magni ipsam in, maxime modi ab a laudantium
            autem rem adipisci quae deserunt cum voluptas fugiat delectus ea
            eveniet placeat sequi consectetur. Facere debitis consequuntur,
            blanditiis cumque aliquam enim aut voluptatum a repellat, velit illo
            consectetur aperiam reiciendis facilis?
          </Paragraph>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            exercitationem sit iste numquam reprehenderit veritatis dicta
            consectetur ut temporibus, recusandae omnis consequuntur aliquam.
            Suscipit eum vero qui ut voluptatibus obcaecati sit alias fugiat
            cupiditate. Quasi nemo ipsam enim dolorem voluptas! Minima earum
            quis est dolor possimus perferendis cum repellat qui doloremque,
            repellendus cupiditate odio dolorum inventore, velit iste. Aliquid
            earum minus sequi ab! Pariatur quod alias possimus. Hic ad ex
            excepturi dolor reprehenderit reiciendis quis repudiandae corporis
            rerum rem id ipsa atque corrupti commodi esse at, eveniet vero
            soluta, dolore hic explicabo. Dolores deserunt quasi hic accusamus!
          </Paragraph>

          <BtnReadMore />
        </div>
      </section>

      <SubscribeEmail />
    </main>
  );
};

export default MainSection;
