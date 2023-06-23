import { useState } from "react";
import { Hero } from "./Hero/Hero.tsx";
import { Modal } from "./Modal/Modal.tsx";
import { GameRules } from "./GameRules/GameRules.tsx";
import { MatchGame } from "./MatchGame/MatchGame.tsx";
import { GameOptions } from "./GameOptions/GameOptions.tsx";
import { MatchGameParams } from "../types/matchGame.ts";
import { INITIAL_GAME_OPTIONS } from "../consts/gameSettings.ts";

export const App = () => {
  const [startGame, setStartGame] = useState<boolean>(false);
  const [rulesState, setRulesState] = useState<boolean>(false);
  const [gameOptions, setGameOptions] =
    useState<MatchGameParams>(INITIAL_GAME_OPTIONS);

  const handleToggleModal = () => setRulesState((prevState) => !prevState);
  const handleToggleGame = () => setStartGame((prevState) => !prevState);

  return (
    <>
      <Hero openModal={handleToggleModal} />

      {!startGame && (
        <GameOptions
          handleStartGame={handleToggleGame}
          setGameOptions={setGameOptions}
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
