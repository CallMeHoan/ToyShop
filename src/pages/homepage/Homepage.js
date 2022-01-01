import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
};
