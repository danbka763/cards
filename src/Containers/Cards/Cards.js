import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { animateScroll } from "react-scroll";
import Card from "../../Components/Card";
import Pagination from "../../Components/Pagination";
import { deleteCard, getCards } from "../../Store/actions/cardsActions";
import "./Cards.css";

const CardsCollection = ({ cards, page, countItems, deleteCardAction }) => {
  return cards
    .slice(countItems * page, countItems * (page + 1))
    .map((card, i) => (
      <Card key={i} {...card} deleteCardAction={deleteCardAction} />
    ));
};

const Cards = (props) => {
  const { cardsData, getCardsAction, isLoading, deleteCardAction } = props;

  const [page, editPage] = useState(0);

  const countItemsInPage = 20;
  const pages = Math.ceil(cardsData.cards.length / countItemsInPage) - 1;

  useEffect(() => {
    getCardsAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePage = (page) => {
    animateScroll.scrollToTop();
    editPage(page);
  };

  if (isLoading) {
    return <></>;
  }

  console.log(cardsData);
  return (
    <main>
      <div className="collection">
        <CardsCollection
          cards={cardsData.cards}
          page={page}
          countItems={countItemsInPage}
          deleteCardAction={deleteCardAction}
        />
      </div>

      <Pagination page={page} pages={pages} handlePage={handlePage} />
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
