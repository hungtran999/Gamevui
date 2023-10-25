import React from "react";
import classNames from "classnames/bind";
import style from "./TicTacToe.module.scss";

const cx = classNames.bind(style);

function Square({ clickedArray, handleClick }) {
  return (
    <div className={cx("board")}>
      {clickedArray.map((item, index) => {
        if (item === "") {
          return (
            <div
              key={index}
              className={cx("square")}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          );
        } else {
          return (
            <div key={index} className={cx("square-clicked")}>
              {item}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Square;
