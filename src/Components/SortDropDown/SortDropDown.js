import React, { useState } from "react";

const SortDropDown = (props) => {
  const { sort, changeSort } = props;

  const [check, changeCheck] = useState(false);

  return (
    <ul>
      <li onClick={() => changeCheck(!check)}>
        Сортировать по
        <i class={`arrow ${check ? "down" : "right"}`} />
      </li>
      {check && (
        <ul className="container-drop">
          <div
            className="sort"
            onClick={() => {
              changeCheck(!check);
              changeSort(0);
            }}
          >
            <input type="radio" checked={sort === 0} readOnly /> Категории
          </div>
          <div
            className="sort"
            onClick={() => {
              changeCheck(!check);
              changeSort(1);
            }}
          >
            <input type="radio" checked={sort === 1} readOnly /> Дате
          </div>
          <div
            className="sort"
            onClick={() => {
              changeCheck(!check);
              changeSort(2);
            }}
          >
            <input type="radio" checked={sort === 2} readOnly /> Названию
          </div>
          <div
            className="sort"
            onClick={() => {
              changeCheck(!check);
              changeSort(3);
            }}
          >
            <input type="radio" checked={sort === 3} readOnly /> Размеру
          </div>
        </ul>
      )}
    </ul>
  );
};

export default SortDropDown;
