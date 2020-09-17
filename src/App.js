import React from "react";
import "./App.css";
import Hello from "./Assignment_1/Hello.js";
import Atable from "./Assignment_2/Atable.js";
import EmTable from "./Assignment_3/EmTable";
import "fontsource-roboto";
import Calc from "./Assignment_4/Calc";
import Navigation from "./Assignment_6/Navigation";

function App() {
  return (
    <div className="App">
      <h1 className="Text-header">ASSIGNMENT 1</h1>
      <Hello />
      <h1 className="Text-header">ASSIGNMENT 2</h1>
      <Atable />
      <h1 className="Text-header">ASSIGNMENT 3</h1>
      <EmTable />
      <h1 className="Text-header">ASSIGNMENT 4</h1>
      <Calc />
      <h1 className="Text-header">ASSIGNMENT 6</h1>
      <Navigation />
    </div>
  );
}

export default App;
