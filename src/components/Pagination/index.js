import React from "react";
import ReactPaginate from "react-paginate";

import "./style.css";

const Pagination = ({ comics, comicsPerPage, setPageNumber }) => {
  const pageCount = Math.ceil(comics.length / comicsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
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
  );
};

export default Pagination;
