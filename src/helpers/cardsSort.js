const variable = ["category", "timestamp", "image", "filesize"];

export const cardsSort = (sortVariant, cards) => {

  switch (sortVariant) {
    case 0: {
      return cards.sort((card1, card2) =>
        card1[variable[sortVariant]].localeCompare(card2[variable[sortVariant]])
      );
    }
    case 2: {
      return cards.sort((card1, card2) =>
        card1[variable[sortVariant]]
          .slice(
            card1[variable[sortVariant]].indexOf("/") + 1,
            card1[variable[sortVariant]].indexOf(".")
          )
          .localeCompare(
            card2[variable[sortVariant]].slice(
              card2[variable[sortVariant]].indexOf("/") + 1,
              card2[variable[sortVariant]].indexOf(".")
            )
          )
      );
    }
    case 1:
    case 3: {
      return cards.sort(
        (card1, card2) =>
          card1[variable[sortVariant]] - card2[variable[sortVariant]]
      );
    }
    default: {
      return []
    }
  }
};
