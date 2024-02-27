import React from "react";
import { Route } from "react-router-dom";

import "./assets/css/style.css";

import Home from "./pages/Home";

function App() {
  return <Route exact path="/" component={Home} />;
}

export default App;
