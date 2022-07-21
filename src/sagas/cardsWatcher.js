import { put, takeLatest } from "redux-saga/effects";
import { GET } from "../services/API";
import {
  getCards,
  getCardsError,
  getCardsSucceeded,
} from "../Store/actions/cardsActions";
import { GET_CARDS, UNDO_DELETE_CARDS } from "../Store/types/cardsTypes";

function* getCardsSaga() {
  try {
    const data = yield GET("catalog.json");

    yield put(getCardsSucceeded(data));
  } catch (error) {
    console.log("error", error);
    yield put(getCardsError());
  }
}

function* undoSaga() {
  try {
    yield put(getCards());
  } catch (error) {
    console.log("error", error);
  }
}

export function* cardsWather() {
  yield takeLatest(GET_CARDS, getCardsSaga);
  yield takeLatest(UNDO_DELETE_CARDS, undoSaga);
}
