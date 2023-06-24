import { Score } from "../types/matchGame.ts";

export const isValidScore = (score: any): score is Score => {
  const isRightTotalMatches = typeof score.totalMatches === "number";
  const isRightMatchesPerMove = typeof score.matchesPerMove === "number";
  const isRightDate = new Date(score.date) !== "Invalid Date";
  const isRightWinner =
    typeof score.winner === "string" &&
    (score.winner === "USER" || score.winner === "AI");

  return (
    isRightWinner && isRightTotalMatches && isRightMatchesPerMove && isRightDate
  );
};
