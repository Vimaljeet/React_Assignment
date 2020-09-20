import React, { useState } from "react";
import "./Clock.css";

var Digitalclock = () => {
  const sysDate = new Date().toLocaleTimeString();
  const [state, setState] = useState(sysDate);
  const updateTime = () => {
    const sysDate = new Date().toLocaleTimeString();
    setState(sysDate);
  };

  setInterval(updateTime, 100);
  function DateFun() {
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div id="clockheader">
      <div id="dgText">
        <h2>Digital Clock</h2>
      </div>
      <div id="togglediv">
        <button variant="warning" onClick={DateFun}>
          Date
        </button>
      </div>
      <div id="clockDiv">
        <div id="roundclock">
          <h3>{`${state}`}</h3>
          <h5>
            <div id="hide">{`${new Date().toLocaleDateString()}`}</div>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default Digitalclock;
