import { FC } from "react";
import style from "./MatchButton.module.css";

interface Props {
  handleUserMove: (match: number) => void;
  match: number;
  matchesRemaining: number;
  aiMadeMove: boolean;
}

export const MatchButton: FC<Props> = ({
  matchesRemaining,
  match,
  handleUserMove,
  aiMadeMove,
}) => {
  return (
    <button
      disabled={match > matchesRemaining || !aiMadeMove}
      onClick={() => handleUserMove(match)}
      className={style.matchButton}
    >
      Take {match} {match > 1 ? "matches" : " match"}
    </button>
  );
};
