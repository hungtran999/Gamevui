import React from "react";
import classNames from "classnames/bind";
import style from "./Tenzies.module.scss";

import App from "./Tenzies";

const cx = classNames.bind(style);

function Tenzies() {
  return (
    <div className={cx("app")}>
      <div className={cx("title")}>Tenzies</div>
      <App />
    </div>
  );
}

export default Tenzies;
