import { FC } from "react";
import NavLink from "./NavLink";

export const Header: FC = () => {
  return (
    <header className="relative min-h-screen bg-center bg-cover bg-header">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col h-screen">
        <div className="flex justify-between pr-12">
          <div className="w-1/6 p-6 pl-4 pr-4 bg-yellow-300 sm:w-1/3 md:w-1/4">
            <a
              href="/"
              className="px-3 py-2 text-2xl font-bold transition-colors duration-300 text-slate-700 lg:ml-8 hover:text-zinc-900"
            >
              trppd_
            </a>
          </div>

          <div className="flex items-center text-sm font-semibold space-x-7">
            <a className="cursor-pointer">My Collection</a>

            <span className="h-4 bg-slate-50 w-0.5 rounded-lg"></span>

            <div className="flex items-center space-x-3 cursor-pointer">
              <a>Galih Pambudi</a>
              <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>
          </div>
        </div>

        <nav className="flex-grow pt-8 bg-black opacity-50 px-9 w-max">
          <ul className="flex flex-col space-y-6">
            <NavLink>Home</NavLink>
            <NavLink>My Collection</NavLink>
            <NavLink>Recommendation</NavLink>
            <NavLink>Explore</NavLink>
            <NavLink>Help</NavLink>
            <NavLink>About Us</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};
