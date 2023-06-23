import { FC, useEffect } from "react";
import { MatchGameParams, Score } from "../../types/matchGame.ts";
import { useMatchGame } from "../../hooks/useMatchGame.ts";
import { MatchButtonList } from "../MatchButtonList/MatchButtonList.tsx";
import { MatchesGameData } from "../MatchesGameData/MatchesGameData.tsx";
import style from "./MatchGame.module.css";

interface Props {
  options: MatchGameParams;
  handleEndGame: () => void;
  addScore: (score: Score) => void;
}

export const MatchGame: FC<Props> = ({ options, handleEndGame, addScore }) => {
  const matchesArray = Array.from(
    { length: options.matchesPerMove },
    (_, index) => index + 1
  );

  const {
    matchesRemaining,
    makeAIMove,
    makeUserMove,
    userMatches,
    aiMatches,
    aiMadeMove,
  } = useMatchGame(options, handleEndGame, addScore);

  const handleUserMove = (matches: number) => {
    makeUserMove(matches);
    makeAIMove();
  };

  useEffect(() => {
    if (options.firstMove === "AI") makeAIMove();
  }, []);

  return (
    <div className={style.gameContainer}>
      <MatchesGameData
        matchesRemaining={matchesRemaining}
        aiMatches={aiMatches}
        userMatches={userMatches}
      />
      <MatchButtonList
        matchesRemaining={matchesRemaining}
        matchesArray={matchesArray}
        aiMadeMove={aiMadeMove}
        handleUserMove={handleUserMove}
      />
    </div>
  );
};
