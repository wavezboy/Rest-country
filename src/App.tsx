import { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/form/home";
import ClickedCountry from "./components/form/clickedCountry";

function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>

      <Home />
      {/* <ClickedCountry /> */}

      <div className="text-[400px]"></div>
    </BrowserRouter>
  );
}

export default App;
