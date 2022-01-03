import React from "react";
import "./Login.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { AccountSidebar } from "../../components/AccountSidebar/AcccountSidebar";

export const Login = () => {
  return (
    <div className="login">
      <Header />
      <Navbar />
      <div className="login-container">
        <div className="login-left"></div>
        <div className="login-right">
          <AccountSidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};
