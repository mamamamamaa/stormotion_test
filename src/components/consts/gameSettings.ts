import { FirstMove, MatchGameParams } from "../../types/matchGame.ts";

export const initialGameOptions: MatchGameParams = {
  totalNumber: 25,
  perMoveNumber: 3,
  firstMove: "USER",
};

export const firstMoveArray: FirstMove[] = ["USER", "AI"];
