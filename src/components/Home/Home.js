import React from "react";

import "./Home.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const adminHandler = () => {
    navigate("/admin");
  };
  const agentHandler = () => {
    navigate("/login");
  };
  return (
    <div className="home">
      <div className="wrapper">
        <h2>Login </h2>
        <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png"/>
        <div className="container-home">
          <button onClick={adminHandler}>Admin</button>

          <button onClick={agentHandler}>Agent</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
