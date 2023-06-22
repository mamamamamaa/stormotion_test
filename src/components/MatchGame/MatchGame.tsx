import { FC, Fragment } from "react";
import { MatchButton } from "../MatchButton/MatchButton.tsx";
import { MatchGameParams } from "../../types/matchGame.ts";
import { useMatchGame } from "../../hooks/useMatchGame.ts";

export const MatchGame: FC = () => {
  const startData: MatchGameParams = {
    n: 12,
    m: 3,
  };

  const matchesArray = Array.from(
    { length: startData.m },
    (_, index) => index + 1
  );

  const { matchesRemaining, makeAIMove, makeUserMove, userMatches, aiMatches } =
    useMatchGame(startData);

  const handleUserMove = (matches: number) => {
    makeUserMove(matches);
    makeAIMove();
  };

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
