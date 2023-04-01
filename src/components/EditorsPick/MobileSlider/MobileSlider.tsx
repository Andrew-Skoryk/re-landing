import { FC, useMemo, MutableRefObject, useEffect } from "react";
import Slider from "react-slick";
import SlideArticle from "../SlideArticle";

type Props = {
  slideDataMuteted: EditorsPickObject[][];
  handleBeforeChange: (currentSlide: number, nextSlide: number) => void;
  sliderRef: MutableRefObject<Slider | null>;
  setSlidesNumber: (slidesNumber: number) => void;
};

const MobileSlider: FC<Props> = ({
  slideDataMuteted,
  handleBeforeChange,
  sliderRef,
  setSlidesNumber,
}) => {
  const fixedSliderData = slideDataMuteted.flat();

  useEffect(() => {
    setSlidesNumber(fixedSliderData.length);
  }, [fixedSliderData.length, setSlidesNumber]);

  const settings = useMemo(
    () => ({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      beforeChange: handleBeforeChange,
    }),
    [handleBeforeChange]
  );

  return (
    <Slider {...settings} ref={sliderRef}>
      {fixedSliderData.map(slide => (
        <div
          key={slide.title}
          className="grid w-full grid-cols-1 gap-6 md:gap-8"
        >
          <SlideArticle editorsPickObject={slide} />
        </div>
      ))}
    </Slider>
  );
};

export default MobileSlider;
