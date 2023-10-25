import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Header.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={cx("search")}>
      <div className={cx("search-text")}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Nhập tên game ..."
        />
        {searchTerm === "" ? (
          <Link to="/">
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            </button>
          </Link>
        ) : (
          <Link to={`/search?keyword=${searchTerm}`}>
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default SearchComponent;
