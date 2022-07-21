import React from "react";
import { connect } from "react-redux";
import { changeSort, undoDeleteCards } from "../../Store/actions/cardsActions";
import "./Header.css";

const Header = (props) => {
  const { undoDeleteCards, sort, changeSort, deleteCardsData } = props;

  return (
    <header>
      <div className="container-sort">
        <p>Сортировать по: </p>
        <div className="sort" onClick={() => changeSort(0)}>
          <input type="radio" checked={sort === 0} /> Категории{" "}
        </div>
        <div className="sort" onClick={() => changeSort(1)}>
          <input type="radio" checked={sort === 1} /> Дате{" "}
        </div>
        <div className="sort" onClick={() => changeSort(2)}>
          <input type="radio" checked={sort === 2} /> Названию{" "}
        </div>
        <div className="sort" onClick={() => changeSort(3)}>
          <input type="radio" checked={sort === 3} /> Размеру{" "}
        </div>
      </div>
      <div className="container-button">
        <button onClick={undoDeleteCards} disabled={!deleteCardsData.length}>
          Возврат к полному набору
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  deleteCardsData: state.cardsReducer.deleteCards,
  sort: state.cardsReducer.sort,
});

const mapDispatchToProps = (dispatch) => ({
  undoDeleteCards: () => dispatch(undoDeleteCards()),
  changeSort: (index) => dispatch(changeSort(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
