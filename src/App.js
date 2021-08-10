import React from "react";

import Header from "./components/Header";
import Characters from "./components/Characters";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section className="listContainer">
        <Characters />
      </section>
    </>
  );
}

export default App;
