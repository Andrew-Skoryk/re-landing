import { FC } from "react";
import BtnReadMore from "../../BtnReadMore";

type Props = {
  title: string;
  country: string;
};

const MountainCard: FC<Props> = ({ title, country }) => {
  return (
    <article className="relative after:absolute after:inset-x-1/2 after:w-full after:h-[2px] after:bg-zinc-600 after:left-0 after:bottom-0 pb-14 after:rounded-full">
      <div>
        <h3 className="mb-1 text-xl font-bold tracking-wide md:text-2xl">
          {title}
        </h3>

        <h4 className="mb-8 font-bold opacity-40">{country} Country</h4>

        <div className="mb-10 space-y-5 text-gray-300">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            quibusdam sint eius. Nam perferendis dolores vel consectetur
            exercitationem eveniet. Quo odio aliquam non similique provident
            dolorum illo laudantium reprehenderit quibusdam.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            repudiandae deleniti facilis dolorum sequi dolor.
          </p>
        </div>

        <BtnReadMore />
      </div>

      <div>
        <img src="" alt={"Image of  " + title} />
      </div>
    </article>
  );
};

export default MountainCard;
