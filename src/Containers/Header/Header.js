import React from "react";
import { connect } from "react-redux";
import Performance from "../../Components/Performance";
import Sort from "../../Components/Sort";
import {
  changeSort,
  changeVisibleCards,
  undoDeleteCards,
} from "../../Store/actions/cardsActions";
import "./Header.css";

const Header = (props) => {
  const {
    undoDeleteCards,
    sort,
    changeSort,
    deleteCardsData,
    graphic,
    changeVisible,
  } = props;

  const performance = (
    <Performance graphic={graphic} changeVisible={changeVisible} />
  );

  return (
    <header>
      <Sort sort={sort} changeSort={changeSort} />
      {performance}
      <div className="container-button">
        {performance}
        <button onClick={undoDeleteCards} disabled={!deleteCardsData.length}>
          Возврат к полному набору
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  deleteCardsData: state.cardsReducer.deleteCards,
  graphic: state.cardsReducer.graphic,
  sort: state.cardsReducer.sort,
});

const mapDispatchToProps = (dispatch) => ({
  undoDeleteCards: () => dispatch(undoDeleteCards()),
  changeSort: (index) => dispatch(changeSort(index)),
  changeVisible: (visible) => dispatch(changeVisibleCards(visible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
