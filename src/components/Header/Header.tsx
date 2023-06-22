import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="flex justify-between py-5 drop-shadow-xl border-b">
      <h1 className="font-bold text-lg hover:underline hover:text-blue-500">
        <a href="https://stormotion.io/" target="_blank">
          Stormotion Match Game💫
        </a>
      </h1>
      <div className="flex items-center gap-10">
        <button className="hover:underline hover:text-blue-500" type="button">
          Scores
        </button>
        <a
          className="hover:underline hover:text-blue-500"
          href="https://github.com/mamamamamaa/stormotion_test"
          target="_blank"
        >
          GitHub🫣
        </a>
      </div>
    </header>
  );
};
