import { useState } from "react";
import { MatchGameParams } from "../types/matchGame.ts";

export const useMatchGame = ({
  totalNumber,
  perMoveNumber,
}: MatchGameParams) => {
  const [matchesRemaining, setMatchesRemaining] = useState<number>(totalNumber);
  const [userMatches, setUserMatches] = useState<number>(0);
  const [aiMatches, setAiMatches] = useState<number>(0);

  const makeAIMove = () => {
    let matches: number;

    if (matchesRemaining === 0) return;

    if (matchesRemaining === perMoveNumber + 1) {
      matches = 1;
    } else if (matchesRemaining <= perMoveNumber) {
      matches = matchesRemaining;
    } else {
      const remainder = matchesRemaining % (perMoveNumber + 1);
      matches = remainder === 0 ? 1 : perMoveNumber - remainder + 1;
    }

    setMatchesRemaining((prevState) => prevState - matches);
    setAiMatches((prevState) => prevState + matches);
  };

  const makeUserMove = (matches: number) => {
    if (
      matches > 0 &&
      matches <= perMoveNumber &&
      matches <= matchesRemaining
    ) {
      setMatchesRemaining((prevState) => prevState - matches);
      setUserMatches((prevState) => prevState + matches);
    }
  };

  return {
    matchesRemaining,
    makeAIMove,
    makeUserMove,
    userMatches,
    aiMatches,
  };
};
