import React from "react";
import "./BestSeller.css";

export const BestSeller = (props) => {
  return (
    <div className="best-seller">
      <div className="best-seller-container">
        <div className="best-seller-img">
          <img className="item-img" src={props.productImg} />
        </div>
        <div className="product-info">
          <p className="product-name">{props.productName}</p>
          <span className="product-price">{props.productPrice}</span>
        </div>
      </div>
    </div>
  );
};
