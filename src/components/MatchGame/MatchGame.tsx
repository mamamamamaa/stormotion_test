import { FC, useEffect } from "react";
import { MatchGameParams } from "../../types/matchGame.ts";
import { useMatchGame } from "../../hooks/useMatchGame.ts";
import { MatchButtonList } from "../MatchButtonList/MatchButtonList.tsx";
import { MatchesGameData } from "../MatchesGameData/MatchesGameData.tsx";
import style from "./MatchGame.module.css";

interface Props {
  options: MatchGameParams;
  handleEndGame: () => void;
}

export const MatchGame: FC<Props> = ({ options, handleEndGame }) => {
  const matchesArray = Array.from(
    { length: options.perMoveNumber },
    (_, index) => index + 1
  );

  const {
    matchesRemaining,
    makeAIMove,
    makeUserMove,
    userMatches,
    aiMatches,
    aiMadeMove,
  } = useMatchGame(options, handleEndGame);

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
