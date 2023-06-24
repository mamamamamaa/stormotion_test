import { useEffect, useState } from "react";
import { MatchGameParams, Players, Score } from "../types/matchGame.ts";
import toast from "react-hot-toast";

export const useMatchGame = (
  { totalMatches, matchesPerMove, firstMove }: MatchGameParams,
  handleEndGame: () => void,
  addScore: (score: Score) => void
) => {
  const [aiMatches, setAiMatches] = useState<number>(0);
  const [userMatches, setUserMatches] = useState<number>(0);
  const [matchesRemaining, setMatchesRemaining] =
    useState<number>(totalMatches);
  const [aiMadeMove, setAiMove] = useState<boolean>(firstMove === "USER");

  const makeAIMove = () => {
    setAiMove(false);

    let matches: number;

    if (matchesRemaining === 0) return;
    //
    // if (matchesRemaining === matchesPerMove + 1) {
    //   matches = 1;
    // } else if (matchesRemaining <= matchesPerMove) {
    //   matches = matchesRemaining;
    // } else {
    //   const remainder = matchesRemaining % (matchesPerMove + 1);
    //   matches = remainder === 0 ? 1 : matchesPerMove - remainder + 1;
    // }

    if (matchesRemaining === matchesPerMove + 1) {
      matches = 1;
    } else if (matchesRemaining <= 2 * matchesPerMove) {
      matches = matchesRemaining - (matchesRemaining % 2);
    } else {
      const remainder = (matchesRemaining - 1) % (matchesPerMove + 1);
      matches = remainder === 0 ? 1 : matchesPerMove - remainder + 1;
    }

    toast.promise(
      new Promise((resolve) =>
        setTimeout(() => {
          setMatchesRemaining((prevState) => prevState - matches);
          setAiMatches((prevState) => prevState + matches);
          setAiMove(true);
          resolve(true);
        }, 500)
      ),
      {
        loading: "AI makes its move..",
        success: "AI has made its move",
        error: "Smth went wrong",
      },
      { duration: 500 }
    );
  };

  const makeUserMove = (matches: number) => {
    if (
      matches > 0 &&
      matches <= matchesPerMove &&
      matches <= matchesRemaining &&
      aiMadeMove
    ) {
      setMatchesRemaining((prevState) => prevState - matches);
      setUserMatches((prevState) => prevState + matches);
    }
  };

  useEffect(() => {
    if (matchesRemaining <= 0) {
      let winner: Players;

      if (userMatches % 2 === 0) {
        winner = "USER";
        toast("You win!!!", { icon: "🎉" });
      } else {
        winner = "AI";
        toast("The AI won.", { icon: "😓" });
      }

      const score: Score = {
        totalMatches,
        matchesPerMove,
        winner,
        date: new Date(),
      };

      addScore(score);
      handleEndGame();
    }
  }, [matchesRemaining]);

  return {
    matchesRemaining,
    makeAIMove,
    makeUserMove,
    userMatches,
    aiMatches,
    aiMadeMove,
  };
};
