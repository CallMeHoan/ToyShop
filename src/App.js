import React from "react";
import "./App.css";
import "./input.css";
// import { Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Login } from "./pages/Loginpage/Login";
import { ForgottenPassword } from "./pages/forgottenpassword/ForgottenPassword";
import { Register } from "./pages/Register/Register";

function App() {
  return (
    <div className="App px-20">
      {/* <Homepage /> */}
      {/* <Login /> */}
      {/* <ForgottenPassword /> */}
      <Register />
    </div>
  );
}

export default App;
