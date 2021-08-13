import React from "react";

import "./style.css";

const ComicsDisplay = ({ comic, cover, info, keyID }) => {
  return (
    <>
      <li key={keyID} className="characterItem">
        <img
          className="characterAreaImg"
          src={cover}
          alt={`${comic.name} cover`}
        />
        <div className="characterAreaNameArea">
          <span className="characterAreaName">{info}</span>
        </div>
      </li>
    </>
  );
};

export default ComicsDisplay;
