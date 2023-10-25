import classNames from "classnames/bind";
import style from "./Tenzies.module.scss";

const cx = classNames.bind(style);

function Die(props) {
  const myStyles = {
    backgroundColor: props.isHeld ? "rgb(255 112 112)" : "white",
  };
  return (
    <div onClick={props.holdDice} className={cx("die-face")} style={myStyles}>
      <h2 className={cx("die-num")}>{props.value}</h2>
    </div>
  );
}

export default Die;
