import { FC } from "react";
import { Score } from "../../types/matchGame.ts";
import style from "./TableBody.module.css";

interface Props {
  scores: Score[];
}

export const TableBody: FC<Props> = ({ scores }) => {
  return (
    <tbody className={style.tableBody}>
      {scores.map(({ totalMatches, winner, matchesPerMove, date }, idx) => (
        <tr key={idx}>
          <td className={style.tableData}>{winner}</td>
          <td className={style.tableData}>{totalMatches}</td>
          <td className={style.tableData}>{matchesPerMove}</td>
          <td className={style.tableData}>{new Date(date).toDateString()}</td>
        </tr>
      ))}
    </tbody>
  );
};
