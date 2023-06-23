import { FC } from "react";
import style from "./OptionInput.module.css";
import { InputOptions } from "../../types/matchGame.ts";

interface Props {
  options: InputOptions;
}

export const OptionInput: FC<Props> = ({ options }) => {
  const { defaultValue, label, name, id } = options;

  return (
    <div className={style.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type="number"
        className={style.input}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};
