import React from "react";
import "./ProductCard.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const ProductCard = (props) => {
  return (
    <div className="productCard">
      <div className="product-img">
        <img className="prod-img" src={props.productImg} />
      </div>
      <div className="product-detail">
        <p className="prod-name">{props.productName}</p>
        <div className="prod-price">{props.productPrice}</div>
      </div>
      <div className="interact-btn">
        <div className="add tooltip">
          <button className="btn-add">
            <ShoppingCartIcon />
          </button>
          <span class="tooltiptext">Add To Cart</span>
        </div>
        <div className="add tooltip">
          <button className="btn-add">
            <FavoriteIcon />
          </button>
          <span class="tooltiptext">Add To Wishlist</span>
        </div>
      </div>
    </div>
  );
};
