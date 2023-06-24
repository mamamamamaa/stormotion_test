import { FC } from "react";
import style from "./TableHead.module.css";

interface Props {
  headings: string[];
}

export const TableHead: FC<Props> = ({ headings }) => {
  return (
    <thead className={style.tableHead}>
      <tr>
        {headings.map((heading, idx) => (
          <th key={idx} className={style.tableHeadElement}>
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};
