export interface MatchGameParams {
  totalMatches: number;
  matchesPerMove: number;
  firstMove: Players;
}

export type Players = "AI" | "USER";

export interface InputOptions {
  id: string;
  name: string;
  defaultValue: number;
  label: string;
}

export interface Score {
  winner: Players;
  totalMatches: number;
  matchesPerMove: number;
  date: Date;
}
