import { PropsWithChildren } from "react";

type NavLinkProps = {
  children: string;
};

const NavLink = ({ children }: PropsWithChildren<NavLinkProps>) => {
  return (
    <li className="relative px-2 text-lg font-semibold transition-colors duration-300 cursor-pointer hover:text-white group focus:outline-none md:px-0">
      <span className="relative inline-block">
        {children}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white opacity-0 group-hover:opacity-100 transform transition-all duration-300 scale-x-0 group-hover:scale-x-100 rounded-2xl"></span>
      </span>
    </li>
  );
};

export default NavLink;
