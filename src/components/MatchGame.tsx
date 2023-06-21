import { useState, FC, Fragment } from "react";
import { MatchButton } from "./MatchButton.tsx";

type MatchGameParams = {
  n: number;
  m: number;
};

const useMatchGameAI = ({ n, m }: MatchGameParams) => {
  const [matchesRemaining, setMatchesRemaining] = useState<number>(2 * n + 1);
  const [userMatches, setUserMatches] = useState<number>(0);
  const [aiMatches, setAiMatches] = useState<number>(0);

  const makeAIMove = () => {
    let matches: number;

    if (matchesRemaining === m + 1) {
      matches = 1;
    } else if (matchesRemaining <= m) {
      matches = matchesRemaining;
    } else {
      const remainder = matchesRemaining % (m + 1);
      matches = remainder === 0 ? 1 : m - remainder + 1;
    }

    setMatchesRemaining(matchesRemaining - matches);
    setAiMatches((prevState) => prevState + matches);
  };

  const makeUserMove = (matches: number) => {
    if (matches > 0 && matches <= m && matches <= matchesRemaining) {
      setMatchesRemaining(matchesRemaining - matches);
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
    useMatchGameAI(startData);

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
