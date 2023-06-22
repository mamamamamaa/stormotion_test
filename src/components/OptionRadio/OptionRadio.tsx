import { FC } from "react";
import { FirstMove } from "../../types/matchGame.ts";

interface Props {
  value: FirstMove;
}

export const OptionRadio: FC<Props> = ({ value }) => {
  return (
    <>
      <div className="flex items-center">
        <input
          id="horizontal-list-radio-passport"
          type="radio"
          value={value}
          defaultChecked={value === "USER"}
          name="first_move"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        />
        <label
          htmlFor="horizontal-list-radio-passport"
          className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
        >
          {value}
        </label>
      </div>
    </>
  );
};
