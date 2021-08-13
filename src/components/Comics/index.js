import React, { useEffect, useState } from "react";

import Pagination from "../Pagination";
import ComicsDisplay from "../ComicsDisplay";
import Loader from "../Loader";

import api from "../../services/comicsApi";

const Comics = () => {
  const [comics, setComics] = useState([].slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  //get data
  useEffect(() => {
    api
      .get()
      .then((response) => {
        setComics(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //sort comics
  function filterDate(a, b) {
    return b.id - a.id;
  }

  let sortedComics = comics.sort(filterDate);
  console.log("filtro", sortedComics);

  //pagination
  const comicsPerPage = 10;
  const pagesVisited = pageNumber * comicsPerPage;

  const displayComics = comics
    .slice(pagesVisited, pagesVisited + comicsPerPage)
    .map((comic) => {
      const keyID = comic.id;
      const cover = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
      const info = comic.title;
      return (
        <ComicsDisplay comic={comic} cover={cover} info={info} key={keyID} />
      );
    });

  return (
    <div className="homeContainer">
      <ul className="characterArea">
        {sortedComics.length <= 0 ? <Loader /> : displayComics}
      </ul>
      <div className="paginationArea">
        <Pagination
          comics={comics}
          comicsPerPage={comicsPerPage}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};
export default Comics;
