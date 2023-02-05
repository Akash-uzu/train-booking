import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import Header from "./components/UI/Header";
import AdminMain from "./components/AdminPage/AdminMain";
import Bookingpage from "./components/BookingPage/Bookingpage";
function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminMain />} />
          <Route path="/booking" element={<Bookingpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
