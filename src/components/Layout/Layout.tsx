import { FC, ReactNode } from "react";
import { Header } from "../Header/Header.tsx";
import { Toaster } from "react-hot-toast";
import style from "./Layout.module.css";

interface Props {
  children: ReactNode;
  openScoresModal: () => void;
}

export const Layout: FC<Props> = ({ children, openScoresModal }) => {
  return (
    <>
      <Header openScoresModal={openScoresModal} />
      <main className={style.mainContainer}>{children}</main>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
