import classNames from "classnames/bind";
import style from "./Home.module.scss";

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx("home")}>
      <div className={cx("list")}>
        <h2 className={cx("text-list")}>Game vui</h2>
        <div className={cx("list-game")}>
          <div className={cx("game")}>
            <a className={cx("game-in")} href="/tenzies">
              <img src="dice.png" className={cx("game-img")} alt="" />
              <div className={cx("game-text")}>Tenzies</div>
            </a>
          </div>
          <div className={cx("game")}>
            <a className={cx("game-in")} href="/tictactoe">
              <img src="caro.jpg" className={cx("game-img")} alt="" />
              <div className={cx("game-text")}>Tic Tac Toe</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
