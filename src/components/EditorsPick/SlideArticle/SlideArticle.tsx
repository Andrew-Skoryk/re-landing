import { FC } from "react";

type Props = {
  editorsPickObject: EditorsPickObject;
  gridPosition: string;
  customClass?: string;
};

const SlideArticle: FC<Props> = ({
  editorsPickObject,
  gridPosition,
  customClass,
}) => {
  const { image, title, country, description } = editorsPickObject;

  return (
    <article
      className={`relative flex group flex-col cursor-pointer text-start ${gridPosition}`}
    >
      <img
        src={image}
        alt={title}
        className={`self-center h-auto w-full object-cover aspect-square ${customClass}`}
      />

      <div className="absolute bottom-0 left-0 z-10 hidden w-full p-2 text-slate-50 xl:p-8 bg-stone-800 bg-opacity-40 group-hover:opacity-100 group-hover:block">
        <h3 className="text-xl font-bold xl:mb-1 xl:text-3xl mb-0.5">
          {title}
        </h3>

        <h4 className="mb-4 font-bold xl:mb-6 xl:text-xl opacity-60">
          {country}
        </h4>

        <p className="text-sm text-justify text-gray-200 lg:text-start">
          {description}
        </p>
      </div>
    </article>
  );
};

export default SlideArticle;
