import { FC } from "react";
import style from "./GameRules.module.css";

export const GameRules: FC = () => {
  return (
    <section className={style.box}>
      <div>
        <h2 className={style.heading}>Classic rules</h2>
        <p>
          Two people play a game. From a stack of 25 matches, each player takes
          1, 2 or 3 matches each turn. The game ends as soon as all matches are
          taken. The player with an even number of matches wins.
        </p>
      </div>
      <div>
        <h2 className={style.heading}>Our interpretation of this game</h2>
        <p>The rules remain the same. Only there are some refinements:</p>
        <ol className={style.list}>
          <li>You play against artificial intelligence;</li>
          <li>
            The total number of matches and the number of matches that can be
            taken during one turn you can set yourself;
          </li>
          <li>You can choose whose turn it will be the first.</li>
        </ol>
      </div>
    </section>
  );
};
