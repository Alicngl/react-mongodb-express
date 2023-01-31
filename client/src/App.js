import React from "react";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import "react-toastify/dist/ReactToastify.css";
import Create from "./pages/Create";
import Hero from "./components/Hero";

export default function App() {
  return (
    <BrowserRouter>
      {window.location.pathname == "/login" ? (
        ""
      ) : window.location.pathname == "/register" ? (
        ""
      ) : (
        <Hero />
      )}
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Cards />} />
        <Route exact path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}
