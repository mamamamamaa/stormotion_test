import {
  FirstMove,
  InputOptions,
  MatchGameParams,
} from "../types/matchGame.ts";

export const COMPANY_LINK = "https://stormotion.io/";
export const GITHUB_LINK = "https://github.com/mamamamamaa/stormotion_test";

export const MATCHES_PER_MOVE_INPUT_NAME = "max_per_move";
export const TOTAL_MATCHES_INPUT_NAME = "total";
export const RADIO_NAME = "first_move";

export const INITIAL_GAME_OPTIONS: MatchGameParams = {
  totalNumber: 25,
  perMoveNumber: 3,
  firstMove: "USER",
};

export const FIRST_MOVE_OPTIONS: FirstMove[] = ["USER", "AI"];

export const INPUT_OPTIONS: InputOptions[] = [
  {
    id: "total_matches",
    name: TOTAL_MATCHES_INPUT_NAME,
    defaultValue: INITIAL_GAME_OPTIONS.totalNumber,
    label: "Total number of matches",
  },
  {
    id: "matches_per_move",
    name: MATCHES_PER_MOVE_INPUT_NAME,
    defaultValue: INITIAL_GAME_OPTIONS.perMoveNumber,
    label: "Number of matches per move",
  },
];
