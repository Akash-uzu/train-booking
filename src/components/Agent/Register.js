import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [dob, setdob] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const onSubmitregis = (e) => {
    e.preventDefault();

    //validation

    if ( image && dob && phone && address) {
      if (phone.length < 10) {
        setError("Invalid phone number");
        return;
      }
      const currentAgent = localStorage.getItem("currentagent");
      let data = JSON.parse(localStorage.getItem("data"));
      let registeredAgents =
        JSON.parse(localStorage.getItem("registeredAgents")) || [];
      registeredAgents.push([
        ...registeredAgents,
        { image, dob, phone, address },
      ]);
      if(data){}
      data.forEach((user) => {
        if (user.Username === currentAgent) {
          user.isRegistered = true;
        }
      });
      localStorage.setItem("registeredAgents",JSON.stringify(registeredAgents))
      localStorage.setItem("data", JSON.stringify(data));
      navigate("/booking");
    } else {
      setError("Enter valid Details");
      return;
    }
  };

  return (
    <div className="agent-regis-main-container">
      <div className="agent-regis-sub-container">
        <h2 className="regis-heading">One Time Registration</h2>
        <form onSubmit={onSubmitregis} className="agent-regis-form">
          <h3>image</h3>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="Choose File"
            className="agent-regis-input"
            type="file"
          />

          <h3>Date of birth</h3>
          <input
            value={dob}
            onChange={(e) => setdob(e.target.value)}
            placeholder="date of birth"
            className="agent-regis-input"
            type="date"
          />
          <h3>Phone Number</h3>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="agent-regis-input"
            type="number"
          />
          <h3>addresss </h3>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="agent-regis-input"
            type="text"
          />

          <button className="regis-btn" type="submit">
            Register
          </button>
          {error && <p className="err">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
