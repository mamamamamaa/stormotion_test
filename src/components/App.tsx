import { useState } from "react";
import { Hero } from "./Hero/Hero.tsx";
import { Modal } from "./Modal/Modal.tsx";
import { GameRules } from "./GameRules/GameRules.tsx";
import { MatchGame } from "./MatchGame/MatchGame.tsx";
import { GameOptions } from "./GameOptions/GameOptions.tsx";
import { MatchGameParams } from "../types/matchGame.ts";
import { initialGameOptions } from "./consts/gameSettings.ts";

export const App = () => {
  const [startGame, setStartGame] = useState<boolean>(false);
  const [rulesState, setRulesState] = useState<boolean>(false);
  const [gameOptions, setGameOptions] =
    useState<MatchGameParams>(initialGameOptions);

  const handleToggleModal = () => setRulesState((prevState) => !prevState);
  const handleToggleGame = () => setStartGame((prevState) => !prevState);

  return (
    <>
      <Hero openModal={handleToggleModal} />

      {!startGame && (
        <GameOptions
          handleStartGame={handleToggleGame}
          setGameOptions={setGameOptions}
          initialGameOptions={gameOptions}
        />
      )}
      {startGame && (
        <MatchGame options={gameOptions} handleEndGame={handleToggleGame} />
      )}
      {rulesState && (
        <Modal onClose={handleToggleModal}>
          <GameRules />
        </Modal>
      )}
    </>
  );
};
