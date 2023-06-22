export type MatchGameParams = {
  totalNumber: number;
  perMoveNumber: number;
  firstMove: FirstMove;
};

export type FirstMove = "AI" | "USER";
