import { GET_CARDS, GET_CARDS_ERROR, GET_CARDS_SUCCEEDED } from "../types/cardsTypes";

export const getCards = () => ({
  type: GET_CARDS
});

export const getCardsSucceeded = cards => ({
  type: GET_CARDS_SUCCEEDED,
  cards,
});

export const getCardsError = payload => ({
  type: GET_CARDS_ERROR,
  ...payload,
});