import { FC } from "react";
import { FirstMove } from "../../types/matchGame.ts";
import { RADIO_NAME } from "../../consts/gameSettings.ts";
import style from "./OptionRadio.module.css";

interface Props {
  value: FirstMove;
}

export const OptionRadio: FC<Props> = ({ value }) => {
  return (
    <>
      <div className={style.radioContainer}>
        <input
          id={RADIO_NAME}
          type="radio"
          value={value}
          defaultChecked={value === "USER"}
          name={RADIO_NAME}
          className={style.radioElement}
        />
        <label htmlFor={RADIO_NAME} className={style.radioLabel}>
          {value}
        </label>
      </div>
    </>
  );
};
