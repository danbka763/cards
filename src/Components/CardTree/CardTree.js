import React, { useEffect, useState } from "react";
import { getDate } from "../../helpers/date";
import { BASE_URL } from "../../services/API";
import CModalImage from "../../ui-kit/CModalImage";
import "./CardTree.css";

const CardTree = (props) => {
  const { card, sort, deleteCardAction } = props;

  const [tree, changeTree] = useState(false);
  const [modal, handleModal] = useState(false);

  useEffect(() => {
    changeTree(false);
  }, [sort]);

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        handleModal(false);
      }
    });
  }, []);

  const name = card.image.slice(
    card.image.indexOf("/") + 1,
    card.image.indexOf(".")
  );

  return (
    <ul key={card.image}>
      <li onClick={() => changeTree(!tree)}>{name}</li>
      {tree && (
        <ul className="content">
          <img
            src={`${BASE_URL}${card.image}`}
            alt={card.image}
            onClick={() => handleModal(!modal)}
          />
          <p>{getDate(card.timestamp)}</p>

          <button
            onClick={() => deleteCardAction(card.image)}
            className="delete-item"
          >
            Удалить
          </button>

          {modal && (
            <CModalImage image={card.image} handleModal={handleModal} />
          )}
        </ul>
      )}
    </ul>
  );
};

export default CardTree;
