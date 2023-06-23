import { Score } from "../types/matchGame.ts";

export const isValidScore = (score: any): score is Score => {
  return (
    typeof score.winner === "string" &&
    (score.winner === "USER" || score.winner === "AI") &&
    typeof score.totalMatches === "number" &&
    typeof score.matchesPerMove === "number" &&
    new Date(score.date) !== "Invalid Date"
  );
};
