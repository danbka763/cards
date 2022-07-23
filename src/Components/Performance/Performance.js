import React from "react";
import PerformanceDropDown from "../PerformanceDropDown";

const Performance = (props) => {
  const { graphic, changeVisible } = props;

  return (
    <div className="container-performance">
      <p className="header-radio-buttons">Представление: </p>
      <div className="radio-buttons">
        <div className="performance" onClick={() => changeVisible(true)}>
          <input type="radio" checked={graphic} readOnly /> Карточки{" "}
        </div>
        <div className="performance" onClick={() => changeVisible(false)}>
          <input type="radio" checked={!graphic} readOnly /> Древовидное{" "}
        </div>
      </div>
      <div className="drop-down">
        <PerformanceDropDown graphic={graphic} changeVisible={changeVisible} />
      </div>
    </div>
  );
};

export default Performance;
