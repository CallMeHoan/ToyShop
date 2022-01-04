import React from "react";
import "./Login.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { AccountSidebar } from "../../components/AccountSidebar/AcccountSidebar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Login = () => {
  return (
    <div className="login">
      <Header />
      <Navbar />
      <div className="page-title">
        <h1 className="title">Account Login</h1>
        <span className="path">Home </span>
        <ArrowForwardIosIcon fontSize="13px" />
        <span className="path"> Account </span>
        <ArrowForwardIosIcon fontSize="13px" />
        <span className="path"> Login</span>
      </div>
      <div className="account-container">
        <div className="account-left flex justify-between">
          <div className="new-customer">
            <h2>New Customer</h2>
            <h5>Register Account</h5>
            <p>
              By creating an account you will be able to shop faster, be up to
              date on an order's status, and keep track of the orders you have
              previously made.
            </p>
            <button className="btn">Continue</button>
          </div>
          <div className="returning-customer">
            <h2>Returning Customer</h2>
            <h5>I am returning customer</h5>
            <label>E-Mail Address</label>
            <input
              className="input-group"
              type="email"
              placeholder="E-Mail Address"
            />
            <label>Password</label>
            <input
              className="input-group"
              type="password"
              placeholder="Password"
            />
            <p className="forget-password">Forgotten Password</p>
            <button className="btn">Login</button>
          </div>
        </div>
        <div className="account-right">
          <AccountSidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};
