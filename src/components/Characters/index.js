import React, { useEffect, useState } from "react";

import api from "../../services/marvelApi";
import "./style.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  //Fetch data from marvelApi and change the state
  useEffect(() => {
    api
      .get()
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(characters);

  return (
    <ul className="characterArea">
      {characters.map((character) => {
        return (
          <li key={character.id} className="characterItem">
            <img
              className="characterArea--img"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={`${character.name} cover`}
            />
            <div className="characterArea--nameArea">
              <span className="characterArea--name">{character.name}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Characters;
