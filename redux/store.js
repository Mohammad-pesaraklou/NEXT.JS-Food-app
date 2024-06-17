import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterHandler";

const store = configureStore({
  reducer: { counter: counterReducer },
});

export default store;
