import React from "react";
import "./Register.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { AccountSidebar } from "../../components/AccountSidebar/AcccountSidebar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Register = () => {
  return (
    <div className="register">
      <Header />
      <Navbar />
      <div className="page-title">
        <h1 className="title pad">Register</h1>
        <span className="path">Home </span>
        <ArrowForwardIosIcon fontSize="13px" />
        <span className="path"> Account </span>
        <ArrowForwardIosIcon fontSize="13px" />
        <span className="path"> Register</span>
      </div>
      <div className="account-container">
        <div className="account-left">
          <p>
            If you already have an account with us, please login at the login
            page.
          </p>
          <h2>Your Personal Detail</h2>
          <form className="form">
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>
                  <span className="required">* </span>First Name
                </label>
              </div>
              <div className="input-area">
                <input
                  className="input-group"
                  type="text"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>
                  <span className="required">* </span>Last Name
                </label>
              </div>
              <div className="input-area">
                <input
                  className="input-group"
                  type="email"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>
                  <span className="required">* </span>E-Mail
                </label>
              </div>
              <div className="input-area">
                <input
                  className="input-group"
                  type="email"
                  placeholder="E-Mail"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>
                  <span className="required">* </span>Telephone
                </label>
              </div>
              <div className="input-area">
                <input
                  className="input-group"
                  type="number"
                  placeholder="Telephone number"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>Fax</label>
              </div>
              <div className="input-area">
                <input
                  className="input-group"
                  type="number"
                  placeholder="Fax"
                />
              </div>
            </div>
          </form>
          <h2>Your Address</h2>
          <form className="form">
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>Company</label>
              </div>
              <div className="input-area">
                <input
                  className="input-group"
                  type="text"
                  placeholder="Company"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>
                  <span className="required">* </span>Address 1
                </label>
              </div>
              <div className="input-area">
                <input
                  className="input-group"
                  type="text"
                  placeholder="Address 1"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>Address 2</label>
              </div>
              <div className="input-area">
                <input
                  className="input-group"
                  type="text"
                  placeholder="Address 2"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>
                  <span className="required">* </span>City
                </label>
              </div>
              <div className="input-area">
                <input className="input-group" type="text" placeholder="City" />
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>
                  <span className="required">* </span>Post Code
                </label>
              </div>
              <div className="input-area">
                <input
                  className="input-group"
                  type="text"
                  placeholder="Post Code"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>
                  <span className="required">* </span>Country
                </label>
              </div>
              <div className="input-area">
                <select className="input-group">
                  <option>--- Please Select ---</option>
                  <option>Viet Nam</option>
                  <option>The USA</option>
                  <option>The UK</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>
                  <span className="required">* </span>Region / State
                </label>
              </div>
              <div className="input-area">
                <select className="input-group">
                  <option>--- Please Select ---</option>
                  <option>Viet Nam</option>
                  <option>The USA</option>
                  <option>The UK</option>
                </select>
              </div>
            </div>
          </form>
          <h2>Your Password</h2>
          <form className="form">
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>
                  <span className="required">* </span>Password
                </label>
              </div>
              <div className="input-area">
                <input
                  className="input-group"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>
                  <span className="required">* </span>Password Confirm
                </label>
              </div>
              <div className="input-area">
                <input
                  className="input-group"
                  type="password"
                  placeholder="Passowrd Confirm"
                />
              </div>
            </div>
          </form>
          <h2>Newsletter</h2>
          <form className="form">
            <div className="flex justify-between items-center mb-5">
              <div className="text">
                <label>Subcribe</label>
              </div>
              <div className="input-area radio flex items-center">
                <input
                  name="subcribe"
                  className="input-radio"
                  type="radio"
                  value="Yes"
                />
                <span className="radio-text">Yes</span>
                <input
                  name="subcribe"
                  className="input-radio"
                  type="radio"
                  value="No"
                />
                <span className="radio-text">No</span>
              </div>
            </div>
          </form>
        </div>
        <div className="account-right">
          <AccountSidebar />
        </div>
      </div>
      <div className="create-group">
        <p className="agreement">
          I have read and agree to the
          <span className="path"> Privacy Policy</span>
        </p>
        <input className="checkbox" type="checkbox" />
        <button className="btn">Continue</button>
      </div>
      <Footer />
    </div>
  );
};
