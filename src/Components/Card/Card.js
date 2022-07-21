import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../services/API";
import CModalImage from "../../ui-kit/CModalImage";
import './Card.css'

const Card = props => {
  const { image, category, deleteCardAction } = props

  const [modal, handleModal] = useState(false)

  useEffect(() => {
    document.addEventListener('keydown', function(event){
      if (event.key === "Escape") {
        handleModal(false)
      }
    })
  }, []);
  
  const name = image.slice(image.indexOf("/")+1, image.indexOf("."))

  return (
    <div className="card">
      <div className="top_card"><div className="delete_card" onClick={() => deleteCardAction(image)}>╳</div></div>
      <div className="content" onClick={() => handleModal(!modal)}>
        <div className="img_container">
          <img src={`${BASE_URL}${image}`} alt={image} />
        </div>
        <h4>name</h4>
        <p className="name">{name}</p>
        <h4>category</h4>
        <p>{category}</p>
      </div>
      {modal && <CModalImage image={image} handleModal={handleModal} />}
    </div>
  )
}

export default Card