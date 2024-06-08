import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../contenedores/Home";
import Contacto from "../contenedores/Contacto";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
