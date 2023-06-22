import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="flex justify-between py-5 drop-shadow-xl border-b">
      <h1 className="font-bold text-lg">
        <a href="https://stormotion.io/" target="_blank">
          Stormotion Match Game💫
        </a>
      </h1>
      <div className="flex items-center gap-10">
        <button type="button">Scores</button>
        <a
          href="https://github.com/mamamamamaa/stormotion_test"
          target="_blank"
        >
          GitHub🫣
        </a>
      </div>
    </header>
  );
};
