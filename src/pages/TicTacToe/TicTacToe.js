import React, { useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";
import classNames from "classnames/bind";
import style from "./TicTacToe.module.scss";

const cx = classNames.bind(style);

const INITIAL = "";
const A = "❌";
const B = "💛";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setwinCount] = useState({ A: 0, B: 0 });

  function isGameOver() {
    if (!gameFinished) {
      // X
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === A &&
          grid[winCombination[i][1]] === A &&
          grid[winCombination[i][2]] === A
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, A: winCount.A + 1 });
          return;
        }
      }

      // O
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === B &&
          grid[winCombination[i][1]] === B &&
          grid[winCombination[i][2]] === B
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, B: winCount.B + 1 });
          return;
        }
      }

      // Hoa
      if (!grid.includes(INITIAL)) {
        setDraw(true);
        setGameFinished(true);
      }
    }
  }

  function restartGame() {
    setGrid(Array(9).fill(INITIAL));
    setGameFinished(false);
    setDraw(false);
  }

  function clearHistory() {
    setwinCount({ A: 0, B: 0 });
    restartGame();
  }

  isGameOver();

  function handleClick(id) {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return A;
          } else {
            return B;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }

  return (
    <div>
      <div className={cx("game-title")}>Tic Tac Toe</div>

      <div className={cx("game")}>
        <span className={cx("win-history")}>
          ❌ Thắng: {winCount.A}
          <br />
          💛 Thắng: {winCount.B}
        </span>
        {gameFinished && (
          <EndGame
            winCount={winCount}
            restartGame={restartGame}
            player={player}
            draw={draw}
            clearHistory={clearHistory}
          />
        )}
        <Square clickedArray={grid} handleClick={handleClick} />
        <div className={cx("turn")}>
          {player ? <div>Lượt ❌</div> : <div>Lượt 💛</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
