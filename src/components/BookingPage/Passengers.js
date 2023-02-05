import React, { useState } from "react";
import Seat from "./Seat";
import RenderSeats from "./SeatsMatrix";
import "./Passengers.css"
const Passenger = (props) => {
  const age=props.age;
  const sex=props.sex;
  const bookedAgent=props.bookedAgent
  const [seat, setSeat] = useState(null);

  const allocateSeat = () => {
    let storedData = JSON.parse(localStorage.getItem("passengerData")) || [];
    let totalseats = parseInt(localStorage.getItem("totalseats"))
    debugger;
    if (age >= 60) {
      for (let i = 0; i < (totalseats); i++) {
        if (i % 5 === 0 || i % 5 === 4) {
          if (!storedData[i]) {
            storedData[i] = { age, sex, bookedAgent };
            setSeat(i + 1);
            if(age){
              localStorage.setItem("passengerData", JSON.stringify(storedData));
              console.log(storedData)
            }
            break;
          }
        }
      }
    } else {
      for (let i = 0; i < (totalseats); i++) {
        if (i % 5 === 1 || i % 5 === 3) {
          if (!storedData[i]) {
            storedData[i] = { age, sex, bookedAgent };
            setSeat(i + 1);
            localStorage.setItem("passengerData", JSON.stringify(storedData));
            break;
          }
        } else {
          for (let i = 0; i < (totalseats); i++) {
            if (i % 5 === 2) {
              if (!storedData[i]) {
                storedData[i] = { age, sex, bookedAgent };
                setSeat(i + 1);
                localStorage.setItem("passengerData", JSON.stringify(storedData));
                break;
              } else {
                if (
                  storedData[i].bookedAgent === bookedAgent &&
                  !(
                    (storedData[i - 1] && storedData[i - 1].sex !== sex) ||
                    (storedData[i + 1] && storedData[i + 1].sex !== sex)
                  )
                ) {
                  storedData[i + 1] = { age, sex, bookedAgent };
                  setSeat(i + 2);
                  localStorage.setItem("passengerData", JSON.stringify(storedData));
                  break;
                }
              }
            }
          }
        }
      }
    }
  };

  return (
    <div className="totalseats-container">
      <button onClick={allocateSeat} >Allocate Seat</button>
      <br />
      <br />
      <Seat seat={seat} />
      <div className="render-seats">
      <RenderSeats/>


      </div>
      
    </div>
  );
};
export default Passenger