import React from "react";
import { useState } from "react";
import "./Bookingpage.css";
import Passenger from "./Passengers";

const Bookingpage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const tickets = JSON.parse(localStorage.getItem("tickets"));
  const compartments = JSON.parse(localStorage.getItem("compartments"));
  const a = parseInt(compartments) * 6;
  const [passengers, setPassengers] = useState([]);
  const [counter, setCounter] = useState(0);
  const bookedAgent = localStorage.getItem("currentagent");

  localStorage.setItem("totalseats", JSON.stringify(a)); /// pass it to seat rendering component


  const pList = (e) => {
    if (name && age && sex && counter < tickets) {
      //setPassengers((prev)=> {return [...prev,{name:name,age:age,sex:sex, bookedAgent:bookedAgent}]} )
      setPassengers((prev) => [
        ...prev,
        { name: name, age: age, sex: sex, bookedAgent: bookedAgent },
      ]);
      setCounter((prev) => prev + 1);

    }
  };

  localStorage.setItem("passengerData", JSON.stringify(passengers));

  return (
    <div className="main-booking">
      <div className="passenger-details">
        <h3>No of tickets selected by Admin is : {tickets}</h3>
        <form className="form-container">
          <h3>Passenger Details</h3>
          <input
            className="input"
            placeholder="Passenger Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select name="sex" id="sex" onChange={(e) => setSex(e.target.value)}>
            <option value={null}>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            className="age"
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />

          <button type="button" onClick={pList}>
            add
          </button>
        </form>
        <div className="p-main-list">
          {passengers &&
            passengers.map((pass) => (
              <div key={Math.random() * 10} className="p-list">
                <h3>Passenger</h3>
                <p>
                  <span>Name:</span> {pass.name}
                </p>
                <p>
                  <span>Age:</span> {pass.age}
                </p>
                <p>
                  <span>Sex:</span> {pass.sex}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="seats">
        <h1>{compartments} - Rows Selected by Admin</h1>
        <div className="render-seats">
          <Passenger/>
        </div>
      </div>
    </div>
  );
};

export default Bookingpage;
