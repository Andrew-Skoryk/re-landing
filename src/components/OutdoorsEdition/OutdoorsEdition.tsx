import { FC } from "react";
import Slider from "react-slick";
import Peru from "../../assets/outdoors-peru.jpg";
import USA from "../../assets/outdoors-usa.jpg";
import Canada from "../../assets/outdoors-canada.jpg";

const slideData = [
  {
    image: Peru,
    title: "Ollantaytambo",
    country: "Peru",
    description:
      "Molestiae qui necessitatibus expedita alias non maiores vel magnam quidem amet, accusamus quas voluptatem? Lorem ipsum dolor sit amet.",
  },
  {
    image: USA,
    title: "Antelope Canyon",
    country: "USA",
    description:
      "Eum suscipit vero tenetur debitis molestias, error, quis, enim rerum ducimus ab officia voluptas temporibus! Magni id debitis iure quam reiciendis odio voluptatem assumenda quas.",
  },
  {
    image: Canada,
    title: "Lake louise",
    country: "Canada",
    description:
      "Beatae ex perspiciatisconsectetur adipisicing elit ipsum dolor, sit amet consectetur adipisicing elit. Enim, officiis? Vero, maiores repellendus delectus nisi odit autem dolorem.",
  },
];

const slideDataMuteted = [...slideData, ...slideData, ...slideData];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const OutdoorsEdition: FC = () => {
  return (
    <section className="relative lg:pr-32">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">Featured Spots</h2>
        <p className="mb-24">
          Some of featured spot that you might want visit before you die
        </p>
        <button>View All</button>
      </div>
      <div>
        <Slider {...settings}>
          {slideDataMuteted.map((slide, index) => (
            <article key={index} className="flex flex-col items-center px-4">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}, ${slide.title}`}
                className={"object-cover w-full h-64 mb-12"}
              />
              <h3 className="mb-1 text-3xl font-bold">{slide.title}</h3>
              <h4 className="mb-6 text-2xl font-bold opacity-50">
                {slide.country}
              </h4>
              <p className="mb-12 text-gray-300">{slide.description}</p>
              <button className="font-semibold text-yellow-300 transition-colors duration-300 hover:text-yellow-400 active:text-yellow-500">
                read more
              </button>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OutdoorsEdition;
