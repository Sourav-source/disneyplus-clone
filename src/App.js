import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
