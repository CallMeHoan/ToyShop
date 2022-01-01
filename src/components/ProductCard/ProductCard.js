import React from "react";
import "./ProductCard.js";

export const ProductCard = (props) => {
  return (
    <div className="productCard">
      <div className="product-img">
        <img src={props.productImg} />
      </div>
      <div className="product-detail">
        <span className="product-name">{props.productName}</span>
        <span className="product-price">{props.productPrice}</span>
      </div>
    </div>
  );
};
