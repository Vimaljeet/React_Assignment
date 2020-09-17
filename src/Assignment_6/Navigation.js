import React, { Component } from "react";
import "./Navigation.css";
import { BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";

const Tabs = (params) => {
  return <h1>You chose {params.tab}</h1>;
};

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav
            style={{
              display: "grid",
              gridTemplateColumns: "100% 100%",
              alighItems: "center",
              padding: "8px",
            }}
          >
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "0",
                padding: "0",
                overflow: "hidden",
              }}
            >
              <li>
                <NavLink to="/" exact activeStyle={{ color: "green" }}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" exact activeStyle={{ color: "green" }}>
                  PROJECT
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" exact activeStyle={{ color: "green" }}>
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeStyle={{ color: "green" }}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>
          <Route
            path="/"
            exact
            strict
            render={() => {
              return <h1>You chose HOME</h1>;
            }}
          />
          <Route
            path="/project"
            exact
            strict
            render={() => {
              return <h1>You chose PROJECTS</h1>;
            }}
          />
          <Route
            path="/services"
            exact
            strict
            render={() => {
              return <h1>You chose SERVICES</h1>;
            }}
          />
          <Route
            path="/contact"
            exact
            strict
            render={() => {
              return <h1>You chose CONTACT</h1>;
            }}
          />
          <Route
            path="/assignment_6/:tab"
            exact
            strict
            render={({ match }) =>
              this.state.loggedIn ? (
                <Tabs tab={match.params.tab} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default Navigation;
