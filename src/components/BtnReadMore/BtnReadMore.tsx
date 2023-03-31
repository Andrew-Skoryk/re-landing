import { FC } from "react";

const BtnReadMore: FC = () => {
  return (
    <button className="px-8 py-2 font-bold transition-colors duration-300 ease-in-out bg-yellow-300 text-slate-800 rounded-3xl hover:bg-yellow-400 active:bg-yellow-500 focus:outline-none">
      Read More
    </button>
  );
};

export default BtnReadMore;
