import React from "react";
import { BASE_URL } from "../../services/API";
import './Card.css'

const Card = props => {
  const {image, category} = props
  
  const name = image.slice(image.indexOf("/")+1, image.indexOf("."))

  return (
    <div className="card">
      {/* {`${BASE_URL}${image}`} */}
      <div className="content">
        <div className="img_container">
          <img src={`${BASE_URL}${image}`} alt={image} />
        </div>
        <h4>name</h4>
        <p className="name">{name}</p>
        <h4>category</h4>
        <p>{category}</p>
      </div>
    </div>
  )
}

export default Card