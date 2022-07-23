import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReduser";

export const rootReducer = combineReducers({
  cardsReducer,
});
