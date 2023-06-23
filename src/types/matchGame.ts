export interface MatchGameParams {
  totalNumber: number;
  perMoveNumber: number;
  firstMove: FirstMove;
}

export type FirstMove = "AI" | "USER";

export interface InputOptions {
  id: string;
  name: string;
  defaultValue: number;
  label: string;
}
