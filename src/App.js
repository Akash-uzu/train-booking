import React from "react";
import { useState } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import Header from "./components/UI/Header";
import AdminMain from "./components/AdminPage/AdminMain";
import Bookingpage from "./components/BookingPage/Bookingpage";
import Register from "./components/Agent/Register";

function App() {
  const [isVisible,setIsvisible]  = useState(false)

  return (
    <>
      <BrowserRouter>
      <Header isVisible = {isVisible} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsvisible = {setIsvisible} />} />
          <Route path="/register" element={<Register setIsvisible = {setIsvisible}/>}/>
          <Route path="/admin" element={<AdminMain setIsvisible = {setIsvisible} />} />
          <Route path="/booking" element={<Bookingpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
