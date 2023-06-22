import { useState } from "react";
import { Hero } from "./Hero/Hero.tsx";
import { Modal } from "./Modal/Modal.tsx";
import { GameRules } from "./GameRules/GameRules.tsx";

export const App = () => {
  const [rulesState, setRulesState] = useState<boolean>(false);

  const handleToggleModal = () => setRulesState((prevState) => !prevState);

  return (
    <>
      <Hero openModal={handleToggleModal} />

      {rulesState && (
        <Modal onClose={handleToggleModal}>
          <GameRules />
        </Modal>
      )}
      {/*<MatchGame />*/}
    </>
  );
};
