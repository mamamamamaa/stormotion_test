import { Score } from "../types/matchGame.ts";

export const isValidScore = (score: any): score is Score => {
  const date = new Date(score.date);

  // @ts-ignore
  const isRightDate = date !== "Invalid Date";

  const isRightTotalMatches = typeof score.totalMatches === "number";
  const isRightMatchesPerMove = typeof score.matchesPerMove === "number";
  const isRightWinner =
    typeof score.winner === "string" &&
    (score.winner === "USER" || score.winner === "AI");

  return (
    isRightWinner && isRightTotalMatches && isRightMatchesPerMove && isRightDate
  );
};
