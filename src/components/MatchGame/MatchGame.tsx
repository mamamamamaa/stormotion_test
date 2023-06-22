import { FC, Fragment, useEffect } from "react";
import { MatchButton } from "../MatchButton/MatchButton.tsx";
import { MatchGameParams } from "../../types/matchGame.ts";
import { useMatchGame } from "../../hooks/useMatchGame.ts";
import toast from "react-hot-toast";

interface Props {
  options: MatchGameParams;
  handleEndGame: () => void;
}

export const MatchGame: FC<Props> = ({ options, handleEndGame }) => {
  const matchesArray = Array.from(
    { length: options.perMoveNumber },
    (_, index) => index + 1
  );

  const { matchesRemaining, makeAIMove, makeUserMove, userMatches, aiMatches } =
    useMatchGame(options);

  const handleUserMove = (matches: number) => {
    makeUserMove(matches);
    makeAIMove();
  };

  useEffect(() => {
    if (options.firstMove === "AI") makeAIMove();
  }, []);

  useEffect(() => {
    if (matchesRemaining <= 0) {
      if (userMatches % 2 === 0) toast("You win!!!", { icon: "🎉🎉🎉" });
      else toast("The AI won.", { icon: "😓😓😓" });

      handleEndGame();
    }
  }, [matchesRemaining]);

  return (
    <div className="flex flex-col gap-10">
      <p className="text-red-300">Matches remaining: {matchesRemaining}</p>

      <div className="text-green-500">
        <h1>AI matches: {aiMatches}</h1>
        <h1>User matches: {userMatches}</h1>
      </div>

      <div className="flex flex-col gap-10 text-center">
        {matchesArray.map((match) => (
          <Fragment key={match}>
            <MatchButton
              handleUserMove={handleUserMove}
              match={match}
              matchesRemaining={matchesRemaining}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
