import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home.js"
import About from "./componts/about.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
