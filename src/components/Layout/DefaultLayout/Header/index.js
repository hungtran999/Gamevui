import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Header.module.scss";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import SearchComponent from "./SearchComponent";

const cx = classNames.bind(style);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("top-page")}>
        <div className={cx("logo")}>
          <a className={cx("logo-in")} href="/">
            <img src="logo.png" className={cx("logo-img")} alt="" />
          </a>
        </div>
        <SearchComponent />
        <div className={cx("profile")}>
          <a href="/login">
            <FontAwesomeIcon icon={faUserCheck} size="xl" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
