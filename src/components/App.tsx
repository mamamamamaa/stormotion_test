import { useState } from "react";
import { Hero } from "./Hero/Hero.tsx";
import { Modal } from "./Modal/Modal.tsx";
import { GameRules } from "./GameRules/GameRules.tsx";
import { MatchGame } from "./MatchGame/MatchGame.tsx";
import { GameOptions } from "./GameOptions/GameOptions.tsx";
import { MatchGameParams } from "../types/matchGame.ts";
import { INITIAL_GAME_OPTIONS } from "../consts/gameSettings.ts";
import { useScores } from "../hooks/useScores.ts";

export const App = () => {
  const { scores, addScore } = useScores();

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
        <MatchGame
          options={gameOptions}
          handleEndGame={handleToggleGame}
          addScore={addScore}
        />
      )}
      {rulesState && (
        <Modal onClose={handleToggleModal}>
          <GameRules />
        </Modal>
      )}
    </>
  );
};
