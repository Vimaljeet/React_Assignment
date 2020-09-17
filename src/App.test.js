import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Func from "./components/Func";
import TodoList from "./components/TodoList";

test("Func is defined", () => {
  expect(TodoList()).toBeDefined();
});
