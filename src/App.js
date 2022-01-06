import React from "react";
import "./App.css";
import "./input.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Login } from "./pages/Loginpage/Login";
import { ForgottenPassword } from "./pages/forgottenpassword/ForgottenPassword";
import { Register } from "./pages/Register/Register";
import { CreateSuccess } from "./pages/CreateSuccess/CreateSuccess";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App px-20">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/create-success" element={<CreateSuccess />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
