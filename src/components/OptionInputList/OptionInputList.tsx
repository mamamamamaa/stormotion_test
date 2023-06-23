import { FC, Fragment } from "react";
import style from "./OptionInputList.module.css";
import { INPUT_OPTIONS } from "../../consts/gameSettings.ts";
import { OptionInput } from "../OptionInput/OptionInput.tsx";

export const OptionInputList: FC = () => {
  return (
    <div className={style.inputsBox}>
      {INPUT_OPTIONS.map((options, idx) => (
        <Fragment key={idx}>
          <OptionInput options={options} />
        </Fragment>
      ))}
    </div>
  );
};
