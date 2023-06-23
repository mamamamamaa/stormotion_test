import { FC, FormEventHandler } from "react";
import style from "./GameOptions.module.css";
import toast from "react-hot-toast";
import { Players, MatchGameParams } from "../../types/matchGame.ts";
import { OptionRadioList } from "../OptionRadioList/OptionRadioList.tsx";
import { OptionInputList } from "../OptionInputList/OptionInputList.tsx";
import {
  MATCHES_PER_MOVE_INPUT_NAME,
  RADIO_NAME,
  TOTAL_MATCHES_INPUT_NAME,
} from "../../consts/gameSettings.ts";

interface Props {
  handleStartGame: () => void;
  setGameOptions: (options: MatchGameParams) => void;
}
export const GameOptions: FC<Props> = ({ setGameOptions, handleStartGame }) => {
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const totalNumber =
      formData.get(TOTAL_MATCHES_INPUT_NAME) &&
      Number(formData.get(TOTAL_MATCHES_INPUT_NAME));

    const perMoveNumber =
      formData.get(MATCHES_PER_MOVE_INPUT_NAME) &&
      Number(formData.get(MATCHES_PER_MOVE_INPUT_NAME));

    const firstMove = formData.get(RADIO_NAME) as Players;

    if (!totalNumber || !perMoveNumber || !firstMove) {
      return toast.error("Invalid values");
    }

    if (totalNumber < 3) {
      return toast.error("Total number of matches must more than 3");
    }

    if (totalNumber % 2 === 0) {
      return toast.error("Total number of matches must be odd");
    }

    if (perMoveNumber < 0) {
      return toast.error(
        "Number of matches per move must be greater than or equal to 1"
      );
    }

    setGameOptions({
      totalMatches: totalNumber,
      matchesPerMove: perMoveNumber,
      firstMove,
    });
    handleStartGame();
  };

  return (
    <>
      <form className={style.settingsForm} onSubmit={onSubmit}>
        <OptionInputList />

        <OptionRadioList />

        <button className={style.submitButton}>Start game</button>
      </form>
    </>
  );
};
