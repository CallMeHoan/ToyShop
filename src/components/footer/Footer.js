import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="contact-info">
            <img
              className="img-logo"
              src="http://fastortheme.com/toys/image/catalog/toys/icon-mail.png"
            ></img>
            <div className="detail-info">
              <h6>Do you have any question</h6>
              <p>nguyenthienhoangeatam@gmail.com</p>
            </div>
          </div>
          <div className="contact-info">
            <img
              className="img-logo"
              src="http://fastortheme.com/toys/image/catalog/toys/icon-phone.png"
            ></img>
            <div className="detail-info">
              <h6>079-467-6336</h6>
              <p>Mon - Fri: 8:00 - 17:00</p>
            </div>
          </div>
          <button className="btn-red">Contact Form</button>
        </div>
        <div className="license">
          <p>Copyright © 2021, Your Store, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
