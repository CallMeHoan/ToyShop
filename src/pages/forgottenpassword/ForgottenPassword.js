import React from "react";
import "./ForgottenPassword.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { AccountSidebar } from "../../components/AccountSidebar/AcccountSidebar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const ForgottenPassword = () => {
  return (
    <div className="forgottenpassword">
      <Header />
      <Navbar />
      <div className="page-title">
        <h1 className="title pad">Forgot Your Password</h1>
        <span className="path">Home </span>
        <ArrowForwardIosIcon fontSize="13px" />
        <span className="path"> Account </span>
        <ArrowForwardIosIcon fontSize="13px" />
        <span className="path"> Forgotten Password</span>
      </div>
      <div className="account-container">
        <div className="account-left">
          <p>
            Enter the e-mail address associated with your account. Click submit
            to have your password e-mailed to you.
          </p>
          <h2>Your E-Mail Address</h2>
          <label>
            <span className="required">* </span>E-Mail Address
          </label>
          <input
            className="input-group"
            type="email"
            placeholder="E-Mail Address"
          />
          <div className="flex justify-between">
            <button className="btn-red">Back</button>
            <button className="btn">Continue</button>
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
