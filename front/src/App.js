import Calculator from "./components/Calculator";
import React, { useState } from "react";
import Main from "./components/Main";
import PDFtest from "./components/PDFtest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/file" element={<PDFtest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
