import { useState } from "react";
import { MatchGameParams } from "../types/matchGame.ts";

export const useMatchGame = ({ n, m }: MatchGameParams) => {
  const [matchesRemaining, setMatchesRemaining] = useState<number>(2 * n + 1);
  const [userMatches, setUserMatches] = useState<number>(0);
  const [aiMatches, setAiMatches] = useState<number>(0);

  const makeAIMove = () => {
    let matches: number;

    if (matchesRemaining === 0) return;

    if (matchesRemaining === m + 1) {
      matches = 1;
    } else if (matchesRemaining <= m) {
      matches = matchesRemaining;
    } else {
      const remainder = matchesRemaining % (m + 1);
      matches = remainder === 0 ? 1 : m - remainder + 1;
    }

    console.log(matches);

    setMatchesRemaining((prevState) => prevState - matches);
    setAiMatches((prevState) => prevState + matches);
  };

  const makeUserMove = (matches: number) => {
    if (matches > 0 && matches <= m && matches <= matchesRemaining) {
      setMatchesRemaining((prevState) => prevState - matches);
      setUserMatches((prevState) => prevState + matches);
    }
  };

  const resetGame = () => {
    setMatchesRemaining(2 * n + 1);
    setAiMatches(0);
    setUserMatches(0);
  };

  return {
    matchesRemaining,
    makeAIMove,
    makeUserMove,
    userMatches,
    aiMatches,
    resetGame,
  };
};
