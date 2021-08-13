import React from "react";
import marvel_logo from "../../assets/marvel_logo.png";

import "./style.css";

const Header = ({ characters, handleOnChange }) => {
  return (
    <div className="headerArea">
      <div className="header">
        <img src={marvel_logo} alt="Marvel logo" className="marvel_logo" />
      </div>
      <form className="searchInput">
        <input
          className="input"
          type="search"
          placeholder="character"
          value={characters}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};
export default Header;
