import React from "react";
import classNames from "classnames/bind";
import style from "./TicTacToe.module.scss";
import App from "./TicTacToe";

const cx = classNames.bind(style);

function TicTacToe() {
  return (
    <div className={cx("app")}>
      <App />
    </div>
  );
}

export default TicTacToe;
