import { FC } from "react";
import style from "./Hero.module.css";

interface Props {
  openModal: () => void;
}

export const Hero: FC<Props> = ({ openModal }) => {
  return (
    <>
      <section>
        <h2 className={style.heroHeading}>Welcome to Match Game</h2>
        <button onClick={openModal} type="button" className={style.rulesButton}>
          Rules
        </button>
      </section>
    </>
  );
};
