import { combineReducers, applyMiddleware } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import ReducerRessources from "./reducers/ReducerRessources";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  ressources: ReducerRessources,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
