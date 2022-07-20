import { GET_CARDS, GET_CARDS_ERROR, GET_CARDS_SUCCEEDED } from "../types/cardsTypes";

const initialState = {
  cards: {},
  categories: [],
  isLoading: false,
  isError: false
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS: {
      return {
        cards: {},
        categories: [],
        isLoading: true,
        isError: false
      }
    }
    case GET_CARDS_SUCCEEDED: {
      console.log("cards reducer", action)
      return {...state}
    }
    case GET_CARDS_ERROR: {
      return {
        ...state,
        isError: true,
      }
    }
    default:
      return state;
  }
};
