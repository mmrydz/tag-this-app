import React from "react";
import "./style.css";
import Items from "../../pages/Items";

function ItemCard(props) {
  return (
    <div className="row">
      <div className="col">
        {props.items.map(item => (
          <div className="card mb-3 mx-3">
            <div className="card-header text-center">
              <h4>{item.itemName}</h4>
              <p className="card-text">{item.category}</p>
            </div>
            <img src={item.image} className="card-img-top" />
            <div className="card-body">
              <p className="card-text">${item.price}</p>
              <p className="card-text">{item.quality}</p>
              <p className="card-text">{item.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemCard;
