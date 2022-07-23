import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { animateScroll } from "react-scroll";
import Card from "../../Components/Card";
import CardsTree from "../../Components/CardsTree";
import Pagination from "../../Components/Pagination";
import { deleteCard, getCards } from "../../Store/actions/cardsActions";
import "./Cards.css";
import spinner from "../../assets/loaders/Spinner-5.gif";

const CardsCollectionGraphic = ({
  cards,
  page,
  countItems,
  deleteCardAction,
}) => {
  cards = cards.slice(countItems * page, countItems * (page + 1));

  if (cards.length < countItems) {
    for (let i = cards.length; i < countItems; i++) {
      cards.push({ empty: true });
    }
  }

  return cards.map((card, i) => (
    <Card key={i} {...card} deleteCardAction={deleteCardAction} />
  ));
};

const CardsCollectionTree = ({ cards, deleteCardAction, categories, sort }) => {
  let categoriesObj = {};

  categories.map((category) => (categoriesObj[category] = []));
  cards.map((card) => categoriesObj[card.category].push(card));

  return (
    <CardsTree
      categories={categories}
      categoriesObj={categoriesObj}
      deleteCardAction={deleteCardAction}
      sort={sort}
    />
  );
};

const Cards = (props) => {
  const { cardsData, getCardsAction, deleteCardAction } = props;

  const [page, editPage] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  useEffect(() => {
    getCardsAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (cardsData.isLoading) {
    return (
      <main>
        <div className="loader">
          <img src={spinner} alt="spinner" />
        </div>
      </main>
    );
  }

  const handlePage = (page) => {
    animateScroll.scrollToTop();
    editPage(page);
  };

  const countItemsInPage = Math.floor(width / 290) * 4;
  const pages = Math.ceil(cardsData.cards.length / countItemsInPage) - 1;

  if (page > pages && pages !== -1) {
    editPage(pages);
  }

  return (
    <main>
      <div className={`collection ${!cardsData.graphic && "tree"}`}>
        {cardsData.graphic ? (
          <CardsCollectionGraphic
            cards={cardsData.cards}
            page={page}
            countItems={countItemsInPage}
            deleteCardAction={deleteCardAction}
          />
        ) : (
          <CardsCollectionTree
            cards={cardsData.cards}
            deleteCardAction={deleteCardAction}
            categories={cardsData.categories}
            sort={cardsData.sort}
          />
        )}
      </div>

      {cardsData.graphic && (
        <Pagination page={page} pages={pages} handlePage={handlePage} />
      )}
    </main>
  );
};

const mapStateToProps = (state) => ({
  cardsData: state.cardsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getCardsAction: () => dispatch(getCards()),
  deleteCardAction: (card) => dispatch(deleteCard(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
