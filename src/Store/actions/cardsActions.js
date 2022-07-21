import {
  CHANGE_SORT,
  DELETE_CARD,
  GET_CARDS,
  GET_CARDS_ERROR,
  GET_CARDS_SUCCEEDED,
  UNDO_DELETE_CARDS,
} from "../types/cardsTypes";

export const getCards = () => ({
  type: GET_CARDS,
});

export const getCardsSucceeded = (cards) => ({
  type: GET_CARDS_SUCCEEDED,
  cards,
});

export const getCardsError = (err) => ({
  type: GET_CARDS_ERROR,
  ...err,
});

export const deleteCard = (card) => ({
  type: DELETE_CARD,
  card,
});

export const undoDeleteCards = () => ({
  type: UNDO_DELETE_CARDS,
});

export const changeSort = (index) => ({
  type: CHANGE_SORT,
  index,
});
