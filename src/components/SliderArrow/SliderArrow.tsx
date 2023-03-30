import { forwardRef } from "react";
import arrowIcon from "../../assets/arrow.png";
import cn from "classnames";

type Props = {
  onClick?: () => void;
  next: boolean;
};

const SliderArrow = forwardRef<HTMLButtonElement, Props>(
  ({ onClick, next }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "absolute p-1 bg-white focus:outline-none rounded-full top-[-226px] lg:block hidden",
          {
            "left-10": next,
            "left-0": !next,
          }
        )}
        onClick={onClick}
      >
        <img
          src={arrowIcon}
          className={cn("w-5 h-5", { "transform rotate-180": next })}
        />
      </button>
    );
  }
);

SliderArrow.displayName = "SliderArrow";

export default SliderArrow;
