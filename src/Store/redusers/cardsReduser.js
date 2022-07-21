import { DELETE_CARD, GET_CARDS, GET_CARDS_ERROR, GET_CARDS_SUCCEEDED } from "../types/cardsTypes";

const initialState = {
  cards: [],
  categories: [],
  deleteCards: [],
  isLoading: false,
  isError: false
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS: {
      return {
        ...state,
        cards: [],
        deleteCards: [],
        categories: [],
        isLoading: true,
        isError: false
      }
    }
    case GET_CARDS_SUCCEEDED: {
      let categoriesObj = {}

      return {
        ...state,
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
    case DELETE_CARD: {
      console.log(state)
      return {
        ...state,
        deleteCards: [...state.deleteCards, action.card],
        cards: state.cards.map(card => {
          return card.image !== action.card ? card : false
        }).filter(Boolean)
      }
    }
    default:
      return state;
  }
};
