import { FC } from "react";
import { Players } from "../../types/matchGame.ts";
import { RADIO_NAME } from "../../consts/gameSettings.ts";
import style from "./OptionRadio.module.css";

interface Props {
  value: Players;
}

export const OptionRadio: FC<Props> = ({ value }) => {
  return (
    <>
      <div className={style.radioContainer}>
        <input
          id={value}
          type="radio"
          value={value}
          defaultChecked={value === "USER"}
          name={RADIO_NAME}
          className={style.radioElement}
        />
        <label htmlFor={value} className={style.radioLabel}>
          {value}
        </label>
      </div>
    </>
  );
};
