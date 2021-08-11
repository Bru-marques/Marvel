import React, { useEffect, useState } from "react";

import api from "../../services/comicsApi";
import "./style.css";

const Comics = () => {
  const [comics, setComics] = useState([]);

  //get data
  useEffect(() => {
    api
      .get()
      .then((response) => {
        setComics(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //working on sort comics
  const sortedComic = () => {
    comics.map((sortedComic) => {
      const date = sortedComic.dates[0].date;

      const year = date.slice(0, 4);
      const month = date.slice(5, 7);
      const day = date.slice(8, 10);

      const newDate = Number(year + month + day);

      console.log(newDate);

      sortedComic.sort = (a, b) => {
        return a.newDate > b.newDate ? -1 : 1;
      };
    });
  };
  console.log(sortedComic);

  return (
    <ul className="characterArea">
      {comics.map((comic) => {
        return (
          <li key={comic.id} className="characterItem">
            <img
              className="characterAreaImg"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={`${comic.name} cover`}
            />
            <div className="characterAreaNameArea">
              <span className="characterAreaName">{comic.title}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Comics;
