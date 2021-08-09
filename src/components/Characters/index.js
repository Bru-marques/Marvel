import React, { useEffect, useState } from "react";

import api from "../../services/marvelApi";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  //Fetch data from marvelApi and change the state
  useEffect(() => {
    api
      .get()
      .then((response) => {
        setCharacters(response.data.data.results);
        console.log(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("segundo", characters);
  return <div>hi</div>;
};
export default Characters;
