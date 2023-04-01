import { FC } from "react";
import BtnReadMore from "../../BtnReadMore";
import cn from "classnames";

type Props = {
  title: string;
  country: string;
  isLast: boolean;
  img: string;
};

const MountainCard: FC<Props> = ({ title, country, isLast, img }) => {
  return (
    <article
      className={cn(
        "pb-14 lg:flex lg:flex-row justify-between m-auto lg:m-0 grid",
        {
          "relative after:absolute after:inset-x-1/2 lg:after:w-full after:h-[2px] after:bg-zinc-500 after:left-0 after:bottom-0 pb-14 after:rounded-full flex flex-col lg:flex-row after:w-1/2 after:translate-x-1/2 lg:after:translate-x-0":
            !isLast,
        }
      )}
    >
      <div className="order-3 max-w-xl m-auto text-center lg:text-start lg:m-0 lg:max-w-sm xl:max-w-xl lg:order-1">
        <h3 className="mb-1 text-xl font-bold md:text-3xl">{title}</h3>

        <h4 className="mb-8 text-xl font-bold opacity-50 md:text-lg">
          {country} Country
        </h4>

        <div className="mb-10 space-y-5 text-justify text-gray-300 lg:text-start">
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

      <div className="self-center order-2 w-full mb-10 cursor-pointer justify-self-center md:w-1/2 lg:w-96 lg:mb-0">
        <img
          src={img}
          alt={"Image of " + title}
          loading="lazy"
          className="self-center object-cover w-full h-auto aspect-square"
        />
      </div>
    </article>
  );
};

export default MountainCard;
