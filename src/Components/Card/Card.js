import React, { useEffect, useState } from "react";
import { getDate } from "../../helpers/date";
import { BASE_URL } from "../../services/API";
import CModalImage from "../../ui-kit/CModalImage";
import "./Card.css";

const Card = (props) => {
  const { image, category, deleteCardAction, timestamp, empty } = props;

  const [modal, handleModal] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        handleModal(false);
      }
    });
  }, []);

  if (empty) {
    return <div className="card empty"></div>;
  }

  const name = image.slice(image.indexOf("/") + 1, image.indexOf("."));

  return (
    <div className="card">
      <div className="top_card">
        <div className="delete_card" onClick={() => deleteCardAction(image)}>
          ╳
        </div>
      </div>
      <div className="content" onClick={() => handleModal(!modal)}>
        <div className="img_container">
          <img src={`${BASE_URL}${image}`} alt={image} />
        </div>
        <h4>Name</h4>
        <p className="name">{name}</p>
        <h4>Category</h4>
        <p>{category}</p>
        <h4>Date</h4>
        <p>{getDate(timestamp)}</p>
      </div>
      {modal && <CModalImage image={image} handleModal={handleModal} />}
    </div>
  );
};

export default Card;
