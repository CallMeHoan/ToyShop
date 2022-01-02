import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { BestSeller } from "../../components/Bestseller/BestSeller";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Navbar />
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
          <h6 className="more-categories child-2">Stuffed toys</h6>
          <h6 className="more-categories child-3">Logic toys</h6>
        </div>
      </div>
      <Footer />
    </div>
  );
};
