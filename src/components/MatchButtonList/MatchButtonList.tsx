import { FC, Fragment } from "react";
import { MatchButton } from "../MatchButton/MatchButton.tsx";
import style from "./MatchButtonList.module.css";

interface Props {
  matchesArray: number[];
  handleUserMove: (matches: number) => void;
  aiMadeMove: boolean;
  matchesRemaining: number;
}

export const MatchButtonList: FC<Props> = ({
  matchesArray,
  handleUserMove,
  aiMadeMove,
  matchesRemaining,
}) => {
  return (
    <div className={style.buttonList}>
      {matchesArray.map((match) => (
        <Fragment key={match}>
          <MatchButton
            handleUserMove={handleUserMove}
            match={match}
            matchesRemaining={matchesRemaining}
            aiMadeMove={aiMadeMove}
          />
        </Fragment>
      ))}
    </div>
  );
};
