import { FC, PropsWithChildren } from "react";

type Props = {
  children: string;
};

const Paragraph: FC<Props> = ({ children }: PropsWithChildren<Props>) => {
  return <p>{children}</p>;
};

export default Paragraph;
