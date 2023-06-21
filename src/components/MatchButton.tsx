import { FC } from "react";

interface Props {
  handleUserMove: (match: number) => void;
  match: number;
  matchesRemaining: number;
}

export const MatchButton: FC<Props> = ({
  matchesRemaining,
  match,
  handleUserMove,
}) => {
  return (
    <button
      disabled={match > matchesRemaining}
      onClick={() => handleUserMove(match)}
      className="py-2 px-4 text-white bg-blue-600 rounded-xl disabled:bg-gray-600"
    >
      Take {match} {match > 1 ? "matches" : " match"}
    </button>
  );
};
