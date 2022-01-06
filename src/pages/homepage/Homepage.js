import React from "react";
import { BestSeller } from "../../components/Bestseller/BestSeller";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-container">
        <div className="left-contain">
          <h1 className="best-seller-heading">Best Seller</h1>
          <div className="best-seller-items">
            <div className="bs-item">
              <BestSeller
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/samsung_tab_1-100x100.jpg"
                productName="Yellow Car Toy"
                productPrice="$241.99"
              />
            </div>
            <div className="bs-item">
              <BestSeller
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/samsung_tab_1-100x100.jpg"
                productName="Yellow Car Toy"
                productPrice="$241.99"
              />
            </div>
            <div className="bs-item">
              <BestSeller
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/samsung_tab_1-100x100.jpg"
                productName="Yellow Car Toy"
                productPrice="$241.99"
              />
            </div>
            <div className="bs-item">
              <BestSeller
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/samsung_tab_1-100x100.jpg"
                productName="Yellow Car Toy"
                productPrice="$241.99"
              />
            </div>
            <div className="free-shipping">
              <img src="http://fastortheme.com/toys/image/catalog/toys/banner-01.png" />
            </div>
            <div className="free-shipping">
              <img src="http://fastortheme.com/toys/image/catalog/toys/banner-02.png" />
            </div>
          </div>
        </div>
        <div className="right-contain">
          <div className="top-img">
            <img
              className="top-image"
              src="http://fastortheme.com/toys/image/catalog/toys/slider-01.png"
            />
          </div>
          <div className="banner">
            <div className="banner-img">
              <img src="http://fastortheme.com/toys/image/catalog/toys/banner-03.png"></img>
            </div>
            <div className="banner-img">
              <img src="http://fastortheme.com/toys/image/catalog/toys/banner-04.png"></img>
            </div>
          </div>
          <h6 className="more-categories child-1">Wooden toys</h6>
          <div className="product-container">
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
          </div>
          <h6 className="more-categories child-2">Stuffed toys</h6>
          <div className="product-container">
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
          </div>
          <h6 className="more-categories child-3">Logic toys</h6>
          <div className="product-container">
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
            <div className="product-item">
              <ProductCard
                productImg="http://fastortheme.com/toys/image/cache/catalog/demo/sony_vaio_1-200x200.jpg"
                productName="Sony Vaio"
                productPrice="$100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
