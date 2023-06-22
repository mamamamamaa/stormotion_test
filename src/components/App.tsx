import { MatchGame } from "./MatchGame/MatchGame.tsx";
import { useState } from "react";
import { Modal } from "./Modal/Modal.tsx";

export const App = () => {
  const [a, setA] = useState<boolean>(false);

  return (
    <>
      <section>
        <h1 className="text-center font-bold text-2xl">
          Welcome to Match Game
        </h1>
        <button
          onClick={() => setA(true)}
          type="button"
          className="block mx-auto font-normal border-b py-1 text-gray-500"
        >
          Rules
        </button>
      </section>

      {a && (
        <Modal handleCloseModal={() => setA(false)}>
          Hellloooooooooooooooooooooooooooooooo
        </Modal>
      )}
      {/*<MatchGame />*/}
    </>
  );
};
