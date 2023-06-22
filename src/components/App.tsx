import { MatchGame } from "./MatchGame/MatchGame.tsx";
import { useState } from "react";
import { Modal } from "./Modal/Modal.tsx";
import { GameRules } from "./GameRules/GameRules.tsx";

export const App = () => {
  const [rulesState, setRulesState] = useState<boolean>(false);

  const handleToggleModal = () => setRulesState((prevState) => !prevState);

  return (
    <>
      <section>
        <h1 className="text-center font-bold text-2xl">
          Welcome to Match Game
        </h1>
        <button
          onClick={handleToggleModal}
          type="button"
          className="block mx-auto font-normal border-b py-1 text-gray-500"
        >
          Rules
        </button>
      </section>

      {rulesState && (
        <Modal handleCloseModal={handleToggleModal}>
          <GameRules />
        </Modal>
      )}
      {/*<MatchGame />*/}
    </>
  );
};
