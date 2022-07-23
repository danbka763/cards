import React, { useState } from "react";

const PerformanceDropDown = (props) => {
  const { graphic, changeVisible } = props;

  const [check, changeCheck] = useState(false);

  return (
    <ul>
      <li onClick={() => changeCheck(!check)}>
        Представление
        <i className={`arrow ${check ? "down" : "right"}`} />
      </li>
      {check && (
        <ul className="container-drop">
          <div
            className="performance"
            onClick={() => {
              changeCheck(!check);
              changeVisible(true);
            }}
          >
            <input type="radio" checked={graphic} readOnly /> Карточки
          </div>
          <div
            className="performance"
            onClick={() => {
              changeCheck(!check);
              changeVisible(false);
            }}
          >
            <input type="radio" checked={!graphic} readOnly /> Древовидное
          </div>
        </ul>
      )}
    </ul>
  );
};

export default PerformanceDropDown;
