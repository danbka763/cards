import { all } from "redux-saga/effects";
import { cardsWather } from "./cardsWatcher";

export default function* rootWatcher() {
  yield all([cardsWather()]);
}
