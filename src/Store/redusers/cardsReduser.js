import { GET_CARDS, GET_CARDS_ERROR, GET_CARDS_SUCCEEDED } from "../types/cardsTypes";

const initialState = {
  cards: [],
  categories: [],
  isLoading: false,
  isError: false
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS: {
      return {
        cards: [],
        categories: [],
        isLoading: true,
        isError: false
      }
    }
    case GET_CARDS_SUCCEEDED: {
      let categoriesObj = {}

      return {
        cards: action.cards,
        categories: action.cards.map((obj) => {
          if (!categoriesObj[obj.category]) {
            categoriesObj[obj.category] = 1
            return obj.category
          } else {
            return false
          }
        }).filter(Boolean),
        isLoading: false,
        isError: false
      }
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
