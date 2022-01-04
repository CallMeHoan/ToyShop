import React from "react";
import "./App.css";
import "./input.css";
import { Homepage } from "./pages/homepage/Homepage";
import { Login } from "./pages/Loginpage/Login";
import { ForgotPassword } from "./pages/forgotpassword/ForgotPassword";

function App() {
  return (
    <div className="App px-20">
      {/* <Homepage /> */}
      {/* <Login /> */}
      <ForgotPassword />
    </div>
  );
}

export default App;
