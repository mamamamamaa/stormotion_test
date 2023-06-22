import { FC } from "react";

interface Props {
  openModal: () => void;
}

export const Hero: FC<Props> = ({ openModal }) => {
  return (
    <>
      <section>
        <h1 className="text-center font-bold text-2xl">
          Welcome to Match Game
        </h1>
        <button
          onClick={openModal}
          type="button"
          className="block mx-auto font-normal border-b py-1 text-gray-500"
        >
          Rules
        </button>
      </section>
    </>
  );
};
