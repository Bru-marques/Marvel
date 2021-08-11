import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import api from "../../services/comicsApi";
import "./style.css";

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

  let x = comics.sort(filterDate);
  console.log("filtro", x);

  //pagination
  const comicsPerPage = 10;
  const pagesVisited = pageNumber * comicsPerPage;

  const displayComics = comics
    .slice(pagesVisited, pagesVisited + comicsPerPage)
    .map((comic) => {
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
    });

  const pageCount = Math.ceil(comics.length / comicsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="homeContainer">
      <ul className="characterArea">{displayComics}</ul>
      <div className="paginationArea">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButton"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};
export default Comics;
