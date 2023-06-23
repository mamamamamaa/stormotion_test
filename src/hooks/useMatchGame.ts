import { useEffect, useState } from "react";
import { MatchGameParams } from "../types/matchGame.ts";
import toast from "react-hot-toast";

export const useMatchGame = (
  { totalNumber, perMoveNumber, firstMove }: MatchGameParams,
  handleEndGame: () => void
) => {
  const [aiMatches, setAiMatches] = useState<number>(0);
  const [userMatches, setUserMatches] = useState<number>(0);
  const [matchesRemaining, setMatchesRemaining] = useState<number>(totalNumber);
  const [aiMadeMove, setAiMove] = useState<boolean>(firstMove === "USER");

  const makeAIMove = () => {
    setAiMove(false);

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
      matches <= perMoveNumber &&
      matches <= matchesRemaining &&
      aiMadeMove
    ) {
      setMatchesRemaining((prevState) => prevState - matches);
      setUserMatches((prevState) => prevState + matches);
    }
  };

  useEffect(() => {
    if (matchesRemaining <= 0) {
      if (userMatches % 2 === 0) toast("You win!!!", { icon: "🎉🎉🎉" });
      else toast("The AI won.", { icon: "😓😓😓" });

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
