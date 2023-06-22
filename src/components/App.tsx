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
  const handleStartGame = () => setStartGame(true);

  return (
    <>
      <Hero openModal={handleToggleModal} />

      {!startGame && (
        <GameOptions
          handleStartGame={handleStartGame}
          setGameOptions={setGameOptions}
          initialGameOptions={gameOptions}
        />
      )}
      {startGame && <MatchGame options={gameOptions} />}
      {rulesState && (
        <Modal onClose={handleToggleModal}>
          <GameRules />
        </Modal>
      )}
    </>
  );
};
