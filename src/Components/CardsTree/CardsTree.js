import React, { useState } from "react";
import CardTree from "../CardTree";
import "./CardsTree.css";

const CategoryTree = (props) => {
  const { category, categoriesObj, sort, deleteCardAction } = props;

  const [tree, changeTree] = useState(true);

  return (
    <ul key={category}>
      <li onClick={() => changeTree(!tree)}>{category}</li>
      {tree && (
        <ul className="container">
          {categoriesObj[category].map((card) => (
            <CardTree
              sort={sort}
              key={card.image}
              card={card}
              deleteCardAction={deleteCardAction}
            />
          ))}
        </ul>
      )}
    </ul>
  );
};

const CardsTree = (props) => {
  const { categories, categoriesObj, sort, deleteCardAction } = props;

  const [tree, changeTree] = useState(true);

  return (
    <ul className="start-list">
      <li onClick={() => changeTree(!tree)}>Категории</li>
      {tree &&
        categories.map((category) => {
          return (
            <CategoryTree
              key={category}
              category={category}
              categoriesObj={categoriesObj}
              sort={sort}
              deleteCardAction={deleteCardAction}
            />
          );
        })}
    </ul>
  );
};

export default CardsTree;
