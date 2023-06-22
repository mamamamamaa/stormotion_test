import { MatchGame } from "./MatchGame/MatchGame.tsx";

export const App = () => {
  return (
    <>
      <section>
        <h1 className="text-center font-bold text-2xl">
          Welcome to Match Game
        </h1>
        <button
          type="button"
          className="block mx-auto font-normal border-b py-1 text-gray-500"
        >
          Rules
        </button>
      </section>
      {/*<MatchGame />*/}
    </>
  );
};
