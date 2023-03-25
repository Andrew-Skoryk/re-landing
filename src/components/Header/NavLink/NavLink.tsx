import { PropsWithChildren } from "react";

type NavLinkProps = {
  children: string;
};

const NavLink = ({ children }: PropsWithChildren<NavLinkProps>) => {
  return <li className="cursor-pointer hover:opacity-100">{children}</li>;
};

export default NavLink;
