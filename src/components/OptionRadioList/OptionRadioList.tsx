import { FC, Fragment } from "react";
import { FIRST_MOVE_OPTIONS } from "../../consts/gameSettings.ts";
import { OptionRadio } from "../OptionRadio/OptionRadio.tsx";
import style from "./OptionRadioList.module.css";

export const OptionRadioList: FC = () => {
  return (
    <div>
      <h3 className={style.radioSectionHeading}>First move</h3>
      <div className={style.radioList}>
        {FIRST_MOVE_OPTIONS.map((move) => (
          <Fragment key={move}>
            <OptionRadio value={move} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
