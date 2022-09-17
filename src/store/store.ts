import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import charactersReducer from "../reducer/characteresReducer";

const root = combineReducers({
  characters: charactersReducer,
});

export type IRootState = ReturnType<typeof root>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

export const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk))
);
