import React from "react";
import { BASE_URL } from "../../services/API";

const CModalImage = (props) => {
  const { image, handleModal } = props;

  return (
    <div className="modal" onClick={() => handleModal(false)}>
      <span>╳</span>
      <img src={`${BASE_URL}${image}`} alt={image} onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default CModalImage;
