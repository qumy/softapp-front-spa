import React from "react";
import { Route } from "react-router-dom";

import "./assets/css/style.css";

import Home from "./pages/Home";
// import Portfolio from "./pages/Portfolio";
// import About from "./pages/About";

function App() {
  // return <Route exact path="/" component={About} />;
  // return <Route exact path="/" component={Portfolio} />;
  return <Route exact path="/" component={Home} />;
}

export default App;
