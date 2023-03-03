import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoTrip from "../components/infoTrip/InfoTrip";
import Home from "../components/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vuelo/:vuelos" element={<InfoTrip />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
