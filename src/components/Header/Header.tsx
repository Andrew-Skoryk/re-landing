import { FC, useState } from "react";
import BtnReadMore from "../BtnReadMore";
import NavLink from "./NavLink";
import cn from "classnames";
import { FiMenu, FiX } from "react-icons/fi";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative h-screen bg-center bg-cover bg-header lg:pr-32">
      <div className="absolute bottom-0 right-0 z-20 w-full h-1/4 bg-gradienToBg" />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col h-screen">
        <div className="flex justify-between pr-2 xl:pr-20 md:pr-12 lg:pr-6">
          <div className="w-1/3 py-3 bg-yellow-300 md:p-6 md:w-72 md:pl-12 lg:w-96">
            <a
              href="/"
              className="px-3 py-2 text-2xl font-bold transition-colors duration-300 ease-in-out text-slate-700 hover:text-zinc-950"
            >
              trppd_
            </a>
          </div>

          <div className="flex items-center space-x-1 text-sm font-semibold lg:space-x-7 md:space-x-4">
            <a className="cursor-pointer">My Collection</a>

            <span className="h-4 bg-slate-50 w-0.5 rounded-lg"></span>

            <div className="flex items-center space-x-1 cursor-pointer md:space-x-3">
              <a>Galih Pambudi</a>
              <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>
          </div>
        </div>

        <nav className="relative flex flex-wrap py-3 md:flex-grow md:pt-12 md:px-9 md:w-max lg:px-16">
          <div className="absolute inset-0 opacity-50 bg-stone-950" />

          <button
            tabIndex={-1}
            className="z-50 flex items-center self-start flex-grow pl-2 text-center md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <ul
            className={cn(
              "flex text-gray-400 md:space-y-8 md:flex-col md:block",
              {
                hidden: !isMenuOpen,
                block: isMenuOpen,
                "grid grid-cols-2 grid-rows-2 gap-4 md:flex mx-12 md:mx-0":
                  isMenuOpen,
              }
            )}
          >
            <NavLink>Home</NavLink>
            <NavLink>Recommendation</NavLink>
            <NavLink>Explore</NavLink>
            <NavLink>Help</NavLink>
            <NavLink>About Us</NavLink>
            {}
          </ul>
        </nav>
      </div>

      <div className="absolute z-40 space-y-10 lg:top-1/5 md:left-1/3 md:top-1/3 top-1/3 left-3 2xl:left-1/4">
        <h1 className="text-6xl font-bold tracking-wide">
          The Walchen
          <br />
          Lake
        </h1>

        <p className="text-sm font-semibold md:text-base">
          One of the deepest and largest alpine lakes in Germany
          <br />
          and one the best outdoors place
          <br />
          that you never imagine before.
        </p>

        <BtnReadMore />
      </div>
    </header>
  );
};

export default Header;
