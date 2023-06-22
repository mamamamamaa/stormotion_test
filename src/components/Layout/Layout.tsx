import { FC, ReactNode } from "react";
import { Header } from "../Header/Header.tsx";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-10">{children}</main>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
