import { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/form/home";
import ClickedCountry from "./components/form/clickedCountry";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/country/:id" element={<ClickedCountry />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      {/* <Home /> */}

      <div className="text-[400px]"></div>
    </BrowserRouter>
  );
}

export default App;
