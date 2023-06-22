import { FC, FormEventHandler } from "react";
import style from "./GameOptions.module.css";
import toast from "react-hot-toast";
import { FirstMove, MatchGameParams } from "../../types/matchGame.ts";
import { OptionRadioList } from "../OptionRadioList/OptionRadioList.tsx";

interface Props {
  handleStartGame: () => void;
  setGameOptions: (options: MatchGameParams) => void;
  initialGameOptions: MatchGameParams;
}
export const GameOptions: FC<Props> = ({
  setGameOptions,
  handleStartGame,
  initialGameOptions,
}) => {
  const { totalNumber, perMoveNumber } = initialGameOptions;
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const totalNumber = formData.get("total") && Number(formData.get("total"));
    const firstMove = formData.get("first_move") as FirstMove;
    const perMoveNumber =
      formData.get("max_per_move") && Number(formData.get("max_per_move"));

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

    setGameOptions({ totalNumber, perMoveNumber, firstMove });
    handleStartGame();
  };

  return (
    <>
      <form className={style.settingsForm} onSubmit={onSubmit}>
        <div className={style.inputsBox}>
          <div className={style.inputContainer}>
            <label htmlFor="total-number-of-matches">
              Total number of matches
            </label>
            <input
              id="total-number-of-matches"
              name="total"
              type="number"
              className={style.input}
              defaultValue={totalNumber}
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="max-number-of-matches-per-move">
              Number of matches per move
            </label>
            <input
              id="max-number-of-matches-per-move"
              name="max_per_move"
              type="number"
              className={style.input}
              defaultValue={perMoveNumber}
              required
            />
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-gray-900">Identification</h3>
          <OptionRadioList />
        </div>

        <button className={style.submitButton}>Start game</button>
      </form>
    </>
  );
};
