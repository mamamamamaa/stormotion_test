import { Players, InputOptions, MatchGameParams } from "../types/matchGame.ts";

export const SCORES_KEY = "SCORES";

export const SCORES_TABLE_HEADINGS = [
  "Winner",
  "Total Matches",
  "Matches Per Move",
  "Date",
];

export const COMPANY_LINK = "https://stormotion.io/";
export const GITHUB_LINK = "https://github.com/mamamamamaa/stormotion_test";

export const MATCHES_PER_MOVE_INPUT_NAME = "max_per_move";
export const TOTAL_MATCHES_INPUT_NAME = "total";
export const RADIO_NAME = "first_move";

export const INITIAL_GAME_OPTIONS: MatchGameParams = {
  totalMatches: 25,
  matchesPerMove: 3,
  firstMove: "USER",
};

export const FIRST_MOVE_OPTIONS: Players[] = ["USER", "AI"];

export const INPUT_OPTIONS: InputOptions[] = [
  {
    id: "total_matches",
    name: TOTAL_MATCHES_INPUT_NAME,
    defaultValue: INITIAL_GAME_OPTIONS.totalMatches,
    label: "Total number of matches",
  },
  {
    id: "matches_per_move",
    name: MATCHES_PER_MOVE_INPUT_NAME,
    defaultValue: INITIAL_GAME_OPTIONS.matchesPerMove,
    label: "Number of matches per move",
  },
];
