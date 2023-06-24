import { useState } from "react";
import { Hero } from "./Hero/Hero.tsx";
import { Modal } from "./Modal/Modal.tsx";
import { GameRules } from "./GameRules/GameRules.tsx";
import { MatchGame } from "./MatchGame/MatchGame.tsx";
import { GameOptions } from "./GameOptions/GameOptions.tsx";
import { MatchGameParams } from "../types/matchGame.ts";
import { INITIAL_GAME_OPTIONS } from "../consts/gameSettings.ts";
import { useScores } from "../hooks/useScores.ts";
import { Layout } from "./Layout/Layout.tsx";
import { ScoresTable } from "./ScoresTable/ScoresTable.tsx";

export const App = () => {
  const { scores, addScore } = useScores();

  const [startGame, setStartGame] = useState<boolean>(false);
  const [rulesModal, setRulesModal] = useState<boolean>(false);
  const [scoresModal, setScoresModal] = useState<boolean>(false);
  const [gameOptions, setGameOptions] =
    useState<MatchGameParams>(INITIAL_GAME_OPTIONS);

  const handleToggleRulesModal = () => setRulesModal((prevState) => !prevState);
  const handleToggleScoresModal = () =>
    setScoresModal((prevState) => !prevState);
  const handleToggleGame = () => setStartGame((prevState) => !prevState);

  return (
    <Layout openScoresModal={handleToggleScoresModal}>
      <Hero openModal={handleToggleRulesModal} />

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
      {rulesModal && (
        <Modal onClose={handleToggleRulesModal}>
          <GameRules />
        </Modal>
      )}
      {scoresModal && (
        <Modal onClose={handleToggleScoresModal}>
          <ScoresTable scores={scores} />
        </Modal>
      )}
    </Layout>
  );
};
