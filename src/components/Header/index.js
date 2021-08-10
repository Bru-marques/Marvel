import React, { useState, useEffect } from "react";
import marvel_logo from "../../assets/marvel_logo.png";
import SearchInput from "../SearchInput";

import "./style.css";
import api from "../../services/charactersApi";

const Header = () => {
  const [characters, setCharacters] = useState("");
  const [charSearch, setCharSearch] = useState(characters);
  const [searchResults, setSearchResults] = useState([]);

  //wait 1 sec to the user type the search
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCharSearch(characters);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [characters]);

  //
  useEffect(() => {
    const search = () => {
      api
        .get()
        .then((response) => {
          setSearchResults(response.data.data.results);
        })
        .catch((err) => console.log(err));
    };
    if (charSearch) {
      search();
    }
  }, [charSearch]);
  console.log(searchResults);
  console.log("character", charSearch);

  //auxiliary function to map the typed term
  const renderResults = searchResults.map((searchResult) => {
    return (
      <div key={searchResult.id}>
        <ul>
          <li>{searchResult.name}</li>
        </ul>
      </div>
    );
  });

  return (
    <div className="headerArea">
      <div className="header">
        <img src={marvel_logo} alt="Marvel logo" className="marvel_logo" />
      </div>

      <div className="searchInput">
        <SearchInput value={characters} onChange={setCharacters} />
      </div>
      <div>{renderResults}</div>
    </div>
  );
};

export default Header;
