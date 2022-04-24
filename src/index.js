import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

// import { StateProvider } from "./context/StateProvider";
// import { initialState } from "./context/initalState";
// import reducer from "./context/reducer";

import App from "./App";
ReactDOM.render(
  <Router>
    <App />
    
  </Router>,
  
  document.getElementById("root")
);