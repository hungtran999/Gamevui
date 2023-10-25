import classNames from "classnames/bind";
import style from "./Search.module.scss";
import { useLocation } from "react-router-dom";
const cx = classNames.bind(style);

function Search() {
  const a = [{ name: "Tic Tac Toe" }, { name: "Tenzies" }];
  const b = [{ name: "Tic Tac Toe" }];
  const c = [{ name: "Tenzies" }];

  const location = useLocation();
  const param = new URLSearchParams(location.search).get("keyword");
  const result = a.filter((item) => item.name.toLowerCase().includes(param.toLowerCase()));
  if (JSON.stringify(result) === JSON.stringify(b)){
    return (
      <div className={cx("home")}>
        <div className={cx("list")}>
          <h2 className={cx("text-list")}>{param}</h2>
          <div className={cx("list-game")}>
            
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
    
  } else if(JSON.stringify(result) === JSON.stringify(c)){
    return (
      <div className={cx("home")}>
        <div className={cx("list")}>
          <h2 className={cx("text-list")}>{param}</h2>
          <div className={cx("list-game")}>
            
          <div className={cx("game")}>
            <a className={cx("game-in")} href="/tenzies">
              <img src="dice.png" className={cx("game-img")} alt="" />
              <div className={cx("game-text")}>Tenzies</div>
            </a>
          </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={cx("home")}>
        <div className={cx("list")}>
          <h2 className={cx("text-list")}>{param}</h2>
          <div className={cx("list-game")}>
            
          <div className={cx("text")}> 
           Không tìm thấy kết quả cho {param}
          </div>
          </div>
        </div>
      </div>
    );
  }

  
}

export default Search;
