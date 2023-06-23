import { FC } from "react";
import style from "./MatchesGameData.module.css";

interface Props {
  matchesRemaining: number;
  aiMatches: number;
  userMatches: number;
}

export const MatchesGameData: FC<Props> = ({
  userMatches,
  matchesRemaining,
  aiMatches,
}) => {
  return (
    <>
      <div className={style.matchesRemainingContainer}>
        <p className={style.matchesInfo}>
          Matches remaining: {matchesRemaining}
        </p>
      </div>

      <div className={style.matchesInfoContainer}>
        <p className={style.matchesInfo}>😈AI matches: {aiMatches}</p>
        <p className={style.matchesInfo}>🧒🏻User matches: {userMatches}</p>
      </div>
    </>
  );
};
