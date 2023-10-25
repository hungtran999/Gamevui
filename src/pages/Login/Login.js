import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import style from "./Login.module.scss";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(style);

function Login() {
  return (
    <div className={cx("login-page")}>
      <div className={cx("form")}>
        <form className={cx("login-form")} method="post">
          <h2 className={cx("title")}>Đăng nhập</h2>
          <input type="text" placeholder="Email" required />
          <div className={cx("input-eye")}>
            <input type="password" placeholder="Mật khẩu" required />
            <FontAwesomeIcon icon={faEyeSlash} className={cx("icon")} />
          </div>
          <a className={cx("btn")} href="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Đăng nhập
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
