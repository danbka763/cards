import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../../Components/Card/Card";
import { getCards } from "../../Store/actions/cardsActions";
import './Cards.css'

const CardsCollection = ({cards, page}) => {
  return cards.slice(20*page, 20*(page+1)).map((card, i) => <Card key={i} {...card} />)
}

const Cards = (props) => {
  const { cardsData, getCardsAction, isLoading } = props;

  const [page] = useState(0)

  // const pages = Math.ceil(cardsData.cards.length / 20) - 1

  useEffect(() => {
    getCardsAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <></>
  }

  console.log(cardsData);
  return (
    <main>
      <div className="collection">
        <CardsCollection cards={cardsData.cards} page={page} />
      </div>
      <div className="pagination"></div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  cardsData: state.cardsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getCardsAction: () => dispatch(getCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
