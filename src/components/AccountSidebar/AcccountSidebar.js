import React from "react";
import "./AccountSidebar.css";

export const AccountSidebar = () => {
  return (
    <div className="account-sidebar">
      <div className="account-item">
        <p>Login / Resgister</p>
      </div>
      <div className="account-item">
        <p>Forgotten Password</p>
      </div>
      <div className="account-item">
        <p>My Account</p>
      </div>
      <div className="account-item">
        <p>Address Book</p>
      </div>
      <div className="account-item">
        <p>Wish List</p>
      </div>
      <div className="account-item">
        <p>Order History</p>
      </div>
      <div className="account-item">
        <p>Downloads</p>
      </div>
      <div className="account-item">
        <p>Recurring payments</p>
      </div>
      <div className="account-item">
        <p>Reward Points</p>
      </div>
      <div className="account-item">
        <p>Returns</p>
      </div>
      <div className="account-item">
        <p>Transactions</p>
      </div>
      <div className="account-item none">
        <p>Newsletter</p>
      </div>
    </div>
  );
};
