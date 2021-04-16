import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

//import AboutPage from "./components/AboutPage";
const rootElement =  document.getElementById("root");

render(
  <Router>
    <App />
  </Router>,
  rootElement
);
