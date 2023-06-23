import { useEffect, useState } from "react";
import { Score } from "../types/matchGame.ts";
import { SCORES_KEY } from "../consts/gameSettings.ts";
import { isValidScore } from "../utils/isValidScore.ts";

export const useScores = () => {
  const [scores, setScores] = useState<Score[]>([]);

  const addScore = (score: Score) =>
    setScores((prevState) => [...prevState, score]);

  useEffect(() => {
    const localStorageData = localStorage.getItem(SCORES_KEY);

    if (!localStorageData) return;

    const parsedScores = JSON.parse(localStorageData);

    if (!Array.isArray(parsedScores)) {
      console.error("Invalid scores format. Expected an array.");
      return;
    }

    if (parsedScores.length === 0) return;

    const areScoresValid = parsedScores.every(isValidScore);

    if (!areScoresValid) {
      console.error("Invalid score format.");
      return;
    }

    setScores(parsedScores);
  }, []);

  useEffect(() => {
    const stringifiedScores = JSON.stringify(scores);

    localStorage.setItem(SCORES_KEY, stringifiedScores);
  }, [scores]);

  return {
    scores,
    addScore,
  };
};
