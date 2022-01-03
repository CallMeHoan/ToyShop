import React from "react";
import "./App.css";
import "./input.css";
import { Homepage } from "./pages/homepage/Homepage";
import { Login } from "./pages/Loginpage/Login";

function App() {
  return (
    <div className="App px-20">
      {/* <Homepage /> */}
      <Login />
    </div>
  );
}

export default App;
