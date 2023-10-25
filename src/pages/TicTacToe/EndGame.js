import React from "react";
import classNames from "classnames/bind";
import style from "./TicTacToe.module.scss";

const cx = classNames.bind(style);

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className={cx("end-game-screen")}>
      {!draw && (
        <span className={cx("win-text")}>
          {player ? "💛 Chiến thắng" : "❌ Chiến thắng"}
        </span>
      )}
      {draw && <span className={cx("win-text")}>Hòa</span>}

      <span className={cx("win-history-end")}>
        ❌ Thắng: {winCount.A}
        <br />
        💛 Thắng: {winCount.B}
      </span>

      <button className={cx("btn")} onClick={restartGame}>
        Tiếp tục
      </button>
      <button className={cx("btn")} onClick={clearHistory}>
        Xóa lịch sử
      </button>
    </div>
  );
}

export default EndGame;
