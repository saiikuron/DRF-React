import React from "react";
import Path from "./components/Path";
import Header from "./components/Header";
import "./styles/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <br />
        <Path />
      </div>
    </div>
  );
}

export default App;
