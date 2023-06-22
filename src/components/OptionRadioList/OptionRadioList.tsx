import { FC } from "react";
import { firstMoveArray } from "../consts/gameSettings.ts";
import { OptionRadio } from "../OptionRadio/OptionRadio.tsx";

export const OptionRadioList: FC = () => {
  return (
    <ul className="items-center w-full text-sm px-5 gap-10 text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
      {firstMoveArray.map((move) => (
        <li className="w-full" key={move}>
          <OptionRadio value={move} />
        </li>
      ))}
    </ul>
  );
};
