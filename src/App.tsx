import React from "react";
import { Route, Routes } from "react-router-dom";
import Map from "./pages/Map";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import Admin from "./pages/admin/Admin";

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>login</h1>

      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Map />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
