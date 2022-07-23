import React from "react";
import SortDropDown from "../SortDropDown";

const Sort = (props) => {
  const { sort, changeSort } = props;

  return (
    <div className="container-sort">
      <p className="header-radio-buttons">Сортировать по: </p>
      <div className="radio-buttons">
        <div className="sort" onClick={() => changeSort(0)}>
          <input type="radio" checked={sort === 0} readOnly /> Категории{" "}
        </div>
        <div className="sort" onClick={() => changeSort(1)}>
          <input type="radio" checked={sort === 1} readOnly /> Дате{" "}
        </div>
        <div className="sort" onClick={() => changeSort(2)}>
          <input type="radio" checked={sort === 2} readOnly /> Названию{" "}
        </div>
        <div className="sort" onClick={() => changeSort(3)}>
          <input type="radio" checked={sort === 3} readOnly /> Размеру{" "}
        </div>
      </div>
      <div className="drop-down">
        <SortDropDown sort={sort} changeSort={changeSort} />
      </div>
    </div>
  );
};

export default Sort;
