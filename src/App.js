import React from "react";

import Header from "./components/Header";
import Comics from "./components/Comics";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section className="listContainer">
        <Comics />
      </section>
    </>
  );
}

export default App;
