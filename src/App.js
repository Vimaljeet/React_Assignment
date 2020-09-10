import React from "react";
import "./App.css";
import Hello from "./Assignment_1/Hello.js";
import Atable from "./Assignment_2/Atable.js";
import EmTable from "./Assignment_3/EmTable";
import "fontsource-roboto";

function App() {
  return (
    <div className="App">
      <h1 className="Text-header">Assignment 1</h1>
      <Hello />
      <h1 className="Text-header">Assignment 2</h1>
      <Atable />
      <h1 className="Text-header">Assignment 3</h1>
      <EmTable />
    </div>
  );
}

export default App;
