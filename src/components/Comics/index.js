import React, { useEffect, useState } from "react";

import api from "../../services/marvelApi";
import "./style.css";

const Comics = () => {
  const [comics, setComics] = useState([]);
  //Fetch data from marvelApi and change the state
  useEffect(() => {
    api
      .get()
      .then((response) => {
        setComics(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(comics);

  return (
    <ul className="characterArea">
      {comics.map((comic) => {
        return (
          <li key={comic.id} className="characterItem">
            <img
              className="characterArea--img"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={`${comic.name} cover`}
            />
            <div className="characterArea--nameArea">
              <span className="characterArea--name">{comic.title}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Comics;
