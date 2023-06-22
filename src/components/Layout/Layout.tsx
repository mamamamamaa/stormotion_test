import { FC, ReactNode } from "react";
import { Header } from "../Header/Header.tsx";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-10">{children}</main>
    </>
  );
};
