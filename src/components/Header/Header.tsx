import { FC } from "react";
import style from "./Header.module.css";
import { COMPANY_LINK, GITHUB_LINK } from "../../consts/gameSettings.ts";

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        <a href={COMPANY_LINK} target="_blank">
          Stormotion Match Game💫
        </a>
      </h1>
      <div className={style.utilBox}>
        <button className={style.scoreButton} type="button">
          Scores
        </button>
        <a className={style.ghLink} href={GITHUB_LINK} target="_blank">
          GitHub🫣
        </a>
      </div>
    </header>
  );
};
