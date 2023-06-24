import { FC } from "react";
import { Score } from "../../types/matchGame.ts";
import { TableBody } from "../TableBody/TableBody.tsx";
import { TableHead } from "../TableHead/TableHead.tsx";

import style from "./ScoresTable.module.css";
import { SCORES_TABLE_HEADINGS } from "../../consts/gameSettings.ts";

interface Props {
  scores: Score[];
}

export const ScoresTable: FC<Props> = ({ scores }) => {
  return (
    <>
      <table className={style.scoresTable}>
        <TableHead headings={SCORES_TABLE_HEADINGS} />
        <TableBody scores={scores} />
      </table>
    </>
  );
};
