import { legacy_createStore } from "@reduxjs/toolkit";
import React from "react";
import Reducer from "./Reducer";

const initialState = {
  counter: 10,
  todoList: [],
};
const Store = legacy_createStore(Reducer, initialState);

export default Store;
