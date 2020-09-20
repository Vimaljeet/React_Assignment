import React from "react";
import { Component } from "react";
import "./App.css";
import Hello from "./Assignment_1/Hello.js";
import Atable from "./Assignment_2/Atable.js";
import EmTable from "./Assignment_3/EmTable";
import "fontsource-roboto";
import Calc from "./Assignment_4/Calc";
import KeypadCom from "./Assignment_4/KeypadCom";
import Clock from "./Assignment_5/Clock";
import Navigation from "./Assignment_6/Navigation";
import Header from "./Assignment_7/Header";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="Text-header">ASSIGNMENT 1</h1>
        <Hello />
        <br></br>
        <br></br>
        <h1 className="Text-header">ASSIGNMENT 2</h1>
        <Atable />
        <br></br>
        <br></br>
        <h1 className="Text-header">ASSIGNMENT 3</h1>
        <EmTable />
        <br></br>
        <br></br>
        <h1 className="Text-header">ASSIGNMENT 4</h1>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <Calc result={this.state.result} />
          <KeypadCom onClick={this.onClick} />
        </div>
        <br></br>
        <br></br>
        <h1 className="Text-header">ASSIGNMENT 5</h1>
        <Clock />
        <br></br>
        <br></br>
        <h1 className="Text-header">ASSIGNMENT 6</h1>
        <Navigation />
        <br></br>
        <br></br>
        <h1 className="Text-header">ASSIGNMENT 7</h1>
        <Header />
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default App;
