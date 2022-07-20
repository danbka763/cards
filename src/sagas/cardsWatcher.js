import { put, takeLatest } from "redux-saga/effects";
import { GET } from "../services/API";
import { getCardsError, getCardsSucceeded } from "../Store/actions/cardsActions";
import { GET_CARDS } from "../Store/types/cardsTypes";


function* getCardsSaga() {
  try {
    const data = yield GET('catalog.json');
    
    yield put(getCardsSucceeded(data));
  } catch (error) {
    console.log('error', error);
    yield put(getCardsError());
  }
}


export function* cardsWather() {
  yield takeLatest(GET_CARDS, getCardsSaga);
}