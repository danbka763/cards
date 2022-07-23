import { cardsSort } from "../../helpers/cardsSort";
import {
  addBannedCard,
  cleanBannedCard,
  getBannedCard,
} from "../../helpers/localstorage";
import {
  CHANGE_SORT,
  CHANGE_VISIBLE_CARDS,
  DELETE_CARD,
  GET_CARDS,
  GET_CARDS_ERROR,
  GET_CARDS_SUCCEEDED,
  UNDO_DELETE_CARDS,
} from "../types/cardsTypes";

const initialState = {
  cards: [],
  categories: [],
  deleteCards: [],
  graphic: true,
  sort: 0,
  isLoading: false,
  isError: false,
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS: {
      return {
        ...state,
        cards: [],
        deleteCards: getBannedCard(),
        categories: [],
        isLoading: true,
        isError: false,
      };
    }
    case GET_CARDS_SUCCEEDED: {
      let categoriesObj = {};

      const bannedCard = getBannedCard();

      const cards = action.cards
        .map((obj) => {
          if (bannedCard.indexOf(obj.image) > -1) {
            return false;
          } else {
            return obj;
          }
        })
        .filter(Boolean);

      return {
        ...state,
        cards: cardsSort(state.sort, cards),
        categories: action.cards
          .map((obj) => {
            if (!categoriesObj[obj.category]) {
              categoriesObj[obj.category] = 1;
              return obj.category;
            } else {
              return false;
            }
          })
          .filter(Boolean),
        isLoading: false,
        isError: false,
      };
    }
    case GET_CARDS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case DELETE_CARD: {
      addBannedCard(action.card);

      return {
        ...state,
        deleteCards: [...state.deleteCards, action.card],
        cards: state.cards
          .map((card) => {
            return card.image !== action.card ? card : false;
          })
          .filter(Boolean),
      };
    }
    case UNDO_DELETE_CARDS: {
      cleanBannedCard();
      return state;
    }
    case CHANGE_SORT: {
      return {
        ...state,
        sort: action.index,
        cards: cardsSort(action.index, state.cards),
      };
    }
    case CHANGE_VISIBLE_CARDS: {
      console.log(action);
      return {
        ...state,
        graphic: action.visible,
      };
    }
    default:
      return state;
  }
};
